require('../js/plexer.js');

describe("un plexer", function () {
  it("émet un evenement si on enfonce une touche", function () {
    var keySpy = jasmine.createSpy();
    var plexer = new Plexer(keySpy);
    plexer.keyDown(12);

    expect(keySpy).toHaveBeenCalledWith(12);
  });
});
