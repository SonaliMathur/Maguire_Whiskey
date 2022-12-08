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