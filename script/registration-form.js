import {alumni} from '../data/alumni-data.js';

let storedAlumni = JSON.parse(localStorage.getItem('alumni')) || [];

function changefieldcolor(input) {
  input.style.border = '1.5px solid red';
  input.style.backgroundcolor = '#f8d7da';
}

function formInput() {document.querySelector('.js-submit-button').addEventListener('click', (e) =>{
  
  e.preventDefault();
  const inputname = document.querySelector('.js-name').value;
  const userid = document.querySelector('.js-userid').value;
  const batch = document.querySelector('.js-batch').value;
  const branch = document.querySelector('.js-branch').value;
  const email = document.querySelector('.js-email').value;

  

if(!inputname) {
  changefieldcolor(document.querySelector('.js-name'));
  return;
}
if(!userid) {
  changefieldcolor(document.querySelector('.js-userid'));
  return;
}if(!batch) {
  changefieldcolor(document.querySelector('.js-batch'));
  return;
}if(!branch) {
  changefieldcolor(document.querySelector('.js-branch'));
  return;
}if(!email) {
  changefieldcolor(document.querySelector('.js-email'));
  return;
}



  storedAlumni.push({
    userid: userid,
    personimage: 'images/events-test.jpg',
    personname: inputname,
    email: email,
    details:{
      batch:batch,
      branch:branch,
      aboutme:'Passionate developer, technology enthusiast, and problem solver. Always eager to learn and contribute to innovative projects.',
      education:'Bachelor of Technology, Computer Science, IET, 2025',
      currentrole:'Software Engineer at TechCorp',
      experience:'Software Engineer TechCorp Inc. - San Francisco, CA June 2025 - Present',
      contactinfo:'test@gmail.com',
      social:'Github : Hubgit5487301'}
  });

  localStorage.setItem('alumni', JSON.stringify(storedAlumni));
  alert('Form submitted successfully!');
  window.location.href = 'login-page.html';
});}
formInput();