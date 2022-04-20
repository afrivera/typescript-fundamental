"use strict";
(function () {
    var abc = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    abc('Auxilio');
})();
