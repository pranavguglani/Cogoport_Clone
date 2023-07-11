window.addEventListener("scroll", function() {
    // Code to execute when scrolling occurs

    var scrolled = window.scrollY;
    if (scrolled > 50) { // Change color after scrolling 100 pixels
        this.document.getElementsByClassName("header")[0].style.backgroundColor="#fff";
      }else
      {
        this.document.getElementsByClassName("header")[0].style.backgroundColor="#fbdc00"
      }
        
      
  });