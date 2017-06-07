describe('basemode 1_selectors_fade', function() {

  before(function() {
    fixture.setBase('assignment/1_selectors');
  });

  beforeEach(function () {
    fixture.load('index.html');
  });

  afterEach(function () {
    fixture.cleanup();
  });

  it('fades elements with a class of example-list to an opacity of 0.4', function (done) {
    onReady(null, function () {
      assert.equal($('.example-list').css('opacity').substr(0, 3), 0.4);
      done();
    });
  });

});
