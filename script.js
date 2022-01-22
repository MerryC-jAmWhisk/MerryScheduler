var currentDayEl = document.getElementById('currentDay');


var today = new Date();
var currentTime = today.getHours();


// // display current day and date
// var time = moment().format("dddd, MMMM Do, YYYY");
// currentDayEl.textContent = time;


// // display different color for past, present, and future hours
// for (let i = 9; i < 18; i++) { 
//     let timeCol = document.getElementById(i);
//     if (i < currentTime) { 
//         timeCol.setAttribute('class', 'past');
        
//     } else if (i > currentTime) {
//         timeCol.setAttribute('class', 'future');
        
//     } else {
//         timeCol.setAttribute('class', 'present');

//     }
// }


$(document).ready(function(){

    $('.saveBtn').on('click', function () {
        var text = $(this).siblings(".description").val();
        var date = $(this).parent().attr("id");
        console.log(text);
        console.log(date);
        localStorage.setItem(date, text);
    });

    $("#hour_9 .description").val(localStorage.getItem("hour_9"));
    $("#hour_10 .description").val(localStorage.getItem("hour_10"));

  });




