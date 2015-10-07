window.page = (function () {
  var pages = [],
      defaultIndex = 0,
      currentIndex,
      pagesContainer = 'body'

  bind()

  function add (page, isDefault) {
    pages.push(page)
    if (isDefault) defaultIndex = (pages.length - 1)
  }

  function show (pageIndex) {
    if (typeof pageIndex !== 'undefined') {
      var page = pages[pageIndex]
      if (!currentIndex && currentIndex !== 0) {
        $(pagesContainer).find(page.element).show()
        currentIndex = pageIndex
        $(document).trigger('loadPage:' + page.element.replace('.', '')) 
      } else if (currentIndex !== pageIndex) {
        var currentPage = pages[currentIndex]
        $(pagesContainer).find(page.element).fadeIn()
        $(pagesContainer).find(currentPage.element).hide()
        $(document).trigger('hidePage:' + currentPage.element.replace('.', ''))
        currentIndex = pageIndex
        $(document).trigger('loadPage:' + page.element.replace('.', ''))     
      }
    }
  }

  function getClassIndex (pageClass) {
    var pageIndex
    for (var i = 0; i < pages.length; i++) {
      if (pages[i].element === pageClass) {
        pageIndex = i
        break
      }
    }
    return pageIndex
  }

  function hashToIndex () {
    return getClassIndex(window.location.hash.replace('#', '.'))   
  }

  function bind () {
    $(window).on('hashchange', function(e) {
      var pageIndex = hashToIndex()
      if (typeof pageIndex !== 'undefined') {
        e.preventDefault()
        show(pageIndex)
      }
    });
  }

  function init (options) {
    options = options || {}
    if (options.container) pagesContainer = options.container
    if (window.location.hash) {
      var pageIndex = hashToIndex()
      if (typeof pageIndex !== 'undefined') {
       return show(pageIndex)
      }            
    }
    show(defaultIndex)
  }

  return {
    add: add,
    show: show,
    init: init
  }
})()