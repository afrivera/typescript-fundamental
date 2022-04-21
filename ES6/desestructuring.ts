(()=>{

    type Avengers = {
        nick: string,
        ironman: string,
        vision: string,
        activo: boolean,
        poder: number;
    }

    const avenger: Avengers = {
        nick: 'Samuel Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.2345
    }

    // const { poder, vision,  } = avenger;
    // console.log(poder.toFixed(2), vision.toUpperCase());

    const printAvenger = ( { vision, ...resto}: Avengers )=> console.log( vision, resto);

    // printAvenger(avenger);

    const avengerArr: string[] = ['Capitán America', 'IronMan', 'Hulk'];

    const [ chris ] = avengerArr;

    // console.log(chris);

})()