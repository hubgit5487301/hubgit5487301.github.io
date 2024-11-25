import { upload as upload, inputCheck ,changefieldcolor,isValidEmail} from "../script/util.js";

let storedEvents = JSON.parse(localStorage.getItem('events')) || {};

function eventForm () {
document.querySelector('.js-event-submit').addEventListener(('click'), (event) => {
  event.preventDefault();
  const eventname = document.querySelector('.js-event-name').value;
  const eventdate = document.querySelector('.js-event-date-time').value;
  const eventlocation = document.querySelector('.js-event-location').value;
  const eventemail = document.querySelector('.js-event-contact-info-email').value;
  const eventphone = document.querySelector('.js-event-contact-info-phoneno').value;
  const eventdescription = document.querySelector('.js-event-description').value;
  const eventimage = localStorage.getItem('eventpic') || 'images/events-test.jpg';
  const eventfile = localStorage.getItem('eventfile') || 'images/events-test.jpg';
  const fields = [
    { value: eventname, selector: '.js-event-name' },
    { value: eventdate, selector: '.js-event-date-time' },
    { value: eventlocation, selector: '.js-event-location' },
    { value: eventemail, selector: '.js-event-contact-info-email' },
    { value: eventphone, selector: '.js-event-contact-info-phoneno' },
    { value: eventdescription, selector: '.js-event-description' },
  ];

  let isInvalid = inputCheck(fields);
  if (isInvalid) {
    alert("Please fill all required fields.");
  }
  
  if(!isValidEmail(eventemail)) {
    changefieldcolor(document.querySelector('.js-event-contact-info-email'));
    alert('Enter a valid email');
    return;
  }

  const eventDay = eventdate;
  console.log(eventDay);

  if(!storedEvents[eventDay]){
    storedEvents[eventDay] = [];
  }


  storedEvents[eventDay].push({
    eventname : eventname,
    eventdate: eventdate,
    eventlocation: eventlocation,
    eventemail: eventemail,
    eventphone: eventphone,
    eventdescription: eventdescription,
    eventfile: eventfile,
    eventimage: eventimage,}
  );
console.log(storedEvents);
  localStorage.setItem('events',JSON.stringify(storedEvents));
  alert('Event details submitted');
  window.location.href='event-directory.html';

})}


const allowedfile =['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
const allowedpic =['image/jpeg','image/png'];
upload('.js-event-file',allowedfile,'eventfile');
upload('.js-event-pic',allowedpic,'eventpic');

eventForm();
