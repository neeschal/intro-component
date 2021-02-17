const form = document.getElementById("form");
const fname = document.getElementById("firstname");
const lname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let firstName = fname.value.trim();
  let lastName = lname.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let validation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (firstName === "") {
    errorFunc(fname, "First Name cannot be empty");
  } else {
    successFunc(fname);
  }

  if (lastName === "") {
    errorFunc(lname, "Last Name cannot be empty");
  } else {
    successFunc(lname);
  }

  if (emailValue === "") {
    errorFunc(email, "Email cannot be empty");
  } else if (!emailValue.match(validation)) {
    errorFunc(email, "Looks like this is not an email");
  } else {
    successFunc(email);
  }

  if (passwordValue === "") {
    errorFunc(password, "Password cannot be empty");
  } else {
    successFunc(password);
  }
});

function errorFunc(req, message) {
  const formControl = req.parentElement;
  const span = formControl.querySelector("span");
  if (req.className !== "error") {
    span.innerText = message;
    req.className += "error";
    span.className += "error-text";
    if (req !== email) {
      req.value = "";
    } else {
      req.style.color = "hsl(0, 100%, 74%)";
    }
  }
}

function successFunc(req) {
  if (req.className !== "success") {
    req.classList.remove("error");
    req.className += "success";
  }
}
