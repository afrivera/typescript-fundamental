(()=>{
    const firstName =(firstName:string, ...restArgs:string[]):string=>{
        return `${firstName} ${restArgs.join(' ')}`;
    } 

    const superman = firstName('Clark', '1,3,4', '345')
    console.log(superman);
})()