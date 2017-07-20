$(document).ready(function() {

  // nav bar event listeners set up
  $('.navDiv').mouseenter(mouseEnterButton);
  $('.navDiv').mouseleave(mouseLeaveButton);


  var originalHeight = $('#catImg').height();
  var originalWidth = $('#catImg').width();
  //console.log(originalHeight, originalWidth);

  //TODO add your code below to attach event listeners to the buttons
  // We did the first one for you. You can use the `.click()` function or
  // the .on('click') like we did below.
  $('#fadeDiv').on('click', fadeCat);
  $('#hideDiv').on('click', hideCat);
  $('#animateDiv').on('click', animateCat);
  $('#resetDiv').on('click', function(){
    resetCat(originalHeight,originalWidth);
  });

});

// nav bar function to fade when mouse enters button
function mouseEnterButton() {
  console.log('enter');
  $(this).fadeTo('fast', 0.5);
}

// nav bar function to fade when mouse leaves button
function mouseLeaveButton() {
  console.log('leave');
  $(this).fadeTo('fast', 1);
}

// fadeCat is a function to fade cat in or out when that button is clicked
function fadeCat(e, complete) { // ignore e, use complete as the last argument to any jQuery fade functions
  //TODO your function code here
  // toggle catImg fade
  // append '<p>fade toggle</p>' to 'clickList'
  $('#catImg').fadeToggle(complete);
  $('#clickList').append('<p>fade toggle</p>');
  //console.log('fade');

}

// hideCat is a function to hide and show the cat image when that button is clicked
function hideCat() {
  //TODO your function code here
  // hide catImg
  // append '<p>hide toggle</p>' to 'clickList'
  $('#catImg').toggle();
  $('#clickList').append('<p>hide toggle</p>');
}

// animateCat is a function to grow the cat's height and width by 10px when that button is clicked
function animateCat(e, complete) { // ignore e, use complete as the last argument to the jQuery animate function
  //TODO your function code here
  // animate catImg
  // append '<p>animate</p>' to 'clickList'
  $('#catImg').animate({
    height: "+=10",
    width: "+=10",
  }, complete);
  $('#clickList').append('<p>animate</p>');
}

// Hard Mode
// resetCat is a function to reset the cat photo to its original size
// when that button is clicked.

function resetCat(h, w) {
  // reset catImg
  $('#catImg').height(h);
  $('#catImg').width(w);
  // append '<p>reset</p>' to 'clickList'
  $('#clickList').append('<p>reset</p>');

}
