(()=>{

    class Avenger {

        // private name: string;
        // public team: string;
        // public realName?: string;
        static avgAge: number = 35;
        static getAvgAge (){
            return this.name;
        }

        constructor( 
            private name:string, 
            public team:string, 
            public realName?:string,
            // avgAge: number = 55
            // static no se puede poner
        ){
            // Avenger.avgAge = avgAge
        }  

        public bio(): string{
            return `${this.name} (${this.team})`.toUpperCase();
        }


    }

    // const antman: Avenger = new Avenger('AtnMan', 'Captain', 'Scott Lang');
    // console.log(Avenger.getAvgAge());

    // console.log(antman.bio() );






})()