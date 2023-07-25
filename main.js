

// get elemnts form html
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
var weluser = document.getElementById("welcomeuser")
// get elemnts form html


// regex code for validation
var validname = /^[a-zA-Z ]{3,20}$/;
var validemail = /^[\w-\.]+@([a-z]+\.)+[a-z]{2,4}$/;
var validpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
// regex code for validation


// create new acc and save it in local storage
var signuparr = []
if (localStorage.data != null) {
  // get data from local storage
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
  }


  inputreq.style.display = "none"

  // if data corret , make a new acc
  if (validusername == true && validemailenter == true && validpassword == true && newemail != emailup.value) {
    signuparr.push(objup)
    inputreq.style.display = "block"
    inputreq.style.color = "green"
    inputreq.innerHTML = "Success"
    emailtaken.style.display = "none"
    shehab = emailup.value
    console.log(nameup.value)
    clearinputs()
  }

  // if data  does nor corret , do not make a new acc
  else if (nameup.value == "" || emailup.value == "" || passup.value == "") {
    inputreq.style.display = "block"
    inputreq.innerHTML = "ALL INPUTS ARE REQUIRED"
    inputreq.style.color = "red"

  }
  // if data  does nor corret , do not make a new acc
  else if (validusername == false || validemailenter == false || validpassword == false) {
    inputreq.style.color = "red"
    inputreq.style.display = "block"
    inputreq.innerHTML = "wrog data"
  }
  // if data  does nor corret , do not make a new acc
  else if (newemail == emailup.value) {
    emailtaken.style.color = "red"
    emailtaken.style.display = "block"
    inputreq.style.display = "none"
  }

  // send arr to lacal storage
  localStorage.setItem("data", JSON.stringify(signuparr))
}
// create new acc and save it in local storage


// log in function and chek if data exist or not
function loginfun() {


  // chek if data exist or not 
  for (var i = 0; i < signuparr.length; i++) {
    var emailvalue = (signuparr[i])
    var values = Object.values(emailvalue)
    var newemail = values[1]
    var newpass = values[2]
  }

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
// log in function and chek if data exist or not


// clear inputs after signnup
function clearinputs() {
  passup.value = ""
  emailup.value = ""
  nameup.value = ""
}
// clear inputs after signnup


// icon in signin page to to convert password to text
function iconsignin() {
  if (passignin.getAttribute("type") == "password") {
    passignin.setAttribute("type", "text")
  } else { passignin.setAttribute("type", "password") }
}
// icon in signin page to to convert password to text


// icon in signup page to to convert password to text
function iconsignup() {
  if (passup.getAttribute("type") == "password") {
    passup.setAttribute("type", "text")
  } else { passup.setAttribute("type", "password") }
}
// icon in signin page to to convert password to text








// function a7a() {

//   var emailsignvalue = emailsign.value
//   index = signuparr.findIndex(x => x.emialsignup == emailsignvalue);
//   var indesofemailsignvalue = (signuparr[index])
//   var valueobj = Object.values(indesofemailsignvalue)
//   var nameof = valueobj[0]
//   console.log(nameof)

// }





