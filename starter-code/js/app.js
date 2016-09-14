console.log('Sanity Check: app.js is linked correctly!');

$(document).ready(function(){

  // select a template script, and pull out the handlebars and html inside it
 var source = $('#developer-li-template').html();
  // compile the handlebars template
var template = Handlebars.compile(source);
  // use the template function from handlebars to create an html string
var developerHtml = template({developers: data.developers});
  // append html to the view
$('#developers-list').append(developerHtml);
});
