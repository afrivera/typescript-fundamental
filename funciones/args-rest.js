"use strict";
(function () {
    var firstName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restArgs.join(' '));
    };
    var superman = firstName('Clark', '1,3,4', '345');
    console.log(superman);
})();
