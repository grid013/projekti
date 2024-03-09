$(document).ready(function(){
    $('#data').before('<div id="nav"></div>');
   
    var rowsShown = 9;
    var rowsTotal = $('#data tbody tr').length;
    var numPages = rowsTotal/rowsShown;
    for(i = 0;i < numPages;i++) {
        var pageNum = i + 1;
        $('#nav').append('<a href="#" rel="'+i+'" class="day"><span class="styleDay">Day '+pageNum+'</span</a> ');
        
       
    }
    $('#data tbody tr').hide();
    $('#data tbody tr').slice(0, rowsShown).show();
    $('#nav a:first').addClass('active');
    $('#nav a').bind('click', function(){

        $('#nav a').removeClass('active');
        $(this).addClass('active');
        var currPage = $(this).attr('rel');
        var startItem = currPage * rowsShown;
        var endItem = startItem + rowsShown;
        $('#data tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
        css('display','table-row').animate({opacity:1}, 300);
   
    });
});






function countdown() {
    const today = new Date();
    var offerDate = new Date('4 April 2024');

    //If offer ends reset to new value
    if (today.getSeconds() == offerDate.getSeconds()) {
        offerDate = resetOfferDate();
    }

    //offerTime will have the total millseconds 
    const offerTime = offerDate - today;

    // 1 sec= 1000 ms
    // 1 min = 60 sec
    // 1 hour = 60 mins
    // 1 day = 24 hours
    const offerDays = Math.floor(offerTime / (1000 * 60 * 60 * 24));
    const offerHours = Math.floor((offerTime / (1000 * 60 * 60) % 24));
    const offerMins = Math.floor((offerTime / (1000 * 60) % 60));
    const offerSecs = Math.floor((offerTime / 1000) % 60);

    const days_el = document.getElementById("days_left");
    days_el.innerHTML = offerDays;
    const hours_el = document.getElementById("hours_left");
    hours_el.innerHTML = offerHours;
    const mins_el = document.getElementById("mins_left");
    mins_el.innerHTML = offerMins;
    const secs_el = document.getElementById("secs_left");
    secs_el.innerHTML = offerSecs;
}

function resetOfferDate() {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 15);
    return futureDate;
}

setInterval(countdown, 1000);


$(document).ready(function(){
    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    date_input.datepicker({
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
    })
})