'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
  function User(id, name) {
    this.id = id;
    this.name = name;
  }
  Object.defineProperty(User.prototype, '_name', {
    get: function () {
      return this.name;
    },
    set: function (name) {
      this.name = name;
    },
    enumerable: false,
    configurable: true,
  });
  return User;
})();
exports.User = User;
