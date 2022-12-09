// Display products logic
//https://stackoverflow.com/questions/65237381/trying-to-filter-an-array-of-products-with-an-array-of-filters-upon-click
const products = [
    {
        id: 1,
        name: 'Negroni Kit',
        price: 25.99,
        img_src: '../../Products/ItemA.png',
        descriptionOne: "gin, vermouth, shit in my ass",
        reference: "./negroniKit.html"
        // descriptionTwo: "Fortnite battle pass"
    },
    {
        id: 2,
        name: 'The 1829 Kit',
        price: 25.99,
        img_src: '../../Products/ItemB.png',
        descriptionOne: "gin, vermouth, shit in my ass",
        reference: "../negroniKit.html",
        // descriptionTwo: "Fortnite battle pass"
    },
    {
        id: 3,
        name: 'Negroni Kit',
        price: 25.99,
        img_src: '../../Products/ItemC.png',
        descriptionOne: "gin, vermouth, shit in my ass",
        reference: "../negroniKit.html",
        // descriptionTwo: "Fortnite battle pass"
    },
    {
        id: 4,
        name: 'Negroni Kit',
        price: 25.99,
        img_src: '../../Products/ItemD.png',
        descriptionOne: "gin, vermouth, shit in my ass",
        reference: "../negroniKit.html",
        // descriptionTwo: "Fortnite battle pass"
    },
    {
        id: 5,
        name: 'Negroni Kit',
        price: 25.99,
        img_src: '../../Products/ItemE.png',
        descriptionOne: "gin, vermouth, shit in my ass",
        // descriptionTwo: "Fortnite battle pass"
    },
    {
        id: 6,
        name: 'Negroni Kit',
        price: 25.99,
        img_src: '../../Products/ItemF.png',
        descriptionOne: "gin, vermouth, shit in my ass", 
        reference: "../negroniKit.html",
        // descriptionTwo: "Fortnite battle pass"
    }
]

// https://www.tutorialspoint.com/How-do-I-call-a-JavaScript-function-on-page-load
// https://stackoverflow.com/questions/71415643/foreach-method-in-javascript-for-key-value-pairs
function displayProducts() {
    var product_div = document.getElementById('products'); // The div in the HTML I want to input into
    var productCount = 1; // I want 3 products per row, counting so JS knows when to input new <div class ="row">
    let row = `<div class=row>`
    products.forEach(x => {
        if (productCount <= 2) {
            row += `
            <div class="column">
                <a href="${x.reference}"><img src="${x.img_src}" alt="cocktail image" style="width:100%""></a>
                <div class=" divider2">
                </div>
                <h2>${x.name}</h2>
                <p class="price">€${x.price}</p>
                <div class="information2">
                    <p class="info">${x.descriptionOne}</p>
                   
            
                </div>
                <div class="quickButton">
                    <input id="button_${x.id}" class="quickAddButton" type="button" value="+ QUICK ADD" onclick="tick(${x.id})">
                </div>
            </div>

            
            `
            productCount++;

        } else {
            row += `
            <div class="column">
            <a href="${x.reference}"><img src="${x.img_src}" alt="cocktail image" style="width:100%""></a>
                <div class=" divider2">
                </div>
                <h2>${x.name}</h2>
                <p class="price">€${x.price}</p>
                <div class="information2">
                    <p class="info">${x.descriptionOne}</p>
                   
                </div>
                <div class="quickButton">
                    <input id="button_${x.id}" class="quickAddButton" type="button" value="+ QUICK ADD" onclick="tick(${x.id})">
                </div>
            </div>
            </div>
            `
            productCount = 1;
            console.log(productCount);
            product_div.innerHTML += row;
            row = `<div class="row">`
        }
    })
    
    
}





function addToCart(productId) {
    // Find the product by its id in the product array
    const product = products.find(product => product.id === productId);

    // If the product was found, add it to the shopping cart stored in local storage
    if (product) {
        // Get the current shopping cart from local storage
        let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

        // Add the product to the shopping cart
        shoppingCart.push(product);

        // Save the updated shopping cart to local storage
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    }
}

// Function to get the total price of all products in the shopping cart
function getTotal() {
    // Get the shopping cart from local storage
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

    // Reduce the shopping cart array to the sum of all prices
    const total = shoppingCart.reduce((acc, products) => acc + products.price, 0);

    // Return the total price
    return total;
}

// Example usage:

// Add a product to the shopping cart
addToCart(2);

// Get the total price of all products in the shopping cart
const total = getTotal();


const addToCartButton = document.getElementsByClassName('quickButton');

// Add an event listener to the button that calls the addToCart function when the button is clicked
addToCartButton.onclick = () => {
    // Call the addToCart function and pass it the product id
    addToCart(2);
};


function goToCart() {
    // Redirect the user to the cart page
    window.location.href = './shoppingCart.html';
}

// // Function to display the contents of the shopping cart on the cart page
// function displayCart() {
//     // Get the shopping cart from local storage
//     const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
// }

    // // Get the element where the cart items will be displayed
    // const cartListElement = document.getElementById('cart-list');

    // // Loop through the shopping cart array and create a list item for each product
    // for (const product of shoppingCart) {
    //     // Create a new list item element
    //     const listItem = document.createElement('li');

    //     // Set the text content of the list item to the product name and price
    //     listItem.textContent = `${product.name}: $${product.price}`;
    // }

//         // Add the list item to the cart list
//         cartListElement.appendChild(listItem);
//     }

//     // Get the total price element
//     const totalPriceElement = document.getElementById('total-price');

//     // Set the text content of the total price element to the total price of the products in the cart
//     totalPriceElement.textContent = `Total: $${getTotal()}`;
// }

// Example usage:

// Add a product to the shopping cart
// addToCart(2);

// // When the user clicks the "Go to cart" button, redirect them to the cart page
// const goToCartButton = document.getElementById('go-to-cart-button');
// goToCartButton.addEventListener('click', goToCart);

// // When the cart page loads, display the contents of the shopping cart
// window.addEventListener('load', displayCart);









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