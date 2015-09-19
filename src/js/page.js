window.page = (function () {
  var pages = [],
      defaultPage = 0,
      pagesContainer = 'body'

  bind()

  function add (page, isDefault) {
    pages.push(page)
    if (isDefault) defaultPage = (pages.length - 1)
  }

  function show (pageIndex) {
    if (typeof pageIndex !== 'undefined') {
      var page = pages[pageIndex]
      $(pagesContainer).find('.page').hide()
      $(pagesContainer).find(page.element).show()
      $(document).trigger('loadPage:' + page.element.replace('.', ''))
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
    show(defaultPage)
  }

  return {
    add: add,
    show: show,
    init: init
  }
})()