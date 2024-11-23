let leftbox = document.querySelector('.js-left-box');
let centerbox = document.querySelector('.js-center-box');

let registerbutton = document.querySelector('.js-register-button');
let forgotpasswordbutton = document.querySelector('.js-forgot-password-button');
let backbutton = document.querySelector('.js-back-button');

registerbutton.addEventListener("click", ()=>{
  window.location.href = 'registration-form.html';
});

forgotpasswordbutton.addEventListener("click", ()=>{
  centerbox.style.display="flex";
  leftbox.style.display="none";
});

backbutton.addEventListener("click", ()=>{
  centerbox.style.display="none";
  leftbox.style.display="flex";
});