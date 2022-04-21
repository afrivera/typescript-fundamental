(()=>{
    
    const addNumber = (a: number, b: number) =>a + b;
    const greet = (name: string) =>`Hola ${name}`;
    const saveTheWorld = ()=> `El Mundo está salvado`;

    // let myFunction: (a:number,b:number)=>number;
    // let myFunction: (a:string)=>string;
    let myFunction: ()=>string;

    // myFunction = 10;
    // console.log(myFunction);

    // myFunction = addNumber;
    // console.log(myFunction(1,2));

    // myFunction = greet;
    // console.log(myFunction('Andrés'));

    myFunction = saveTheWorld;
    console.log(myFunction());

})();