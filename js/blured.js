
   window.onload = function(){
      var contentContainer = document.createElement("div");
      var blurredBackgroundContainer = document.createElement("div");
      var blurredBackground = document.createElement("div");
      var colorBlur1 = document.createElement("div");
      var colorBlur2 = document.createElement("div");
      var colorBlur3 = document.createElement("div");

      contentContainer.setAttribute("id","contentContainer");
      blurredBackground.setAttribute("id","blurredBackground");
      blurredBackgroundContainer.setAttribute("id","blurredBackgroundContainer");
      colorBlur1.setAttribute("class","colorBlur1 color-blur");
      colorBlur2.setAttribute("class","colorBlur1 color-blur");
      colorBlur3.setAttribute("class","colorBlur1 color-blur");
      document.body.appendChild(contentContainer);
      while(document.body.firstChild !== contentContainer)
      {
          contentContainer.appendChild(document.body.firstChild);
      }
      document.body.insertBefore(blurredBackgroundContainer, document.body.firstChild);
      blurredBackgroundContainer.appendChild(blurredBackground);
      blurredBackground.appendChild(colorBlur1);
      blurredBackground.appendChild(colorBlur2);
      blurredBackground.appendChild(colorBlur3);

      blurredBackground.setAttribute("style", "background: linear-gradient(44deg, rgb(103, 164, 224) 0%, rgb(125, 198, 255) 100%); filter: blur(50px);");
      colorBlur1.setAttribute("style", "top: -94%; left: 71%; background: radial-gradient(at 50% 50%, rgb(150, 144, 150) 0%, rgb(224, 215, 224) 100%);");
      colorBlur2.setAttribute("style", "top: -69%; left: -99%; background: rgba(129, 59, 155, 0.4);");
      colorBlur3.setAttribute("style", "top: -77%; left: -62%; background: rgba(32, 43, 94, 0.4);");
   }

