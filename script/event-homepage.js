import {event} from '../data/event-data.js'
let eventhtml = '';

event.forEach((event) => {
  eventhtml += `
      <div class="bottom-second-event-box">
        <img class="event-image" src="${event.image}">
        <div class="event-info">
          <p class="event-info-text">${event.name}</p>
          <p class="event-info-text">${event.date}</p>
        </div>
      </div>`;

});
document.querySelector('.js-bottom-second-event-boxes').innerHTML = eventhtml;

let wheel = document.querySelector('.js-bottom-second-event-boxes');
wheel.addEventListener('wheel', (event) => {
  event.preventDefault(); 
  wheel.scrollLeft += event.deltaY; 
});