(()=>{


    // palabra reservada de typescript
    type Hero = {
        name: string,
        age?: number;
        // powers: string [],
        powers: number [],
        getName?:()=>string
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers:[1, 2],
        getName(){ 
            return this.name;
        }
    }

    let superman: Hero = {
        name: 'clark Kent',
        age: 24,
        powers:[1],
        getName(){ 
            return this.name
        }
    }

    

})()