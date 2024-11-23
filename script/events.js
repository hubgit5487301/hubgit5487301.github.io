import {event as events } from '../data/event-data.js';


//localStorage.setItem('events', JSON.stringify(events));

let storedEvents = JSON.parse(localStorage.getItem('events'));
let storedindex = JSON.parse(localStorage.getItem('commonindex'));

console.log(storedEvents);
let eventHtml = '';

storedEvents.forEach((event) => {
  eventHtml +=`<div class="event">
          <img class="e-event-icon" src="images/events-test.jpg">
          <div class="event-info js-event-info">
            <h1>${event.name}</h1>
            <p class="event-date">${event.date}</p>
          </div>
        </div>
`
console.log(eventHtml);
})

document.querySelector('.js-events-row').innerHTML = eventHtml;