(()=>{

    interface Xmen {
        name: string;
        realName: string;
        mutantPower( id: number ): string;
    }

    interface Human {
        age: number;
    }

    class Mutants implements Xmen, Human { // implements para extender una interface tal como una clase abstract con mh
        


        constructor(
            public age: number,
            public name: string,
            public realName: string,
        ){

        }

        mutantPower(id: number): string {
            return `${this.name}- ${this.realName}`;
        }
    }


})()