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

items = {
    1: {
        name: 'Negroni Kit',
        price: 25.5
    },
    2: {
        name: 'The 1829 Kit',
        price: 25.5
    },
    3: {
        name: 'Negroni Kit',
        price: 25.5
    },
    4: {
        name: 'Negroni Kit',
        price: 25.5
    },
    5: {
        name: 'Negroni Kit',
        price: 25.5
    },
    6: {
        name: 'Negroni Kit',
        price: 25.5
    },
}

function displayCartItems(cart) {
    let cartItems = cart.getItems();
    let cartItemsHTML = '';
    for (let i = 0; i < cartItems.length; i++) {
        cartItemsHTML += `<div class="cart-item">
            <div class="cart-item-name">${cartItems[i].name}</div>
            <div class="cart-item-price">${cartItems[i].price}</div>
        </div>`;
    }
    document.getElementById('cart-items').innerHTML = cartItemsHTML;
}

// (function (window, document, undefined) {
//     console.log('break 1');
//     window.onload = init;

//     console.log('break 2');
//     function init() {
//         let cart = new ShoppingCart();
//         cart.addItem(items[1]);
//         cart.addItem(items[2]);
//         displayCartItems(cart);
//         console.log('break 3');
//     }

//     console.log('break 4');

//     // let addToCartButtons = document.getElementsByClassName('add-to-cart');
//     // for (let i = 0; i < addToCartButtons.length; i++) {
//     //     let addToCartButton = addToCartButtons[i];
//     //     addToCartButton.addEventListener('click', function(event) {
//     //         let itemId = addToCartButton.getAttribute('data-item-id');
//     //         cart.addItem(itemId);
//     //         displayCartItems(cart);
//     //     });
//     // }
// })(window, document, undefined);