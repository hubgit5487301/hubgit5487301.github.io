import {alumni,commonindex} from '../data/alumni-data.js';

let storedindex = JSON.parse(localStorage.getItem('commonindex'));
let storedalumni = JSON.parse(localStorage.getItem('alumni'));
console.log(storedindex)


const person = storedalumni[storedindex];

const profilehtml = `<div class="first-view">
          <img class="profile-pic" src="${person.personimage}">
          <p class="name" id="name">${person.personname}</p>
          <div class="basic-data">
            <p>Batch: </p>
            <p>${person.details.batch}</p>
            <p>|</p>
            <p class="branchname">${person.details.branch}</p>
          </div>
        </div>
        <div class="personal-details">
          <h1>About Me</h1>
          <p class="about-me">${person.details.aboutme}</p>
          <h1>Education</h1>
          <p class="education">${person.details.education}</p>
          <h1>Current Role</h1>
          <p class="current-role">${person.details.currentrole}</p>
          <h1>Work Experience</h1>
          <p class="experience">${person.details.experience}</p>
          <h1>Contact Information</h1>
          <p class="contact-information">${person.details.contactinfo}</p>
`;          
document.querySelector('.js-profile-page').innerHTML = profilehtml;