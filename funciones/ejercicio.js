"use strict";
(function () {
    // Funciones basicas
    function sumar(a, b) {
        return a + b;
    }
    var sumarArreglado = function (a, b) { return a + b; };
    var contar = function (heroes) {
        return heroes.length;
    };
    var contarHeroes = function (heroes) {
        return heroes.length;
    };
    var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    // Parametros por defecto 
    var llamarBatman = function (llamar) {
        if (llamar === void 0) { llamar = true; }
        if (llamar) {
            console.log('Batiseñal Activada');
        }
    };
    llamarBatman();
    // rest ?
    var unirHeroes = function () {
        var personas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            personas[_i] = arguments[_i];
        }
        return personas.join(', ');
    };
    // Tipo Funcion
    var noHaceNada = function (numero, texto, booleano, arreglo) { };
    // crear el tipo de funcion que acepte la funcion no hace nada
    var noHaceNadaTampoco = noHaceNada;
})();
