console.log('Aloha Mr. Hand')
import $ from 'jquery'
var searchTerms = 'tooth'
$('document').ready(function () {
  var wikipedia = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=' + searchTerms + '&callback=?'
  $.getJSON(wikipedia, function (jsonp) {
    // $("#jsonp-response").html(JSON.stringify(jsonp, null, 2));
    var results = jsonp['query']['search']
    $.each(results, function (key, value) {
      $('body').append('<h3>' + value.title + '</h3>')
      $('body').append('<p>' + value.snippet + '</p>')
    })
    console.log(results)
    // console.log(jsonp)
    if (jsonp.status == 'OK') {
      // Check result 0
      var result = jsonp.results[0]
      // look for locality tag and administrative_area_level_1
     // console.log(jsonp)
      for (var i = 0; i < jsonp.results; i++) {
       // console.log(jsonp)
      }
      // var url = host_prefix + '/jsonp?callback=?';
      // $.getJSON(url, function(jsonp) {
      //   $("#jsonp-response").html(JSON.stringify(jsonp, null, 2));
      // });
      // if (state != '') {
      //   console.log("Hello to you out there in " + city + ", " + state + "!");
      // }
      // $('body').append(city + "," + state);
    }
  })
})
