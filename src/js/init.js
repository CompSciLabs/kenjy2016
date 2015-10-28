$(document).ready(function () {

  function CountDownHeader(){
    var weddingDay = moment("2016-08-25");
    var Countdown = weddingDay.diff(moment());
    $('.countdown').empty().append( moment(Countdown).format("M,D,H,mm,ss"));
  }
  $(".main").onepage_scroll({
     sectionContainer: 'section',
     easing: 'ease',             
     animationTime: 1000,        
     pagination: true,           
     updateURL: false,           
     beforeMove: function (index) {},
     afterMove: function (index) {}, 
     loop: false,                   
     keyboard: true,                
     responsiveFallback: false,               
     direction: 'vertical'
  });
  window.setInterval(CountDownHeader, 1000);
})
