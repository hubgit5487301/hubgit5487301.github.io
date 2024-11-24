import { changefieldcolor,changefieldcolordefault,inputCheck,isValidUserid,isValidEmail,upload as profilepicupload} from '../script/util.js';

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
    const personimage = localStorage.getItem('picdata') || 'images/events-test.jpg';
    const fields = [
      { value: inputname, selector: '.js-name' },
      { value: userid, selector: '.js-userid' },
      { value: batch, selector: '.js-batch' },
      { value: branch, selector: '.js-branch' },
      { value: email, selector: '.js-email' },
      { value: password, selector: '.js-password' },
      { value: renterpassword, selector: '.js-password-recheck' },
    ];

    let inputcheck = inputCheck(fields);
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

yearSelect()

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


const allowedfiletype = ['image/jpeg', 'image/png'];
yearSelect();
profilepicupload('.js-pic-input',allowedfiletype,'picdata');
formInput();
