import { formatEventDate } from "../script/util.js";

let storedEvents = JSON.parse(localStorage.getItem('events'));
let storedindex = JSON.parse(localStorage.getItem('commonindex'));
let eventHtml = '';

const sortedDates = Object.keys(storedEvents).sort((a, b) => new Date(a) - new Date(b));


sortedDates.forEach((date) => {
  const event = storedEvents[date];
  event.forEach ( event => {
  eventHtml +=`
      <div class="bottom-second-event-box js-bottom-second-event-box">
        <img class="event-image" src="${event.eventimage}">
        <div class="event-info">
          <p class="event-info-text">${event.eventname}</p>
          <p class="event-info-text-1 js-event-info-text-1" id="${event.eventdate}">${formatEventDate(event.eventdate)}</p>
        </div>
      </div>`;

})});
document.querySelector('.js-bottom-second-event-boxes').innerHTML = eventHtml;

let wheel = document.querySelector('.js-bottom-second-event-boxes');
wheel.addEventListener('wheel', (event) => {
  event.preventDefault(); 
  wheel.scrollLeft += event.deltaY; 
});

document.querySelectorAll('.js-bottom-second-event-box')
    .forEach((link, index) => {
      link.addEventListener('click' ,(e) => {
        storedindex = e.target.closest('.js-bottom-second-event-box').querySelector('.js-event-info-text-1').id;
        localStorage.setItem('eventcommonindex',JSON.stringify(storedindex));
        window.location.href = ("event.html");
      });
    });