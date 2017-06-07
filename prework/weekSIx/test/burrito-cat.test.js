describe('2_burrito-cat', function() {
  before(function() {
    fixture.setBase('assignment/2_burrito-cat');
  });

  beforeEach(function () {
    fixture.load('index.html');
  });

  afterEach(function () {
    fixture.cleanup();
  });

  describe('basemode hideCat()', function () {
    it('loads with a visible cat', function() {
      var isVis = $('#catImg').is(':visible');
      assert.equal(isVis, true, 'cat should be visible');
    });

    it('toggles whether cat is hidden', function() {
      hideCat();
      isVis = $('#catImg').is(':visible');
      assert.equal(isVis, false, 'cat should be hidden');

      // call hideCat again
      hideCat();
      isVis = $('#catImg').is(':visible');
      assert.equal(isVis, true, 'cat should be visible');
    });

    // does not work
    it.skip('is triggered by a click event', function () {
      var $event = $('#hideDiv').trigger('click');
      var isVis = $('#catImg').is(':visible');
      console.log('isVis', isVis);
      assert.isNotOk(isVis);
    });

    it('appends paragraphs to div with an id of clickList', function() {
      var clickListLength = $('#clickList').children().length;
      hideCat();
      assert.equal($('#clickList').children().length, clickListLength + 1);
    });
  });

  describe('basemode fadeCat()', function () {
    it('toggles visible cat to hidden', function (done) {
      fadeCat(null, function () {
        isVis = $('#catImg').is(':visible');
        assert.equal(isVis, false, 'cat should be hidden');
        done();
      });
    });

    it('toggles hidden cat to visible', function(done) {
      $('#catImg').hide();
      fadeCat(null, function () {
        isVis = $('#catImg').is(':visible');
        assert.equal(isVis, true, 'cat should be visible');
        done();
      });
    });

    it('appends paragraphs to div with an id of clickList', function(done) {
      var clickListLength = $('#clickList').children().length;
      fadeCat(null, function () {
        assert.equal($('#clickList').children().length, clickListLength + 1);
        done();
      });
    });

  });

  describe('basemode animateCat()', function () {

    it('increases width of cat by 10px', function(done) {
      var startingCatWidth = $('#catImg').width();
      animateCat(null, function () {
        var catWidth = $('#catImg').width();
        assert.equal(startingCatWidth + 10, catWidth);
        done();
      });
    });

    it('appends paragraphs to div with an id of clickList', function(done) {
      var clickListLength = $('#clickList').children().length;
      animateCat(null, function () {
        assert.equal($('#clickList').children().length, clickListLength + 1);
        done();
      });
    });

  });

  describe('hardmode resetCat()', function () {
    var startingCatWidth = $('#catImg').width();

    it('resets cat to original size', function(done) {
      animateCat(null, function () {
        resetCat();
        var catWidth = $('#catImg').attr('width');
        assert.equal(startingCatWidth, catWidth);
        done();
      });
    });

    it('appends paragraphs to div with an id of clickList', function() {
      var clickListLength = $('#clickList').children().length;
      resetCat();
      assert.equal($('#clickList').children().length, clickListLength + 1);
    });

  });
});
