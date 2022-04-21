"use strict";
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = true; }
        if (upper) {
            return "".concat(firstName, " ").concat(lastName).toUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName);
        }
    };
    var name = fullName('Tony', 'Stark', false);
    console.log(name);
})();
