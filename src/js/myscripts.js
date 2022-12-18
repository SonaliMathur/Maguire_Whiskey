
//Responsive navigation bar - becomes little icons when the screen width is reduced.
//Use of Conditional statement in a Function (x1)
function myNavFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "allTopNav") {
        x.className += " responsive";
    } else {
        x.className = "allTopNav";
    }
}


var countDownDate = new Date("Jan 20, 2023 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);




//Event Handler (1)
function tick(id) {
    document.getElementById(`button_${id}`).value = "ITEM ADDED";
    setTimeout(() => (document.getElementById(`button_${id}`).value = "+ QUICK ADD"), 2000);
}

// function removeTick() {
//     document.getElementById(`button_${id}`).value = "- REMOVE";
//     setTimeout(() => (document.getElementById(`button_${id}`).value = "REMOVED"), 2000);
// }






//Input Validation (x5), GUI elements (x2) of dropdown and submit button, Function (x1)
function validate() {
    var emailID = document.myForm.Email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (document.myForm.Name.value == "") {
        alert("Please provide your name.");
        document.myForm.Name.focus();
        return false;
    }
    if (document.myForm.Email.value == "" && atpos < 1 || (dotpos - atpos < 3)) {
        alert("Please enter correct email ID with an @ and a .");
        document.myForm.Email.focus();
        return false;
    }
    if (document.myForm.Phone.value == "" || isNaN(document.myForm.Phone.value) ||
        document.myForm.Phone.value.length != 10) {

        alert("Please provide your number in a format ##########.");
        document.myForm.Phone.focus();
        return false;
    }
    if (document.myForm.Province.value == "-1") {
        alert("Please provide your province");
        return false;
    }
    return (true);
}





//Function with For Loop for slideshow(x1)
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}


//Use of GUI Control & Event Handler
const btn = document.getElementById('shopNowButton');

btn.addEventListener('click', function onClick() {
    btn.style.backgroundColor = '#dc9188';
    btn.style.color = 'white';
});




//Event Handler
function tickA() {
    document.getElementById("addButton").value = "ITEM ADDED";
    setTimeout(() => (document.getElementById("addButton").value = "ADD TO CART"), 2000);
}




//https://codepen.io/nadezda-g/pen/VwZOZJd
window.onscroll = function () {
    var theta = document.documentElement.scrollTop / -360 % Math.PI;

    document.getElementById('rotationImg').style.transform = 'rotate(' + theta + 'rad)';
}





