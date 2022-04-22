"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    imprimirBio() {
        console.log(`${this.nombre} - ${this.edad} - ${this.estadoCivil} - ${this.sexo}`);
    }
}
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2],
        getName() {
            return this.name;
        }
    };
    let superman = {
        name: 'clark Kent',
        age: 24,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutants {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return `${this.name}- ${this.realName}`;
        }
    }
})();
(() => {
    const client = {
        name: 'Andres',
        address: {
            id: 124,
            zip: 'kdje',
            city: 'Cali'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client1 = {
        name: 'Andrea',
        age: 28,
        address: {
            id: 124,
            zip: 'kdje',
            city: 'Cali'
        }
    };
})();
(() => {
    let addToNumbersFunction;
    addToNumbersFunction = (a, b) => 10;
})();
//# sourceMappingURL=main.js.map