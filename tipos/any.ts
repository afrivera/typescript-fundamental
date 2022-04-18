(()=>{

    let avenger: any = '123';

    avenger = 'Dr Strange';

    // casteo
    console.log( (avenger as string).charAt(1) );
    console.log( ( <string> avenger ).length );
})()