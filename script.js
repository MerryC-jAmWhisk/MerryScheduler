var currentDayEl = document.getElementById('currentDay');
var eventEl = document.getElementById('event');
var saveBtnEl = document.getElementById('btn');
var hour10 = document.getElementsByClassName('.hour10');

var today = new Date();
var currentTime = today.getHours();


// display current day and date
var time = moment().format("dddd, MMMM Do, YYYY");
currentDayEl.textContent = time;


// display different color for past, present, and future hours
for (let i = 9; i < 18; i++) { 
    let timeCol = document.getElementById(i);
    if (i < currentTime) { 
        timeCol.setAttribute('class', 'past');
        
    } else if (i > currentTime) {
        timeCol.setAttribute('class', 'future');
        
    } else {
        timeCol.setAttribute('class', 'present');

    }
}



function save() {
    let event = eventEl.value;
    let date = hour10.attributes;
    console.log(date);
    localStorage.setItem(date, event);
    var getHour10 = localStorage.getItem('hour_10');
    hour10.value = getHour10;
}

saveBtnEl.onclick = save;
