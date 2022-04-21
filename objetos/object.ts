(()=>{

    let flash: { name:string, age:number, powers:string[], getName?:()=> string } = {
        name: 'Barry Allen',
        age: 24,
        powers:['SuperVelocidad', 'viajar en el tiempo'],
        getName(){ 
            return this.name
        }
    }

    let superman: { name:string, age:number, powers:string[], getName?:()=> string } = {
        name: 'Barry Allen',
        age: 24,
        powers:['SuperVelocidad', 'viajar en el tiempo'],
        getName(){ 
            return this.name
        }
    }

    

})()