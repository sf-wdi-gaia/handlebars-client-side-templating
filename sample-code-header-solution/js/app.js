console.log('Sanity Check: app.js is linked correctly!');

$(document).ready(function(){

  // select a template script, and pull out the handlebars and html inside it
  var source = $('#developer-li-template').html();
  // console.log('template script source:', source);

  var headerSource = $('#header-template').html();

  // compile the handlebars template
  var template = Handlebars.compile(source);

  var headerTemplate = Handlebars.compile(headerSource);

  // use the template function from handlebars to create an HTML string
  // the template function takes in an object where:
    // each key is a variable the html template expects
    // each key's value is the data we want that variable to have
  var developerHtml = template({ developers: data.developers });
  // console.log('generated html string:', developerHtml);

  var headerHtml = headerTemplate({
    cohort: data.cohort,
    classroom: data.room,
    schedule_link: data.github_schedule
  });
  console.log(headerHtml);

  // append html to the view
  $("#developers-list").append(developerHtml);

  $('#cohort-header').append(headerHtml);

});
