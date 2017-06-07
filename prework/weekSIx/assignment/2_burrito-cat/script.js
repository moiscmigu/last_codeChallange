var click = 10;

$(document).ready(function() {

  // nav bar event listeners set up
  $('.navDiv').mouseenter(mouseEnterButton);
  $('.navDiv').mouseleave(mouseLeaveButton);

  //TODO add your code below to attach event listeners to the buttons
  // We did the first one for you. You can use the `.click()` function or
  // the .on('click') like we did below.
  $('#fadeDiv').on('click', fadeCat());
  $('#fadeDiv').on('click', hideCat());
  $('#fadeDiv').on('click', resetCat());
  $('#fadeDiv').on('click', animateCat());


});

// nav bar function to fade when mouse enters button
function mouseEnterButton() {
  console.log('enter');
  $(this).fadeTo('fast', 0.5);
}

// nav bar function to fade when mouse enters button
function mouseLeaveButton() {
  console.log('leave');
  $(this).fadeTo('fast', 1);
}

// fadeCat is a function to fade cat in or out when that button is clicked
function fadeCat(e, complete) { // ignore e, use complete as the last argument to any jQuery fade functions
  //TODO your function code here
  // toggle catImg fade
  // append '<p>fade toggle</p>' to 'clickList'

  $("#fadeDiv").click(function() {

      $("#catImg").fadeToggle('fast', "linear");
      $("#clickList").append('<p>fade toggle</p>');

  });





}

// hideCat is a function to hide and show the cat image when that button is clicked
function hideCat() {
  //TODO your function code here
  // hide catImg
  // append '<p>hide toggle</p>' to 'clickList

  $("#hideDiv").click(function() {

      $("#catImg").toggle('slow');
      $("#clickList").append('<p>hide toggle</p>');
  });
}

// animateCat is a function to grow the cat's height and width by 10px when that button is clicked
function animateCat(e, complete) { // ignore e, use complete as the last argument to the jQuery animate function
  //TODO your function code here
  // animate catImg
  // append '<p>animate</p>' to 'clickList'

  $('#animateDiv').click(function () {

      $('#catImg').animate({
          height:'+=10px',
          width: "+=10px"
      });
      $("#clickList").append("<p>animate</p>");
  });




}

// Hard Mode
// resetCat is a function to reset the cat photo to its original size
// when that button is clicked.
function resetCat() {


  $('#resetDiv').click(function () {
      console.log('clicked');
      $('#catImg').animate({height: '162px', width: '216px'});
      $('#clickList').append('<p>reset</p>');



});
}
