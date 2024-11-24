let storedEvents = JSON.parse(localStorage.getItem('events'));
let storedindex = JSON.parse(localStorage.getItem('commonindex'));
let eventHtml = '';

console.log(storedEvents);
const sortedDates = Object.keys(storedEvents).sort((a, b) => new Date(a) - new Date(b));


sortedDates.forEach((date) => {
  const event = storedEvents[date];
  event.forEach ( event => {
  eventHtml +=`<div class="event">
          <img class="e-event-icon" src=${event.eventimage}>
          <div class="event-info js-event-info">
            <h1>${event.eventname}</h1>
            <p class="event-date">${formatEventDate(event.eventdate)}</p>
          </div>
        </div>
`;})
})
console.log(eventHtml);
document.querySelector('.js-events-row').innerHTML = eventHtml;

function formatEventDate(eventdate) {
  const date = new Date(eventdate);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${day} ${date.toLocaleString('default', { month: 'long' })} ${year}, ${hours}:${minutes}`;
}