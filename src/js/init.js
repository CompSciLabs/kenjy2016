$(document).ready(function () {
  page.add(
    { name: 'Home'
    , element: '.home'
    }
  )

  page.add(
    { name: 'Location'
    , element: '.location'    
    }
  )

  page.add(
    { name: 'Registry'
    , element: '.registry'
    }
  )

  page.add(
    { name: 'Schedule'
    , element: '.schedule'
    }
  )

  page.add(
    { name: 'Gallery'
    , element: '.gallery'
    }
  )

  page.init({ container: '.pages' })

  function CountDownHeader(){
    var weddingDay = moment("2016-08-25");
    var Countdown = weddingDay.diff(moment());
    $('.countdown').empty().append( moment(Countdown).format("M,D,H,mm,ss"));
  }

  window.setInterval(CountDownHeader, 1000);
})
