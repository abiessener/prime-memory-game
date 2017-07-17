// 5-1 Challenge

console.log('JS loaded');

var onReady = function(e, complete) { // ignore e, use complete when specified below
  console.log('selectors doc ready');

  // 1 - Select just the h1 inside the header element and
  // make it disappear with the `hide()` method
  $('header').find('h1').hide();

  // 2 - Select the element with id "step-two" and
  // change its background color to yellow.
  // HINT: look up .css() to access an element's css properties
  $('#step-two').css('background-color', 'yellow');

  // 3 - fade example-list elements to an opacity of 0.4
  // use complete as the last argument to the jQuery fade function
  $('.example-list').fadeTo('slow',.4,complete);

  // 4 - Select all of the odd-numbered list items and
  // change their text color to blue
  // HINT: look up .css() to access an element's css properties
  $('li:odd').css('color','blue');

  // 5 - select the last list item with a pseudo selector
  // write your code for question 5 here.
  $('li:last');

  // 6 - Using DOM traversal, select the last list item on the page
  // using any of the following: .parent(), .children(), .last().
  // Change its text color to red.
  $('li').last().css('color','red');
};

// When the DOM is loaded, our code in the onReady function will run.
$(document).ready(onReady);
