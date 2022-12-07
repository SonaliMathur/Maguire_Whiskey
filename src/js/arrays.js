//Array (1)

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