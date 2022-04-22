(()=>{

    class Apocalipsis{

        static intance: Apocalipsis;

        private constructor( public name: string ) {

        }

        static callApocalipsis():Apocalipsis{
            if( !Apocalipsis.intance ){
                Apocalipsis.intance = new Apocalipsis ('Soy Apocalipsis el único');
            }
            return Apocalipsis.intance;
        }

        changeName (newName:string):void {
            this.name = newName;

        }

    }

    const apoca = Apocalipsis.callApocalipsis();
    const apoca1 = Apocalipsis.callApocalipsis();
    const apoca2 = Apocalipsis.callApocalipsis();

    // const apocalipsis = new Apocalipsis('Soy Apocalipsis el único');
    // const apocalipsis1 = new Apocalipsis('Soy Apocalipsis 1 el único');
    // const apocalipsis2= new Apocalipsis('Soy Apocalipsis 2 el único');

    console.log(apoca);
    console.log(apoca1);
    console.log(apoca2);
    apoca.changeName('Charles');
    console.log(apoca);

})();