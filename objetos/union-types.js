"use strict";
(function () {
    var myCustomVariable = 'Andres';
    console.log(myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1, 2]
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
