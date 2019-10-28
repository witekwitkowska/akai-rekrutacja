/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
function validateForm() {
	var values = document.forms["myForm"]
	return (ifName(values["first_name"].value) && ifSurname(values["last_name"].value) && ifEmailValid(values["email"].value))	
}

function ifName(x) {
  	if (x == "") {
    	alert("Name must be filled out");
    	return false;
	}
	return true
}

function ifSurname(xy) {
	console.log(xy)
  	if (xy == "") {
    	alert("last name must be filled out");
    	return false;
	}
	return true
}

function ifEmailValid (email) {
	var email = document.forms["myForm"]["email"].value;
	return /\S+@\S+\.\S+/.test(email)
}