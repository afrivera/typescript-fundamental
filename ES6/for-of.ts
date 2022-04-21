(()=>{

    type Avenger = {
        name: string,
        weapon: string,
    }

    const ironman: Avenger = {
        name: 'Tony Stark',
        weapon: 'Armor suit'
    }

    const capitan: Avenger = {
        name: 'Steve Rogers',
        weapon: 'shield'
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'jhonatan'
    }

    const avengers: Avenger[] = [ ironman, capitan, thor]; 
    for (const avenger of avengers) {
        // console.log(avenger)
    }



})()