namespace Validations {

    export const validateText =( texto:string ):boolean=>{
        return (texto.length > 3) ? true : false;
    }

    export const validateDate = (date:Date): boolean => {
        return (isNaN(date.valueOf()))
                ? false
                : true;
    }   

}

console.log(Validations.validateText('And'))
// console.log(Validations.validateDate())