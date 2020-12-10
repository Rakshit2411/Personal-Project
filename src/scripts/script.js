const signupButton = document.querySelector("#signup-button");
const name = document.querySelector("#name");
const workField = document.querySelector("#workField");
const email = document.querySelector("#email");
const study = document.querySelector("#study");
const address = document.querySelector("#address");
const checkbox = document.querySelector("#agree");

signupButton.addEventListener('click', function(){
  name.value = '';
  workField.value = '';
  email.value = '';
  study.value = '';
  address.value = '';
  checkbox.checked = false;
})