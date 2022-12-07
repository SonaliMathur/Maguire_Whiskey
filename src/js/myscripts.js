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


//sorry, done very inefficiently but I couldn't figure it out...
//I'll count it as one Event Handler (1) for onclick since they are all the same
function tick() {
    document.getElementById("button").value = "ITEM ADDED";
    setTimeout(() => (document.getElementById("button").value = "+ QUICK ADD"), 2000);
}

function tick2() {
    document.getElementById("button2").value = "ITEM ADDED";
    setTimeout(() => (document.getElementById("button2").value = "+ QUICK ADD"), 2000);
}

function tick3() {
    document.getElementById("button3").value = "ITEM ADDED";
    setTimeout(() => (document.getElementById("button3").value = "+ QUICK ADD"), 2000);
}
function tick4() {
    document.getElementById("button4").value = "ITEM ADDED";
    setTimeout(() => (document.getElementById("button4").value = "+ QUICK ADD"), 2000);
}

function tick5() {
    document.getElementById("button5").value = "ITEM ADDED";
    setTimeout(() => (document.getElementById("button5").value = "+ QUICK ADD"), 2000);
}

function tick6() {
    document.getElementById("button6").value = "ITEM ADDED";
    setTimeout(() => (document.getElementById("button6").value = "+ QUICK ADD"), 2000);
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

// Display products logic

const products = {
    1: {
        name: 'Negroni Kit',
        price: 25.5,
        img_src: 'Products/ItemA.png',
        description: "Description 1"
    },
    2: {
        name: 'The 1829 Kit',
        price: 25.5,
        img_src: 'Products/ItemB.png',
        description: "Description 2"
    },
    3: {
        name: 'Negroni Kit',
        price: 25.5,
        img_src: 'Products/ItemC.png',
        description: "Description 3"
    },
    4: {
        name: 'Negroni Kit',
        price: 25.5,
        img_src: 'Products/ItemD.png',
        description: "Description 4"
    },
    5: {
        name: 'Negroni Kit',
        price: 25.5,
        img_src: 'Products/ItemE.png',
        description: "Description 5"
    },
    6: {
        name: 'Negroni Kit',
        price: 25.5,
        img_src: 'Products/ItemF.png',
        description: "Description 6"
    }
}

// https://www.tutorialspoint.com/How-do-I-call-a-JavaScript-function-on-page-load
// https://stackoverflow.com/questions/71415643/foreach-method-in-javascript-for-key-value-pairs
function displayProducts() {
    var product_div = document.getElementById('products')
    product_div.innerHTML = "";
    products.forEach(function (key) {
        product_div.innerHTML +=
        `
        <div class="column">
            <a href="negroniKit.html"><img src="${key.img_src}" alt="cocktail image" style="width:100%""></a>
            <div class=" divider2">
            </div>
            <h2>${key.name}</h2>
            <p class="price">${key.price}</p>
            <div class="information2">
                <p class="info">${key.description}</p>
            </div>
            <div class="quickButton">
                <input id="button" class="quickAddButton" type="button" value="+ QUICK ADD" onclick="${ShoppingCart.addToCart(key)}">
            </div>
        </div>
        `
    })
    console.log(product_div.innerHTML)
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

let items = {

}