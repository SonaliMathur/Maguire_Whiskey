//Responsive navigation bar - becomes little icons when the screen width is reduced.
//Use of Conditional statement in a Function (1)
function myNavFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "allTopNav") {
      x.className += " responsive";
    } else {
      x.className = "allTopNav";
    }
  }


//sorry, done very inefficiently but I couldn't figure it out...
//I'll count it as one Event Handler (1) for onclick since they are all the same
function tick(){
  document.getElementById("button").value = "ITEM ADDED";
  setTimeout(() => (document.getElementById("button").value  = "+ QUICK ADD"), 2000);
}

function tick2(){
  document.getElementById("button2").value = "ITEM ADDED";
  setTimeout(() => (document.getElementById("button2").value  = "+ QUICK ADD"), 2000);
}

function tick3(){
  document.getElementById("button3").value = "ITEM ADDED";
  setTimeout(() => (document.getElementById("button3").value  = "+ QUICK ADD"), 2000);
}
function tick4(){
  document.getElementById("button4").value = "ITEM ADDED";
  setTimeout(() => (document.getElementById("button4").value  = "+ QUICK ADD"), 2000);
}

function tick5(){
  document.getElementById("button5").value = "ITEM ADDED";
  setTimeout(() => (document.getElementById("button5").value  = "+ QUICK ADD"), 2000);
}

function tick6(){
  document.getElementById("button6").value = "ITEM ADDED";
  setTimeout(() => (document.getElementById("button6").value  = "+ QUICK ADD"), 2000);
}




//Input Validation (x5), GUI elements (2) of dropdown and submit button, Function (1)
function validate() {
  var emailID = document.myForm.Email.value;
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");
      
  if( document.myForm.Name.value == "" ) {
     alert( "Please provide your name." );
     document.myForm.Name.focus() ;
     return false;
  }
  if( document.myForm.Email.value == "" && atpos < 1 || ( dotpos - atpos < 2 )) {
     alert( "Please enter correct email ID with an @ and a ." );
     document.myForm.Email.focus() ;
     return false;
  }
  if( document.myForm.Phone.value == "" || isNaN( document.myForm.Phone.value ) ||
     document.myForm.Phone.value.length != 10 ) {
     
     alert( "Please provide your number in a format ##########." );
     document.myForm.Phone.focus() ;
     return false;
  }
  if( document.myForm.County.value == "-1" ) {
     alert( "Please provide your county" );
     return false;
  }
  return( true );
}



