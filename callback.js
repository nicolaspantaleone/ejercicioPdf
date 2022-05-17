function decirHola(nombre,apellido){
    return `Hola ${nombre} ${apellido}`;
}
function decirAdios(nombre,apellido){
    return `Adios ${nombre} ${apellido}`;
}

function saludar(cb){
    const nom="Juan";
    const ape="Perez";
    return cb(nom,ape);
}

console.log(saludar(decirHola));
console.log(saludar(decirAdios));