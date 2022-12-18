
function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

   

function ageValidate() {
    var over18 = document.getElementById("over18");
    var under18 = document.getElementById("under18");
  
    if (over18.checked) {
      window.location.href = "./home.html";
      return false;
    } else if (under18.checked) {
      window.location.href = "./under18.html";
      return false;
    } else {
      alert("Please select either 'Yes' or 'No'");
      return false;
    }
  }

//   https://www.youtube.com/watch?v=F17OHgejQeI&ab_channel=Bharaththippireddy

