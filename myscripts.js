//Responsive navigation bar - becomes little icons when the screen width is reduced.
//Use of Conditional Statements (1) in a Function (1)
function myNavFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "allTopNav") {
      x.className += " responsive";
    } else {
      x.className = "allTopNav";
    }
  }

  //Quick Add Button - colour changes for a bit when pressed
  //Use of function (2)

  const btn = document.getElementById('btn');
  index0 = 0
  index1 = 1

  const colours = ['green', '#D37267'];

  btn.addEventListener('Click', function buttonColour() {
      buttonColour.style.backgroundColor = colours[Index];
      index = index + 1
  });
