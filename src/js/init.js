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

  page.init({ container: '.pages' })

  console.log(page)
})