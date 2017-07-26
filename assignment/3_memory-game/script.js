console.log('Test Sourced');

var $imgOne, $imgTwo;
var imgCount = 0;
var showAll = true;
var srcArr = ['imgs/banana.png', 'imgs/apple.png', 'imgs/pear.png', 'imgs/orange.png'];
var totalCards = 8;

var onReady2 = function() {
  console.log('memory game doc ready');

  //TODO Add your code below to attach your event listeners to functions
  $('#revealHide').on('click', revealHide);
  $('.cardDiv').on('click', singleClickFunc);
  revealHide();
  randomizeCards();

};

// on document ready run the onReady2 function
$(document).ready(onReady2);

// revealHide function hides and shows all cards
function revealHide() {

  //TODO add your code here to get the desired functionality
  if (imgCount === 0){$('.cardImg').toggle()}
  else {
    $($imgOne).find('img').toggle();
    $($imgOne).data('found', false);
    $('.cardImg').toggle();
    $imgOne = null;
    imgCount = 0;
  }

  if (showAll) {showAll = false}
  else {showAll = true}
  console.log(showAll);

}

// singleClickFunc function hides and shows an indivdual card
function singleClickFunc() {
  if (showAll) {return};
  //TODO add your code here to get the desired functionality
  $(this).find('img').toggle();
  if (imgCount === 0) {
    $imgOne = this;
    $($imgOne).data('found', true);
    imgCount++;
    return;
  } else if ($(this).data('found')) {
    $imgOne = null;
    $(this).data('found',false);
    imgCount = 0;
    return;
  } else if (imgCount === 1) {
    $imgTwo = this;
    compareImages();
  }
}

function compareImages(){
  if ($($imgOne).find('img').attr('src') == $($imgTwo).find('img').attr('src')) {
    console.log('match found');
    blowUp($imgOne);
    blowUp($imgTwo);
    totalCards -= 2;
    if (totalCards === 0) {
      winGame();
    }
  } else {
    $($imgOne).find('img').fadeOut();
    $($imgOne).data('found', false);
    $($imgTwo).find('img').fadeOut();
  }
  $imgOne = null;
  $imgTwo = null;
  imgCount = 0;
  // console.log($imgOne, $imgTwo, imgCount);
  return;
}

function blowUp(elem){
  $(elem).data('found',true);
  $(elem).fadeTo('slow',0.2);
  // setTimeout(killImg,750);
  setTimeout(function() {
    $(elem).find('img').remove();
  }, 500)
  //setTimeout(killImgDead,1250);
}

function winGame(){
  $('h1').text('VICTORY');
  $('h1').css('text-align', 'center');
  $('h1').css('font-size', '6em');

  $('#revealHide').hide();
  $('h2').hide();
  $('li').hide();
  $('html').css('background-color', 'purple');
}

function randomizeCards(){
  var alreadyDone = [false,false,false,false,false,false,false,false,false,false,false,false];
  var totalDone = 0;
  $cardDivs = $('body').find('.cardDiv');

  while (totalDone < 8) {
    var i = Math.floor(Math.random() * 8);
    if (!alreadyDone[i]){
      var fruit = srcArr[totalDone % 4];
      // console.log(totalDone, fruit);
      var $currentDiv = $($cardDivs).get(i);
      //console.log($currentDiv);
      $($currentDiv).find('img').attr('src', fruit);
      alreadyDone[i] = true;
      totalDone++;
      //console.log(totalDone);
    }
  }
}
