"use strict";
(function () {
    var addNumber = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El Mundo est\u00E1 salvado"; };
    // let myFunction: (a:number,b:number)=>number;
    // let myFunction: (a:string)=>string;
    var myFunction;
    // myFunction = 10;
    // console.log(myFunction);
    // myFunction = addNumber;
    // console.log(myFunction(1,2));
    // myFunction = greet;
    // console.log(myFunction('Andrés'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
