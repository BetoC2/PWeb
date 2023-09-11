
/*
function crearAlumno (nombre, carrera) {
    return {
        nombre,
        carrera
    }
}

function Alumno(nombre, carrera) {
    this.nombre = nombre;
    this.carrera = carrera;
}

class AlumnoC {
    constructor(nombre, carrera) {
        this.nombre = nombre;
        this.carrera = carrera;       
    }
}  
*/
// Ejercicio 1
function crearCelular(marca, modelo, año, precio, venta) {
    return {
        marca: marca,
        modelo: modelo,
        año: año, 
        precio: precio,
        venta: venta
    };
}


function crearCelularR(marca, modelo, año, precio, venta) {
    return {
        marca,
        modelo,
        año, 
        precio,
        venta
    };
}

class Celular {
    constructor(marca, modelo, año, precio, venta){
        this.marca = marca,
        this.modelo = modelo,
        this.año = año,
        this.precio = precio,
        this.venta = venta
    }
};

function crearCelularClass(marca, modelo, año, precio, venta) {
    return new CelularA(marca, modelo, año, precio, venta);
}
/*
let alumno1 = {
    nombre: "Pepito",
    carrera: "ISC",
    "apellido paterno": "Camela, jeje"
}

let alumno3 = alumno1;
alumno3.semestre = 6;
console.log(alumno.semestre);
console.log(alumno3 == alumno1);
let alumno4 = {};
let alumno5 = {};
console.log(alumno4 == alumno5);
console.log(alumno4 === alumno5);
let alumno6 = {};
Object.assign(alumno6, alumno1);
console.log(alumno6);

function printCelular(celular) {
    for(let key in celular) {
        console.log(key, ": ", celuar[key]);
    }
}
*/
function verificarPropiedad(celular, propiedad) {
    if (celular[propiedad] === undefined) {
        console.log(celular[propiedad]);
    } else {
        console.log(console.log("No hay, no existe"));
    }
}

function showData(){
    return this.marca + " " + this.modelo;
}
function setData(data){
    let [ram, procesador] = data.split(" ");
    this.ram = ram;
    this.procesador = procesador;
}

let phone = new Celular("oppo", "zxl", 2020, 27, true);
phone.getData = showData;
phone.setData = setData("200 snapdragon");

for(key in phone) {
    console.log(key, ":", phone[key])
}

