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
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || 'no lastName');
    };
    var name = fullName('Tony');
    console.log(name);
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    var noName;
    var name = fullName(noName, 'Stark');
    console.log(name);
})();
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
(function () {
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
    var llamarBatman = function (llamar) {
        if (llamar === void 0) { llamar = true; }
        if (llamar) {
            console.log('Batiseñal Activada');
        }
    };
    llamarBatman();
    var unirHeroes = function () {
        var personas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            personas[_i] = arguments[_i];
        }
        return personas.join(', ');
    };
    var noHaceNada = function (numero, texto, booleano, arreglo) { };
    var noHaceNadaTampoco = noHaceNada;
})();
(function () {
    var addNumber = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El Mundo est\u00E1 salvado"; };
    var myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(function () {
    var hero = 'Flash';
    function returName() {
        return hero;
    }
    var activateBatiSignal = function () {
        return "Batiseñal Activada";
    };
    console.log(typeof activateBatiSignal);
    var heroName = returName();
})();
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    }
};
var villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
var charles = {
    poder: "psiquico",
    estatura: 1.78
};
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
var mystique;
mystique = charles;
mystique = apocalipsis;
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['SuperVelocidad', 'viajar en el tiempo'],
        getName: function () {
            return this.name;
        }
    };
    var superman = {
        name: 'Barry Allen',
        age: 24,
        powers: ['SuperVelocidad', 'viajar en el tiempo'],
        getName: function () {
            return this.name;
        }
    };
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2],
        getName: function () {
            return this.name;
        }
    };
    var superman = {
        name: 'clark Kent',
        age: 24,
        powers: [1],
        getName: function () {
            return this.name;
        }
    };
})();
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
(function () {
    var avenger = '123';
    avenger = 'Dr Strange';
    console.log(avenger.charAt(1));
    console.log(avenger.length);
})();
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var ForceLevel;
    (function (ForceLevel) {
        ForceLevel[ForceLevel["aquaman"] = 0] = "aquaman";
        ForceLevel[ForceLevel["batman"] = 1] = "batman";
        ForceLevel[ForceLevel["flash"] = 5] = "flash";
        ForceLevel[ForceLevel["superman"] = 100] = "superman";
    })(ForceLevel || (ForceLevel = {}));
    var fuerzaFlash = ForceLevel.flash;
    var fuerzaSuperman = ForceLevel.superman;
    var fuerzaBatman = ForceLevel.batman;
    var fuerzaAcuaman = ForceLevel.aquaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var villians = ['Omega rojo', 'Dormamu', 'Duende Verde'];
    villians.forEach(function (villian) { return console.log(villian.toLowerCase()); });
    numbers.forEach(function (villian) { return console.log(villian); });
    console.log(numbers);
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman: isSuperman });
    console.log({ isBatman: isBatman });
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 5] = "medium";
        AudioLevel[AudioLevel["medium2"] = 6] = "medium2";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.medium2;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(function () {
    var abc = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    abc('Auxilio');
})();
(function () {
})();
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
(function () {
    var _a;
    var batman = 'Batman\'';
    var linternaVerde = "Linterna Verde";
    var volcanNegro = "H\u00E9roe: Volcan Negro";
    var abc = 123;
    console.log("i'm ".concat(batman, ", ").concat(abc));
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
(function () {
    var hero = ['Dr Strange', 100, true];
    hero[1] = 50;
    hero[0] = '50';
    hero[2] = true;
    console.log(hero);
})();
(function () {
    function callBatman() {
    }
    var callSuperman = function () {
    };
    var a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map