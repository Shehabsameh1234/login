var nameup = document.getElementById("username-signup")
var emailup = document.getElementById("email-signup")
var passup = document.getElementById("password-signup")
var btnup = document.getElementById("button-signup")
var iconup = document.getElementById("icon-up")
var inputreq = document.getElementById("required")
var emailtaken = document.getElementById("taken")
var iconlogin = document.getElementById("iconlog")
var passignin = document.getElementById("password-signin")
var profile = document.getElementById("toprofile")
var emailsign = document.getElementById("email-signin")
var logreq = document.getElementById("requiredlog")
var weluser=document.getElementById("welcomeuser")

var validname = /^[a-zA-Z ]{3,20}$/;
var validemail = /^[\w-\.]+@([a-z]+\.)+[a-z]{2,4}$/;
var validpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
var shehab;

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



  for (var i = 0; i < signuparr.length; i++) {
    var emailvalue = (signuparr[i])
    var values = Object.values(emailvalue)
    var newemail = values[1]
    var newname=values[0]
  console.log(newname)
  }
  

  inputreq.style.display = "none"
  if (validusername == true && validemailenter == true && validpassword == true && newemail != emailup.value) {
    signuparr.push(objup)
    inputreq.style.display = "block"
    inputreq.style.color = "green"
    inputreq.innerHTML = "Success"
    emailtaken.style.display = "none"
    clearinputs()
  }
  else if (nameup.value == "" || emailup.value == "" || passup.value == "") {
    inputreq.style.display = "block"
    inputreq.innerHTML = "ALL INPUTS ARE REQUIRED"
    inputreq.style.color = "red"

  }
  else if (validusername == false || validemailenter == false || validpassword == false) {
    inputreq.style.color = "red"
    inputreq.style.display = "block"
    inputreq.innerHTML = "wrog data"
  }
  else if (newemail == emailup.value) {
    emailtaken.style.color = "red"
    emailtaken.style.display = "block"
    inputreq.style.display = "none"
  }

  localStorage.setItem("data", JSON.stringify(signuparr))
}


function loginfun() {


  for (var i = 0; i < signuparr.length; i++) {
    var emailvalue = (signuparr[i])
    var values = Object.values(emailvalue)
    var newemail = values[1]
    var newpass = values[2]




    var opj1 = {
      namename: newpass,
      emailemail: newemail,
    }

    if (emailsign.value == opj1.emailemail && passignin.value == opj1.namename) {
      profile.setAttribute("href", "home1.html")

    }
    else if
      (passignin.value == "" && emailsign.value == "") {
      logreq.style.color = "red"
      logreq.style.display = "block"
      logreq.innerHTML = "ALL INPUTS ARE REQUIRED"
    }

    else if (emailsign.value != opj1.emailemail && passignin.value != opj1.namename) {
      logreq.style.color = "red"
      logreq.style.display = "block"
      logreq.innerHTML = "wrong data"
    }




  }

}


function clearinputs() {
  passup.value = ""
  emailup.value = ""
  nameup.value = ""
}







weluser.innerHTML="welcome"


















iconlogin.addEventListener("click", function () {
  if (passignin.getAttribute("type") == "password") {
    passignin.setAttribute("type", "text")
  } else { passignin.setAttribute("type", "password") }
})


function iconsignup() {
  if (passup.getAttribute("type") == "password") {
    passup.setAttribute("type", "text")
  } else { passup.setAttribute("type", "password") }
}








