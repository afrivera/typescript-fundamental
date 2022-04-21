"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    var noName;
    var name = fullName(noName, 'Stark');
    console.log(name);
})();
