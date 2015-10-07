$(document).ready(function () {
  page.add(
    { name: 'Home'
    , element: '.home'
    }
  )

  page.add(
    { name: 'About'
    , element: '.about'    
    }
  )

  page.add(
    { name: 'Test'
    , element: '.test'
    }
  )

 function CountDownHeader(){
  var weddingDay = moment("2016-08-25");
  var Countdown = weddingDay.diff(moment());
  $('.countdown').empty().append( moment(Countdown).format("M,D,H,mm,ss"));

}
  page.init({ container: '.pages' })

  console.log(page)
  window.setInterval(CountDownHeader, 1000);
  
})

