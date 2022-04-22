"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo Salvado';
        }
    }
    class Villian extends Mutante {
        consquitarMundo() {
            return 'Conquistar el Mundo';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    const printName = (character) => {
        console.log(character.realName);
    };
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getAvgAge() {
            return this.name;
        }
        bio() {
            return `${this.name} (${this.team})`.toUpperCase();
        }
    }
    Avenger.avgAge = 35;
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado');
        }
        getFullName() {
            return `${this.name}  -  ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('constructor xmen llamado');
        }
        get fullName() {
            return `${this.name}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('name too short, should have 3 characters or +');
            }
            this.name = name;
        }
        getFullNameXMen() {
            console.log(super.getFullName());
        }
    }
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.intance) {
                Apocalipsis.intance = new Apocalipsis('Soy Apocalipsis el único');
            }
            return Apocalipsis.intance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apoca = Apocalipsis.callApocalipsis();
    const apoca1 = Apocalipsis.callApocalipsis();
    const apoca2 = Apocalipsis.callApocalipsis();
    console.log(apoca);
    console.log(apoca1);
    console.log(apoca2);
    apoca.changeName('Charles');
    console.log(apoca);
})();
//# sourceMappingURL=main.js.map