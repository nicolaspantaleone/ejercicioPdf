// const persona = {
//     name:"juan",
//     age: 45
// }

// const empleado ={
//     ...persona,
//     categoria: 1,
//     sueldo:120000,
    
// }

// console.log(empleado)

function suma(...numeros){
    return numeros.reduce((acum,el)=>acum+el);
}

console.log(suma(2,4,3,5,6,7,8,9));