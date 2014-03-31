(global).Plexer = function(callback) {
  this.callback = callback;
};

Plexer.prototype.keyDown = function(k) {
  this.callback(k);
}
