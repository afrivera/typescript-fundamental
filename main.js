"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avenger = {
        nick: 'Samuel Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.2345
    };
    const printAvenger = (_a) => {
        var { vision } = _a, resto = __rest(_a, ["vision"]);
        return console.log(vision, resto);
    };
    const avengerArr = ['Capitán America', 'IronMan', 'Hulk'];
    const [chris] = avengerArr;
})();
(() => {
    const ironman = {
        name: 'Tony Stark',
        weapon: 'Armor suit'
    };
    const capitan = {
        name: 'Steve Rogers',
        weapon: 'shield'
    };
    const thor = {
        name: 'Thor',
        weapon: 'jhonatan'
    };
    const avengers = [ironman, capitan, thor];
    for (const avenger of avengers) {
    }
})();
(() => {
    let a = 'Andres';
    function getNombre() {
        console.log('viejo');
    }
})();
//# sourceMappingURL=main.js.map