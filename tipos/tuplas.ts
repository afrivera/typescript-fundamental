(()=>{

    const hero:[string, number, boolean] = ['Dr Strange', 100, true];

    hero[1] = 50;
    hero[0] = '50';
    hero[2] = true;

    console.log(hero);

})()