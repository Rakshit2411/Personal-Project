const signupButton = document.querySelector("#signup-button");
const name = document.querySelector("#name");
const workField = document.querySelector("#workField");
const email = document.querySelector("#email");
const study = document.querySelector("#study");
const address = document.querySelector("#address");
const checkbox = document.querySelector("#agree");
const array = [name, workField, email, study, address];
console.log(name.classList);

signupButton.addEventListener('click', function () {
  if (name.value != '' && workField.value != '' && email.value != '' && study.value != '' && address.value != '' && checkbox.checked != false) {
    name.value = '';
    workField.value = '';
    email.value = '';
    study.value = '';
    address.value = '';
    checkbox.checked = false;
  } else {
    alert("All fields are not complete.");
  }
})

