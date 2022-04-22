(()=>{

    abstract class Mutante {
        constructor(
            public name:string,
            public realName:string
        ) {}
        
    }

    class Xmen extends Mutante {
        salvarMundo(){
            return 'Mundo Salvado';
        }
    }
    class Villian extends Mutante {
        consquitarMundo(){
            return 'Conquistar el Mundo';
        }
    }

    const wolverine:Xmen = new Xmen('Wolverine', 'Logan');
    const magneto:Villian = new Villian('Magneto', 'Magnus');

    // console.log(wolverine.salvarMundo());
    // console.log(magneto.consquitarMundo());

    const printName = (character: Mutante)=> {
        console.log(character.realName);
    }
    // printName(wolverine);
    // printName(magneto);

})();