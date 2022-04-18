(()=>{
    let avengers: number = 20;

    console.log(avengers);

    const villians: number = 320

    if( avengers < villians){
        console.log('Estamos en problemas');
    } else {
        console.log('Estamos salvados')
    }

    avengers = Number('123A');

    console.log({avengers})

})()