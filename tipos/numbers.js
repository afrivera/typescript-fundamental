"use strict";
(function () {
    var avengers = 20;
    console.log(avengers);
    var villians = 320;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Estamos salvados');
    }
    avengers = Number('123A');
    console.log({ avengers: avengers });
})();
