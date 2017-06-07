/*
  Note on week 6 there were some test issues where two different parts of the
  assignment called their own onReady function. The tests were confusing which
  onReady goes with which test and causing tests to fail unexpectedly. To fix
  this we named one onReady2. This isn't a great solution, but the other option
  would be to follow the module pattern, which is not a pattern we teach and
  would be extra confusing for students.
*/
describe('promode 3_memory-game', function() {
  before(function() {
    fixture.setBase('assignment/3_memory-game');
  });

  beforeEach(function () {
    fixture.load('index.html');
  });

  afterEach(function () {
    fixture.cleanup();
  });

  describe('revealHide()', function() {

    it('shows and hides when revealHide is called', function() {
      //revealHide has not been called
      // validate that all elements with the cardImg class are visible
      validateShown();

      // revealHide function is called
      revealHide();
      // validate that all elements with the cardImg class are not visible
      validateHidden();

      //revealHide is called again
      revealHide();
      // validate that all elements with the cardImg class are visible
      validateShown();
    });
  });

  describe('singleClickFunc()', function() {
    it('hides card image when that image\'s card is clicked', function() {
      //ensure document is ready before test runs
      onReady2();

      // get first card element and trigger click event on it
      $('.cardDiv').first().triggerHandler('click');
      assert.equal($('.cardImg').first().is(':visible'), false, 'element should not be visible');
    });

    it('shows card image when that image\'s card is clicked', function() {
      //ensure document is ready before test runs
      onReady2();

      //call revealHide to hide all cards and validate they are hidden
      revealHide();
      validateHidden();

      // get first card element and trigger click event on it
      $('.cardDiv').first().triggerHandler('click');
      assert.equal($('.cardImg').first().is(':visible'), true, 'element should be visible');
    });
  });
});

// -- Test util functions --
// function that iterates over cardImg elements and validates they are displayed
function validateShown(){
  $('.cardImg').each(function(index, el) {
    assert.equal($(el).is(':visible'), true, 'element should be visible');
  });
}

// function that iterates over cardImg elements and validates they are not displayed
function validateHidden() {
  $('.cardImg').each(function(index, el) {
    assert.equal($(el).is(':visible'), false, 'element should not be visible');
  });
}
