(()=>{

    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Constructor Avenger llamado');
        }

        protected getFullName (){
            return `${this.name}  -  ${this.realName}`;
        }
    }

    class Xmen extends Avenger {

        constructor(
            name:string,
            realName:string,
            public isMutant: boolean,

        ){
            super( name, realName );
            console.log('constructor xmen llamado');
            
        }
 
        get fullName (){
            return `${this.name}`; 
        }

        set fullName( name:string ) {
            if( name.length < 3){
                throw new Error('name too short, should have 3 characters or +')
            }
            this.name = name;
        }

        getFullNameXMen(){
            console.log(super.getFullName())
        }
    }

    // const wolverine = new Xmen('Wolverine', 'Logan', true);
    // wolverine.getFullNameXMen()
    // console.log(wolverine.fullName);
    // wolverine.fullName = 'Andres'
    // console.log(wolverine.fullName);

})();