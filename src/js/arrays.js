//Array (1)

var oldFashionedDrinkArray = [
    { drink: "Maguire Whiskey", amount: 60 + "ml" },
    { drink: "Bitters", amount: 20 + "ml" },
    { drink: "Soda Water", amount: 50 + "ml" },
    { drink: "Sugar", amount: 1 + " tsp" },
    { drink: "Orange", amount: "A slice" },
]

//Insert data function
function insertRecipe() {
    var table = document.getElementById("drinkData");
    table.innerHTML = "";
    var tr = "";
    oldFashionedDrinkArray.forEach(x => {
        tr += '<tr>';
        tr += '<td>' + x.drink + '</td>' + '<td>' + x.amount + '</td>'
        tr += '</tr>'

    })
    table.innerHTML += tr;
}








var theManhattanDrinkArray = [
    { drink: "Maguire Whiskey", amount: 60 + "ml" },
    { drink: "Sweet Vermouth", amount: 30 + "ml" },
    { drink: "Bitters", amount: 10 + "ml" },
    { drink: "Flower", amount: "Garnish" },
]

// Insert data function
function insertRecipe2() {
    var table = document.getElementById("drinkData");
    table.innerHTML = "";
    var tr = "";
    theManhattanDrinkArray.forEach(x => {
        tr += '<tr>';
        tr += '<td>' + x.drink + '</td>' + '<td>' + x.amount + '</td>'
        tr += '</tr>'

    })
    table.innerHTML += tr;
}

// let tableVisibl = false; // Flag to track whether the table is currently visible

// function insertRecipe2() {
//   // Get a reference to the table element
//   let table = document.getElementById('myTable');

//   // Toggle the value of the tableVisible flag
//   tableVisibl = !tableVisibl;

//   // Set the display style of the table based on the value of the tableVisible flag
//   table.style.display = tableVisibl ? 'block' : 'none';

//   // Only insert data into the table if it is currently visible
//   if (tableVisibl) {
//     let tr = "";
//     theManhattanDrinkArray.forEach(x => {
//       tr += '<tr>';
//       tr += '<td>' + x.drink + '</td>' + '<td>' + x.amount + '</td>'
//       tr += '</tr>'
//     })
//     table.innerHTML += tr;
//   }
// }



var theMilkPunchDrinkArray = [
    { drink: "Maguire Whiskey", amount: 60 + "ml" },
    { drink: "Milk", amount: 200 + "ml" },
    { drink: "Sugar", amount: 1 + " tsp" },
    { drink: "Heavy Cream", amount: 50 + "ml" },
    { drink: "Flower", amount: "Garnish" },
]

//Insert data function
function insertRecipe3() {
    var table = document.getElementById("drinkData");
    table.innerHTML = "";
    var tr = "";
    theMilkPunchDrinkArray.forEach(x => {
        tr += '<tr>';
        tr += '<td>' + x.drink + '</td>' + '<td>' + x.amount + '</td>'
        tr += '</tr>'

    })
    table.innerHTML += tr;
}


