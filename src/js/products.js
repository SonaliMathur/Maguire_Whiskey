// Display products logic
//https://stackoverflow.com/questions/65237381/trying-to-filter-an-array-of-products-with-an-array-of-filters-upon-click
const products = [
    {
        id: 0,
        productId: 0,
        name: 'Number 1 Kit',
        price: 25.99,
        img_src: '../../Products/ItemA.png',
       
        reference: "./negroniKit.html"
    },
    {
        id: 0,
        productId: 1,
        name: 'Number 2 Kit',
        price: 25.99,
        img_src: '../../Products/ItemB.png',
     
        reference: "../negroniKit.html",
    },
    {
        id: 0,
        productId: 2,
        name: 'Number 3 Kit',
        price: 25.99,
        img_src: '../../Products/ItemC.png',
       
        reference: "../negroniKit.html",
    },
    {
        id: 0,
        productId: 3,
        name: 'Number 4 Kit',
        price: 25.99,
        img_src: '../../Products/ItemD.png',
       
        reference: "../negroniKit.html",
    },
    {
        id: 0,
        productId: 4,
        name: 'Number 5 Kit',
        price: 25.99,
        img_src: '../../Products/ItemE.png',
       
    },
    {
        id: 0,
        productId: 5,
        name: 'Number 6 Kit',
        price: 25.99,
        img_src: '../../Products/ItemF.png',
      
        reference: "../negroniKit.html",
    }
]

// https://www.tutorialspoint.com/How-do-I-call-a-JavaScript-function-on-page-load
// https://stackoverflow.com/questions/71415643/foreach-method-in-javascript-for-key-value-pairs
function displayProducts() {
    var product_div = document.getElementById('products'); // The div in the HTML I want to input into
    var productCount = 0; // I want 3 products per row, counting so JS knows when to input new <div class ="row">
    let row = `<div class=row>`
    products.forEach(item => {
        if (productCount < 2) {
            row += `
            <div class="column">
                <a href="${item.reference}"><img src="${item.img_src}" alt="cocktail image" style="width:100%""></a>
                <div class=" divider2">
                </div>
                <h2>${item.name}</h2>
                <p class="price">€${item.price}</p>
                <div class="information2">
                    
                   
            
                </div>
                <div class="quickButton">
                    <input id="button_${item.id}" class="quickAddButton" type="button" value="+ QUICK ADD" onclick="addItem(products[${item.productId}])">
                </div>
            </div>
            `
            productCount++;

        } else {
            row += `
            <div class="column">
            <a href="${item.reference}"><img src="${item.img_src}" alt="cocktail image" style="width:100%""></a>
                <div class=" divider2">
                </div>
                <h2>${item.name}</h2>
                <p class="price">€${item.price}</p>
                <div class="information2">
                  
                   
                </div>
                <div class="quickButton">
                    <input id="button_${item.id}" class="quickAddButton" type="button" value="+ QUICK ADD" onclick="addItem(products[${item.productId}])">
                </div>
            </div>
            </div>
            `
            productCount = 0;
            product_div.innerHTML += row;
            row = `<div class="row">`
        }
    })
}



function displayCartItems() {
    let cartItems = document.getElementById('cart-items');
    let cartItemCount = 0;
    let row = `<div class="row">`;
    let rows = "";
    if (shoppingCart.length == 0) {
        row += `
            <div class="column">
                <h2>Cart is empty</h2>
            </div>
            </div>
        `
        cartItems.innerHTML = row;
    } else {
        let emptyButton = document.getElementById('empty-cart-button');
        emptyButton.innerHTML = `
        <div class="quickButton">
            <input class="quickAddButton" type="button" value="Empty Cart" onclick="clearCart()">
        </div>
        `
    }
    shoppingCart.forEach(item => {
        if (cartItemCount < 2) {
            row = `
            <div class="column">
                <a href="${item.reference}"><img src="${item.img_src}" alt="cocktail image" style="width:100%""></a>
                <div class=" divider2">
                </div>
                <h2>${item.name}</h2>
                <p class="price">€${item.price}</p>
                <div class="information2">
                    
                </div>
                <div class="quickButton">
                    <input id="button_${item.id}" class="quickAddButton" type="button" value="- REMOVE" onclick="removeItem(${item.id})">
                </div>
            </div>
            `
            rows += row;
            cartItemCount++;

        } else {
            row = `
            <div class="column">
            <a href="${item.reference}"><img src="${item.img_src}" alt="cocktail image" style="width:100%""></a>
                <div class=" divider2">
                </div>
                <h2>${item.name}</h2>
                <p class="price">€${item.price}</p>
                <div class="information2">
                    
                </div>
                <div class="quickButton">
                    <input id="button_${item.id}" class="quickAddButton" type="button" value="- REMOVE" onclick="removeItem(${item.id})">
                </div>
            </div>
            </div>
            `
            cartItemCount = 0;
            rows += row;
        }
        cartItems.innerHTML = rows;
    })
}



let shoppingCart = [];

// https://www.w3docs.com/snippets/javascript/how-to-clone-a-javascript-object.html
function copy(mainObject) {
    let objectCopy = {}; // objectCopy will store a copy of the mainObject
    let key;
    for (key in mainObject) {
        objectCopy[key] = mainObject[key]; // copies each property to the objectCopy object
    }
    return objectCopy;
}

function addItem(item) {
    let new_item = copy(item);
    new_item.id = shoppingCart.length + 1;
    shoppingCart.push(new_item);
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}

function removeItem(id) {
    let index = getCartIndex(id);
    if (index > -1) {
        shoppingCart.splice(index, 1);
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    }
}

function clearCart() {
    shoppingCart = [];
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}

function getTotal() {
    let total = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        total += shoppingCart[i].price;
    }
    return total;
}

// Load the shopping cart from local storage when the page loads
let storedCart = localStorage.getItem('shoppingCart');
if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
}



function getCartIndex(id) {
    return shoppingCart.findIndex(function (item) {
        return item.id === id;
    });
}


var negroniDrinkArray = [
    { drink: "Campari", amount: 1 + "oz" },
    { drink: "Gin", amount: 1 + "oz" },
    { drink: "Sweet Red Vermoth", amount: 1 + "oz" },
    { drink: "Orange Peel", amount: "A slice" },
]

//Insert data function
function insertRecipe() {
    var table = document.getElementById("drinkData");
    table.innerHTML = "";
    var tr = "";
    negroniDrinkArray.forEach(x => {
        tr += '<tr>';
        tr += '<td>' + x.drink + '</td>' + '<td>' + x.amount + '</td>'
        tr += '</tr>'

    })
    table.innerHTML += tr;
}