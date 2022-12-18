      // Get the button and modal elements
      const openModalButton = document.getElementById('openModalButton');
      const modal = document.getElementById('modal');
      // Get the close button in the modal
      const closeButton = modal.querySelector('.close');
      modal.style.display = 'none';
    
      // Add an event listener to the button that opens the modal
      openModalButton.addEventListener('click', () => {
        modal.style.display = 'block';
      });
    
      // Add an event listener to the close button that closes the modal
      closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
      });




var ml = document.getElementById("ml");
var liter = document.getElementById("liter");
var oz = document.getElementById("oz");
var cup = document.getElementById("cup");
var tbsp = document.getElementById("tbsp");
var tsp = document.getElementById("tsp");

function mlToOther(value) {
    liter.value = value / 1000;
    oz.value = value / 29.574;
    cup.value = value / 236.6;
    tbsp.value = value / 14.787;
    tsp.value = value / 4.929;
}

function literToOther(value) {
    ml.value = value * 1000;
    oz.value = value * 33.814;
    cup.value = value * 4.227;
    tbsp.value = value * 67.628;
    tsp.value = value * 202.9;
}

function ozToOther(value) {
    ml.value = value * 29.574;
    liter.value = value / 33.814;
    cup.value = value / 8;
    tbsp.value = value * 2;
    tsp.value = value * 6;
}

function cupToOther(value) {
    ml.value = value * 236.6;
    liter.value = value / 4.227;
    oz.value = value * 8;
    tbsp.value = value * 16;
    tsp.value = value * 48;
}

function tbspToOther(value) {
    ml.value = value * 14.787;
    liter.value = value / 67.628;
    oz.value = value / 2;
    cup.value = value / 16;
    tsp.value = value * 3;
}

function tspToOther(value) {
    ml.value = value * 4.929;
    liter.value = value / 202.9;
    oz.value = value / 6;
    cup.value = value / 48;
    tbsp.value = value / 3;
}

function convertToOthers(convertFrom, value) {
    switch (convertFrom) {
        case "ml": mlToOther(parseFloat(value)); break;
        case "liter": literToOther(parseFloat(value)); break;
        case "oz": ozToOther(parseFloat(value)); break;
        case "cup": cupToOther(parseFloat(value)); break;
        case "tbsp": tbspToOther(parseFloat(value)); break;
        case "tsp": tspToOther(parseFloat(value)); break;
    }
}