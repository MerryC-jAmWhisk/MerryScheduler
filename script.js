var currentDayEl = document.getElementById('currentDay');

var today = new Date();
var currentTime = today.getHours();

// display current day and date
var time = moment().format("dddd, MMMM Do, YYYY");
currentDayEl.textContent = time;


$(document).ready(function(){
    // display different color for past, present, and future hours
    for(var i = 9; i < 18; i++) {
        var timeCol = $('#'+i);
        if (i < currentTime) {
            $(timeCol).addClass('past');

        } else if (i > currentTime) {
            $(timeCol).addClass('future');

        } else {
            $(timeCol).addClass('present');

        }
    } 

    // saves textarea content in local storage
    $('.saveBtn').on('click', function () {
        var text = $(this).siblings(".description").val();
        var date = $(this).parent().attr("id");
        console.log(text);
        console.log(date);
        localStorage.setItem(date, text);
    });

    // display local storage content after refresh
    $("#hour_9 .description").val(localStorage.getItem("hour_9"));
    $("#hour_10 .description").val(localStorage.getItem("hour_10"));
    $("#hour_11 .description").val(localStorage.getItem("hour_11"));
    $("#hour_12 .description").val(localStorage.getItem("hour_12"));
    $("#hour_13 .description").val(localStorage.getItem("hour_13"));
    $("#hour_14 .description").val(localStorage.getItem("hour_14"));
    $("#hour_15 .description").val(localStorage.getItem("hour_15"));
    $("#hour_16 .description").val(localStorage.getItem("hour_16"));
    $("#hour_17 .description").val(localStorage.getItem("hour_17"));

  });




