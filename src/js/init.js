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

  page.init({ container: '.pages' })

  console.log(page)
})