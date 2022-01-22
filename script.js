var currentDayEl = document.getElementById('currentDay');

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var month = today.getMonth();
var monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = today.getDate();


if (date === 1 || date === 11 || date === 21 || date === 31) { 
    currentDayEl.textContent = daylist[day] + ", " + monthlist[month] + " " + date + "st";

} else if (date === 2 || date === 12 || date === 22) {
    currentDayEl.textContent = daylist[day] + ", " + monthlist[month] + " " + date + "nd";

} else if (date === 3 || date === 13 || date === 23) {
    currentDayEl.textContent = daylist[day] + ", " + monthlist[month] + " " + date + "rd";

} else {
    currentDayEl.textContent = daylist[day] + ", " + monthlist[month] + " " + date + "th";
}


