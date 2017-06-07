describe('basemode 1_selectors', function() {

  before(function() {
    fixture.setBase('assignment/1_selectors');
  });

  beforeEach(function () {
    fixture.load('index.html');
    onReady();
  });

  afterEach(function () {
    fixture.cleanup();
  });

  // 1
  it('hides the h1 element inside of the header element', function() {
    // make sure DOM is loaded
    assert.equal($('header h1').is(':visible'), false, 'header h1 element should not be visible');
  });

  // 1
  it('keeps all other h1 elements visible', function() {
    assert.equal($('main h1').is(':visible'), true, 'other h1 elements should be visible');
  });

  // 2
  it('changes background color of the span with an id of step-two to yellow', function() {
    var spanBg = $('#step-two').css('background-color') == 'rgb(255, 255, 0)';
    assert.equal(spanBg, true, 'background color should be yellow');
  });

  // 4 - select all odd list items and change to blue
  // $('li:odd').css('color', 'blue');
  it('changes color of odd li elements to blue', function() {
    var oddListItems = $('li:odd').css('color') == 'rgb(0, 0, 255)';
    assert.equal(oddListItems, true, "text color of odd li's should be blue");
  });

  // 5 - select the last list item with a pseudo selector
  // $('li:last').css('color', 'red');

  // 6 - select the last list item with traversal
  // $('li').last().css('color', 'red');
  it('changes color of last li element to red', function() {
    var lastLi = $('li:last').css('color') == 'rgb(255, 0, 0)';
    assert.equal(lastLi, true, 'text color should be red');
  });

});
