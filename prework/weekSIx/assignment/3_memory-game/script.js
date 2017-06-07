console.log('Test Sourced');

var onReady2 = function() {
  console.log('memory game doc ready');

  //TODO Add your code below to attach your event listeners to functions

  //hides the images when button is clicked
  $("#revealHide").click(function() {
      $('.cardImg').fadeToggle('fast');

  });


  $(".cardDiv").on('click', function() {
    $(this).find(".cardImg").fadeIn('slow');
});
};
  //shows the img when clicked on the black box













// on document ready run the onReady2 function
$(document).ready(onReady2);

// revealHide function hides and shows all cards
function revealHide() {

  //TODO add your code here to get the desired functionality

}

// singleClickFunc function hides and shows an indivdual card
function singleClickFunc() {

  //TODO add your code here to get the desired functionality

}
