//Responsive navigation bar - becomes little icons when the screen width is reduced.
//Use of Conditional Statements (1) in a Function (1)
function myNavFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "allTopNav") {
      x.className += " responsive";
    } else {
      x.className = "allTopNav";
    }
  }

  //Quick Add Button - colour changes for a bit when pressed
  //Use of function (2)

// function sendEmail() {
//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "d22124346@mytudublin.ie",
//     Password : "---",
//     To : 'sonaliuae@gmail.com',
//     From : document.getElementByID("email").value,
//     Subject : "New Contact Form Enquiry",
//     Body : "Name:" + document.getElementById("name").value
//          + "<br> Email: " + document.getElementById("email").value
//          + "<br> Phone no: " + document.getElementById("phone").value
//          + "<br> Message: " + document.getElementById("message").value
// }).then(
//   message => alert("Message sent successfully")
// );
// }



  