(()=>{

    // Funciones basicas
    function sumar(a, b){
        return a + b;
    }
    const sumarArreglado = (a:number, b: number):number=> a + b; 

    var contar = heroes =>{
        return heroes.lenth;
    }
    var contarHeroes = (heroes:string[]):number =>{
        return heroes.length;
    }

    var superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];

    contar( superHeroes );

    // Parametros por defecto 
    const llamarBatman = (llamar:boolean = true ):void=>{
        if(llamar){
            console.log('Batiseñal Activada');
        }
    }

    llamarBatman();

    // rest ?
    const unirHeroes = (...personas:string[]):string =>{
        return personas.join(', ');
    }

    // Tipo Funcion
    const noHaceNada = (numero:number, texto:string, booleano:boolean, arreglo:string[])=>{};

    // crear el tipo de funcion que acepte la funcion no hace nada
    var noHaceNadaTampoco:(numero:number, texto:string, booleano:boolean, arreglo:string[])=> void = noHaceNada;

})();