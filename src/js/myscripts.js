//Responsive navigation bar - becomes little icons when the screen width is reduced.
//Use of Conditional statement in a Function (x1)
//Is this a dynamic manipulation of the DOM?
function myNavFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "allTopNav") {
        x.className += " responsive";
    } else {
        x.className = "allTopNav";
    }
}

//Event Handler (1)
function tick(id) {
    document.getElementById(`button_${id}`).value = "ITEM ADDED";
    setTimeout(() => (document.getElementById(`button_${id}`).value = "+ QUICK ADD"), 2000);
}



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
    if (document.myForm.Email.value == "" && atpos < 1 || (dotpos - atpos < 2)) {
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
    if (document.myForm.County.value == "-1") {
        alert("Please provide your county");
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
    setTimeout(showSlides, 2000); // Change image every 3 seconds
}


//Use of GUI Control & Event Handler
const btn = document.getElementById('shopNowButton');

btn.addEventListener('click', function onClick() {
    btn.style.backgroundColor = '#dc9188';
    btn.style.color = 'white';
});




//Again, not done the best
//won't even count this as an eveent handler
function tickA() {
    document.getElementById("addButton").value = "ITEM ADDED";
    setTimeout(() => (document.getElementById("addButton").value = "ADD TO CART"), 2000);
}

// Shopping Cart logic
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    getItems() {
        return this.items;
    }
}
