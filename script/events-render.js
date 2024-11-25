import { formatEventDate } from "../script/util.js";

let storedEvents = JSON.parse(localStorage.getItem('events'));
let storedindex = JSON.parse(localStorage.getItem('eventcommonindex'));
let eventHtml = '';

const sortedDates = Object.keys(storedEvents).sort((a, b) => new Date(a) - new Date(b));


sortedDates.forEach((date) => {
  const event = storedEvents[date];
  event.forEach ( event => {
  eventHtml +=`<a class="each-event js-each-event" href="event.html">
        <div class="event js-event">
          <img class="e-event-icon" src=${event.eventimage}>
          <div class="event-info js-event-info">
            <h1>${event.eventname}</h1>
            <p class="event-date js-event-date" id="${event.eventdate}">${formatEventDate(event.eventdate)}</p>
          </div>
        </div>
      </a>
`;
})
})
document.querySelector('.js-events-row').innerHTML = eventHtml;


document.querySelectorAll('.js-event')
    .forEach((link, index) => {
      link.addEventListener('click' ,(e) => {
        storedindex = e.target.closest('.js-event').querySelector('.js-event-date').id;
        localStorage.setItem('eventcommonindex',JSON.stringify(storedindex));
      });
    });
