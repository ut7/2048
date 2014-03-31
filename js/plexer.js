(function (exports) {
  var Plexer = function(callback) {
    this.callback = callback;
    this.keysCurrentlyDown = [];
  };

  Plexer.prototype.keyDown = function(k) {
    this.keysCurrentlyDown[k] = true;
  };

  Plexer.prototype.keyUp = function(k) {
    delete this.keysCurrentlyDown[k];
  };

  Plexer.prototype.trigger = function() {
    this.keysCurrentlyDown.forEach(function(_, key) {
      this.callback(key);
    }.bind(this));
  };
  
  exports.Plexer = Plexer;
}(this));

