 const array = [2,4,5,6,7,8,9];

// const acumpares = array.filter((element) => element%2==0).reduce((acum,el)=> acum+el);

// // const acum = array.reduce(function(acum,el){
// //     return acum+el;
// // })
// console.log(acumpares);

// const array =[
//     {
//         name:"juan",
//         age: 23,
//     },
//     {
//         name:"romina",
//         age: 24,
//     },
//     {
//         name:"daniel",
//         age: 30,
//     }
// ]

// const nuevo = array.map((e) => {
//     return e.name + "s";
// });
// console.log(nuevo);
array.forEach((el,index)=>{
    console.log("Elemento: "+el+" indice "+index);
})