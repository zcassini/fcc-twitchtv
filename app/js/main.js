import $ from 'jquery'

var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=10&profile=fuzzy&callback=?&search='
var randomUrl = 'https://en.wikipedia.org/wiki/Special:Random'
var urls = []

$('document').ready(function () {
  $('#searchbox').keypress(function(e) {
    if (e.keyCode === 13) search(this.value)
  })
  $('#random').click(function() {
    openWin(randomUrl)
  })
})

function search (searchTerm) {
  $('#results').html('')
  urls = []

  $.getJSON(url + searchTerm, function (jsonp) {
    for(var i = 0; i < jsonp[1].length; i++) {
      var title = '<h5 class="title">' + jsonp[1][i] + '</h5>'
      var summary = '<p class="snippet">' + jsonp[2][i] + '</p>'
      urls.push(jsonp[3][i])

      $('#results').append('<div class="grid-flex-container panel" id="' + i + '">' + title + '<br />' + summary + '</div>')
      $(`#${i}`).on('click', function () {
        openWin(urls[$(this).attr('id')])//, '_blank')
      })
    }
  })
}

function openWin (link) {
  window.open(link, '_blank') ? window.focus() : alert('Please allow popups for this website')
}
