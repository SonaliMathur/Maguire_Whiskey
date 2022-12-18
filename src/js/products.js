// Display Array (1)
let products = [
    {
        id: 0,
        productId: 0,
        name: 'Old Fashioned',
        price: 25.99,
        img_src: '../../Products/ItemA.png',
        reference: "./oldFashionedKit.html"
    },
    {
        id: 0,
        productId: 1,
        name: 'The Manhattan',
        price: 35.99,
        img_src: '../../Products/ItemB.png',
        reference: "./theManhattan.html",
    },
    {
        id: 0,
        productId: 2,
        name: 'Milk Punch',
        price: 27.99,
        img_src: '../../Products/ItemC.png',
        reference: "./milkPunchKit.html",
    },
    {
        id: 0,
        productId: 3,
        name: 'The Brooklyn',
        price: 38.99,
        img_src: '../../Products/ItemD.png',

        reference: "../negroniKit.html",
    },
    {
        id: 0,
        productId: 4,
        name: 'Blushing Sour',
        price: 45.99,
        img_src: '../../Products/ItemE.png',

    },
    {
        id: 0,
        productId: 5,
        name: 'The Envy',
        price: 45.99,
        img_src: '../../Products/ItemF.png',
        reference: "../negroniKit.html",
    },

    {
        id: 0,
        productId: 6,
        name: 'Purple Rain',
        price: 38.99,
        img_src: '../../Products/ItemG.png',
        reference: "../negroniKit.html",
    },
    {
        id: 0,
        productId: 7,
        name: 'Irish Mule',
        price: 25.99,
        img_src: '../../Products/ItemH.png',

    },
    {
        id: 0,
        productId: 8,
        name: 'Mint Julep',
        price: 25.99,
        img_src: '../../Products/ItemI.png',
        reference: "../negroniKit.html",
    }
]



// https://www.tutorialspoint.com/How-do-I-call-a-JavaScript-function-on-page-load
// https://stackoverflow.com/questions/71415643/foreach-method-in-javascript-for-key-value-pairs
function displayProducts() {
    var product_div = document.getElementById('products'); // The div in the HTML I want to input into
    product_div.innerHTML = "";
    var productCount = 0; // I want 3 products per row, counting so JS knows when to input new <div class ="row">
    let row = `<div class=row>`
    products.forEach(item => {
        if (productCount < 2) {
            row += `
            <div class="column">
            <div class="card">
                <a href="${item.reference}"><img src="${item.img_src}" alt="cocktail image" style="width:100%""></a>
                <div class=" divider2">
                </div>
                <h2>${item.name}</h2>
                <p class="price">€${item.price}</p>
                <div class="information2">
                    
                   
            
                </div>
                <div class="quickButton">
                    <input id="button_${item.productId}" class="quickAddButton" type="button" value="+ QUICK ADD" onclick="addItem(products.find(p => p.productId === ${item.productId}))">
                </div>
            </div>
            </div>
            `
            productCount++;

        } else {
            row += `
            <div class="column">
            <div class="card">
            <a href="${item.reference}"><img src="${item.img_src}" alt="cocktail image" style="width:100%""></a>
                <div class=" divider2">
                </div>
                <h2>${item.name}</h2>
                <p class="price">€${item.price}</p>
                <div class="information2">
                  
                   
                </div>
                <div class="quickButton">
                    <input id="button_${item.productId}" class="quickAddButton" type="button" value="+ QUICK ADD" onclick="addItem(products.find(p => p.productId === ${item.productId}))">
                </div>
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


function highToLow() {
    products.sort((a, b) => {
        return b.price - a.price;
    });
    displayProducts();
}

function lowToHigh() {
    products.sort((a, b) => {
        return a.price - b.price;
    });
    displayProducts();
}



function displayCartItems() {
    let cartItems = document.getElementById('cart-items');
    let cartItemCount = 0;
    let row = `<div class="row">`;
    let rows = "";
    if (shoppingCart.length == 0) {
        row += `
            <div class="column">
            <div class="cart-card">
                <div class=" CartImg">
                <img class=emptyCart src="../../Images/EmptyCart.png" alt="emptycart" style="height: 190px;" />
                <div>
                <div class="cartEmptyText">
                <h2>YOUR CART IS EMPTY</H2>
                <div>
            </div>
            </div>
            </div>
        `
        getTotal();
        cartItems.innerHTML = row;
    } else {
        let emptyButton = document.getElementById('empty-cart-button');
        emptyButton.innerHTML = `
        <div class="quickButton2">
            <input class="quickAddButton2" type="button" value="EMPTY CART" onclick="clearCart()">
        </div>
        `
    }
    shoppingCart.forEach(item => {
        if (cartItemCount < 2) {
            row = `
            <div class="column">
            <div class="card">
                <a href="${item.reference}"><img src="${item.img_src}" alt="cocktail image" style="width:100%""></a>
                <div class=" divider2">
                </div>
                <h2>${item.name}</h2>
                <p class="price2">€${item.price}</p>
                <div class="information2">
                    
                </div>
                <div class="quickButton3">
                    <input id="button_${item.id}" class="quickAddButton3" type="button" value="- REMOVE" onclick="removeItem(${item.id})">
                </div>
            </div>
            </div>
            `
            rows += row;
            cartItemCount++;

        } else {
            row = `
            <div class="column">
            <div class="card">
            <a href="${item.reference}"><img src="${item.img_src}" alt="cocktail image" style="width:100%""></a>
                <div class=" divider2">
                </div>
                <h2>${item.name}</h2>
                <p class="price2">€${item.price}</p>
                <div class="information2">
                    
                </div>
                <div class="quickButton">
                    <input id="button_${item.id}" class="quickAddButton3" type="button" value="- REMOVE" onclick="removeItem(${item.id})">
                </div>
            </div>
            </div>
            </div>
            `
            cartItemCount = 0;
            rows += row;
        }
        cartItems.innerHTML = rows;
        getTotal();
    })
}


// https://www.w3docs.com/snippets/javascript/how-to-clone-a-javascript-object.html
let shoppingCart = [];


function copy(mainObject) {
    let objectCopy = {}; // objectCopy will store a copy of the mainObject
    let key;
    for (key in mainObject) {
        objectCopy[key] = mainObject[key]; // copies each property to the objectCopy object
    }
    return objectCopy;
}

function addItem(item) {
    tick(item.productId);
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
    displayCartItems();
}

function clearCart() {
    shoppingCart = [];
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    displayCartItems();
}

function getTotal() {
    let totalDiv = document.getElementById('total');
    let total = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        total += shoppingCart[i].price;
    }
    total = Math.round(total * 100) / 100;
    totalDiv.innerHTML = total;
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


window.onload(document.body.style.opacity='1', displayProducts());