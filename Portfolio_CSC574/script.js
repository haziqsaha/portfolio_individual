
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function validateForm() {

  var x = document.forms["myform"]["name"]["country"]["subject"].value;
  if(x=="") {
      alert('Please fill every sections in the form!');
      return false;
  }
  else {
      alert('Thank you for your feedback!');
  }
}

src='https://kit.fontawesome.com/a076d05399.js'

