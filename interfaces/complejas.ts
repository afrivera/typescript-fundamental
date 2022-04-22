(()=>{

    // la interfaz principal va arriba
    interface Cliente {
        name: string;
        age?: number;
        address: Address;
        getFullAddress?( id:string ):string;
    }

    interface Address {
        id: number,
        zip: string,
        city: string
    }

    const client: Cliente = {
        name: 'Andres',
        // age: 31
        address: {
            id: 124,
            zip: 'kdje',
            city: 'Cali'
        },
        getFullAddress( id: string){
            return this.address.city
        }
    }
 
    const client1: Cliente = {
        name: 'Andrea',
        age: 28,
        address: {
            id: 124,
            zip: 'kdje',
            city: 'Cali'
        }
    }


})()