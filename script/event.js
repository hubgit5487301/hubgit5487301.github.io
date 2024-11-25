import { formatEventDate } from "../script/util.js";

let storedEvents = JSON.parse(localStorage.getItem('events'));
let storedindex = JSON.parse(localStorage.getItem('eventcommonindex'));
const eventobject = storedEvents[storedindex];
const event = eventobject[0];

const eventHtml = `
        <div class="basic-details js-basic-details">
          <img class="event-pic" src=${event.eventimage}>
          <p class="name">${event.eventname}</p>
          <p class="date">${formatEventDate(event.eventdate)}</p>
        </div>
        <div class="event-details js-event-details">
          <h1>Event Description</h1>
          <p>${event.eventdescription}</p>
          <h1>Event Location</h1>
          <p>${event.eventlocation}</p> 
          <h1>Contact Information</h1>
          <p>Email: ${event.eventemail}</p>
          <p>Phone No: ${event.eventphone}</p>
        </div>
`;         
document.querySelector('.js-event-page').innerHTML = eventHtml;