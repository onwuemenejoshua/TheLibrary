const mainMenu = document.querySelector(".mainMenu");
const closemenu = document.querySelector(".closeMenu");
const openmenu = document.querySelector(".openMenu");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const confirmPasswordEl = document.querySelector("#confirmPassword");
const details = document.querySelector("#details");

//  FOR THE HAMBURGER MENU.

openmenu.addEventListener("click", show);
closemenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.right = "100";
  openmenu.style.display = "none";
  closemenu.style.display = "block";
}

function close() {
  mainMenu.style.right = "-100";
  mainMenu.style.display = "none";
  openmenu.style.display = "block";
  closemenu.style.display = "none";
}

//FORM VALIDATION

//Validation of the email field. this is used to check whether the emial field is blank or whether is not valid

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Email is not valid");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

//VALIDATION OF THE PASSWORD. it return checks if the password field, is provided and match the required format.

const checkPassword = () => {
  let valid = false;
  const password = passwordEl.value.trim();
  if (!isRequired(password)) {
    showError(passwordEl, "password cannot be blank.");
  } else if (!isPasswordSecure(password)) {
    showError(
      passwordEl,
      "password must has at least 8 characters that inlcuse at least 1 lowercase character, 1 uppercase character, and 1 special character."
    );
  } else {
    showError(passwordEl);
    valid = true;
  }
  return valid;
};

//VALIDATION FOR THE CONFIRM PASSWORD. it checks if the confirm password is the same as the password.

const checkConfirmPassword = () => {
  let valid = false;
  //check confirm password
  const confirmPassword = confirmPasswordEl.value.trim();
  const password = passwordEl.value.trim();

  if (!isRequired(confirmPassword)) {
    showError(confirmPasswordEl, "please enter the password again");
  } else if (password !== confirmPassword) {
    showError(confirmPasswordEl, "confirm password does not match");
  } else {
    showSuccess(confirmPasswordEl);
    valid = true;
  }
  return valid;
};

// to check if the input of the mail is valid, we use a regular expression.

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

//the isPasswordSecure function checks if a given password meets specific criteria for being considered secure. It uses a regular expression pattern to ensure the password contains at least one lowercase letter, one uppercase letter, one digit, one special character, and has a minimum length of 8 characters.

const isPasswordSecure = (password) => {
  const re = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return re.test(password);
};
