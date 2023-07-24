var nameup = document.getElementById("username-signup")
var emailup = document.getElementById("email-signup")
var passup = document.getElementById("password-signup")
var btnup = document.getElementById("button-signup")
var iconup = document.getElementById("icon-up")


var validname = /^[a-zA-Z ]{3,20}$/;
var validemail = /^[\w-\.]+@([a-z]+\.)+[a-z]{2,4}$/;
var validpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;


var signuparr = []
if (localStorage.data != null) {
  signuparr = JSON.parse(localStorage.data)
}

function signupfun() {

  var validusername = validname.test(nameup.value)
  var validemailenter = validemail.test(emailup.value)
  var validpassword = validpass.test(passup.value)


  var objup = {
    usernameup: nameup.value.trim().toLowerCase(),
    emialsignup: emailup.value.trim().toLowerCase(),
    passwordup: passup.value
  }
  console.log(objup.usernameup)

  if (validusername == true && validemailenter == true && validpassword == true) {
    signuparr.push(objup)

  }


  //   var emailvalue=(signuparr[0])

  // var values = Object.values(emailvalue);
  // console.log(values[0]);


  localStorage.setItem("data", JSON.stringify(signuparr))
}


iconup.addEventListener("click", function () {
  if (passup.getAttribute("type") == "password") {
    passup.setAttribute("type", "text")
  } else { passup.setAttribute("type", "password") }
})




