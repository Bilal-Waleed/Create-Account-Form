var form = document.getElementById("createAccountForm");
var message = document.getElementById("message");
var users = [];

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  var username = document.getElementById("username").value.trim();
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value.trim();
  var gender = document.querySelector("input[name='gender']:checked")?.value;
  var city = document.getElementById("city").value;


  message.textContent = "";

  if (!validateUsername(username) || !validatePassword(password) || !validateEmail(email) || !validateGender(gender) || !validateCity(city)) {
    return;
  }
 
  if (users.some(user => user.username === username)) {
    alert("Username already exists.");
    return;
  }

  if (users.some(user => user.email === email)) {
    alert("Email already exists.");
    return;
  }

  var newUser = { username, password, email, gender, city };
  users.push(newUser);

  message.textContent = "Account created successfully!";
  message.style.color = "black";

  form.reset();
});

document.getElementById("username").addEventListener("input", (e) => validateUsername(e.target.value));
document.getElementById("password").addEventListener("input", (e) => validatePassword(e.target.value));
document.getElementById("email").addEventListener("input", (e) => validateEmail(e.target.value));

function validateUsername(username) {
  var usernameField = document.getElementById("username");
  if (username.length < 3) {
    usernameField.setCustomValidity("Username must be at least 3 characters.");
    usernameField.reportValidity();
    return false;
  }
  usernameField.setCustomValidity("");
  return true;
}

function validatePassword(password) {
  var passwordField = document.getElementById("password");
  if (password.length < 5) {
    passwordField.setCustomValidity("Password must be at least 5 characters.");
    passwordField.reportValidity();
    return false;
  }
  passwordField.setCustomValidity("");
  return true;
}

function validateEmail(email) {
  var emailField = document.getElementById("email");
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    emailField.setCustomValidity("Invalid email format.");
    emailField.reportValidity();
    return false;
  }
  emailField.setCustomValidity("");
  return true;
}

function validateGender(gender) {
  if (!gender) {
    alert("Please select a gender.");
    return false;
  }
  return true;
}

function validateCity(city) {
  if (city === "") {
    alert("Please select a city.");
    return false;
  }
  return true;
}
