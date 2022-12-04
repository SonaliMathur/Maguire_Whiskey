//Responsive navigation bar - becomes little icons when the screen width is reduced.
//Use of Conditional Statements (1)
function myNavFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "allTopNav") {
      x.className += " responsive";
    } else {
      x.className = "allTopNav";
    }
  }

  //rotation of round images with scroll pattern
