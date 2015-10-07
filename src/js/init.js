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

})