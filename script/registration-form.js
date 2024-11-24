import {alumni} from '../data/alumni-data.js';

let storedAlumni = JSON.parse(localStorage.getItem('alumni')) || [];

function formInput() {
  document.querySelector('.js-submit-button').addEventListener('click', (event) => {
    event.preventDefault();
    const inputname = document.querySelector('.js-name').value;
    const userid = document.querySelector('.js-userid').value;
    const batch = document.querySelector('.js-batch').value;
    const branch = document.querySelector('.js-branch').value;
    const email = document.querySelector('.js-email').value;
    const password = document.querySelector('.js-password').value;
    const renterpassword = document.querySelector('.js-password-recheck').value;
    const aboutme = document.querySelector('.js-about-me').value;
    const education = document.querySelector('.js-education').value;
    const currentrole = document.querySelector('.js-current-role').value;
    const experience = document.querySelector('.js-experience').value;
    const contactinfo = document.querySelector('.js-contact-info').value;

    let inputcheck = inputCheck(inputname, userid, batch, branch, email, password, renterpassword);
    if (inputcheck === true)
      {
        alert('Enter details correctly');
        return;
      }
    
    if(!isValidUserid(userid)) {
      changefieldcolor(document.querySelector('.js-userid'));
      alert('Userid is not valid enter your college roll no of format 21cse__');
      return;
    }

    if(!isValidEmail(email)) {
      changefieldcolor(document.querySelector('.js-email'));
      alert('Enter a valid email');
      return;
    }


    let check=passwordMatchcheck(password, renterpassword);
    if(check === false)
    {
      return;
    }
    else if (check === true)
    {
      changefieldcolordefault
    (document.querySelector('.js-password-recheck'));
    }
    
    let newpass=hashPassword(password);

    const personimage = localStorage.getItem('picdata') || 'images/events-test.jpg';

    storedAlumni.push({
      userid: userid,
      personimage: personimage,
      personname: inputname,
      password: newpass,
      email: email,
      details:{
        batch:batch,
        branch:branch,
        aboutme:aboutme,
        education: education,
        currentrole: currentrole,
        experience: experience,
        contactinfo: contactinfo,
        social:'test'}
    });

    localStorage.setItem('alumni', JSON.stringify(storedAlumni));
    alert('Form submitted successfully!');
    window.location.href = 'login-page.html';
});}



function changefieldcolor(input) {
  input.classList.add('input-error');
  input.classList.remove('input-default');
}

function changefieldcolordefault(input) {
  input.classList.remove('input-error');
  input.classList.add('input-default');
}




function yearSelect () {
  const startYear = 2002;
  const endYear = new Date().getFullYear();
  const yearSelect = document.querySelector('.js-batch');
  for (let year = startYear; year <= endYear; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  }
};

function inputCheck (inputname, userid, batch, branch, email, password, renterpassword) {
  let inputcheck = false;
    
  if(!inputname) {
    changefieldcolor(document.querySelector('.js-name'));
    inputcheck = true;
 }
  else
  {
    changefieldcolordefault
  (document.querySelector('.js-name'));
  }

  if(!userid) {
    changefieldcolor(document.querySelector('.js-userid'));
    inputcheck = true;
  }
  else
  {
    changefieldcolordefault
  (document.querySelector('.js-userid'));
  }
  if(!batch) {
    changefieldcolor(document.querySelector('.js-batch'));
    inputcheck = true;
  }
  else
  {
    changefieldcolordefault
  (document.querySelector('.js-batch'));
  }
  if(!branch) {
    changefieldcolor(document.querySelector('.js-branch'));
    inputcheck = true;
  }
  else
  {
    changefieldcolordefault
  (document.querySelector('.js-branch'));
  }
  if(!email) {
    changefieldcolor(document.querySelector('.js-email'));
    inputcheck = true;
  }
  else
  {
    changefieldcolordefault
  (document.querySelector('.js-email'));
  }
  if(!password) {
    changefieldcolor(document.querySelector('.js-password'));
    inputcheck = true;
  }
  else
  {
    changefieldcolordefault
  (document.querySelector('.js-password-recheck'));
  }
  if(!renterpassword) {
    changefieldcolor(document.querySelector('.js-password-recheck'));
    inputcheck = true;
  }
  else
  {
    changefieldcolordefault
  (document.querySelector('.js-password'));
  }

  if(inputcheck === true)
  {
    return inputcheck;
  }
}

function passwordMatchcheck (password, renterpassword){
  if (password != renterpassword)
  { changefieldcolor(document.querySelector('.js-password-recheck'));
    alert("Passwords do not match!");
    return false;
  }
  return true;
}


function hashPassword(password) {
    return CryptoJS.SHA256(password).toString(CryptoJS.enc.Base64)
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidUserid(userid) {
  const useridregex = /^(98|99|[0-9]{2})(CSE|ME|CE)(0[1-9]|[1-9][0-9])$/
  return useridregex.test(userid);
}

function picupload () {
  document.querySelector('.js-pic-input').addEventListener('change', (event) => {
    const filename = event.target.files[0] ? event.target.files[0].name : 'No file chosen';
    const file =event.target.files[0];
    if (file) {
      const allowed = ['image/jpeg', 'image/png'];
      if (!allowed.includes(file.type)) {
        document.querySelector('.js-filename').textContent = 'invalid file use a .jpg or .png';
        document.querySelector('.js-filename').style.color = 'red';
        return;
      }
      else {
        document.querySelector('.js-filename').textContent = filename;
        document.querySelector('.js-filename').style.color = 'white';
      }
    }

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const file64 = reader.result;
        console.log(file64);
        localStorage.setItem('picdata', file64);
      }
    }
  })}
   
yearSelect();
formInput();
picupload();







