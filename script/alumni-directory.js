import {alumni,commonindex} from '../data/alumni-data.js';

localStorage.setItem('alumni',JSON.stringify(alumni));
localStorage.setItem('commonindex',JSON.stringify(commonindex));
let storedAlumni = JSON.parse(localStorage.getItem('alumni'));
let storedindex = JSON.parse(localStorage.getItem('commonindex'));

let personHtml = '';

storedAlumni.forEach((person) => {
    personHtml +=`<a id="links" class="person-profile-link js-person-profile-link" href="person-profile.html">
        <div class="person">
            <img class="person-image" src="${person.personimage}">
            <div class="person-name">
              <h>${person.personname}</h>
            </div>
        </div>
    </a>
`
})

document.querySelector('.js-person-row').innerHTML = personHtml;

document.querySelectorAll('.js-person-profile-link')
    .forEach((link, index) => {
      link.addEventListener('click' ,() => {
        storedindex = index;
        localStorage.setItem('commonindex',JSON.stringify(storedindex));
      });
    });

