var plexer = require('../js/plexer.js');

describe("un plexer", function () {
  it("émet un evenement si on enfonce une touche", function () {
    var keySpy = jasmine.createSpy();
    var plex = new plexer.Plexer(keySpy);
    plex.keyDown(12);

    expect(keySpy).not.toHaveBeenCalled();

    plex.trigger();

    expect(keySpy).toHaveBeenCalledWith(12);
  });

  it("emet a, puis b si a enfonce puis b", function () {
    var keySpy = jasmine.createSpy("keySpy");
    var plex = new plexer.Plexer(keySpy);
    
    plex.keyDown(12);
    plex.keyDown(13);
    plex.trigger();

    expect(keySpy).toHaveBeenCalledWith(12);
    expect(keySpy).toHaveBeenCalledWith(13);
  });

  it("peut lacher les touches des fois", function () {
    var keySpy = jasmine.createSpy("keySpy");
    var plex = new plexer.Plexer(keySpy);
    plex.keyDown(12);
    plex.keyUp(12);
    plex.keyDown(13);
    plex.trigger();

    expect(keySpy).not.toHaveBeenCalledWith(12);
    expect(keySpy).toHaveBeenCalledWith(13);
  });
});
