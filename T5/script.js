// Ejercicio 1
console.log("Ejercicio 1:");
let libros = [];
for (let i = 0; i < 10; i++) {
    let año = Math.floor(Math.random() * 21) + 2000;
    libros.push(
        {
            id: i + 1,
            autor: "Autor " + Math.floor(Math.random() * 101),
            año: año,
            fecha: new Date(año + "-01-01T12:00:00.000Z")
        }
    );
}
console.log("Libros");
console.table(libros);
let libros_json = JSON.stringify(libros);
console.log(libros_json);

// Ejercicio 2
console.log("Ejercicio 2:");
let nuevoLibro = {
    id: 11,
    autor: "Autor Edgar Allan Poe",
    año: 2023,
    fecha: new Date("2023-01-01T12:00:00.000Z")
};
libros.unshift(nuevoLibro);
let libros2 = [];

function reverseLibros(librosOrden, librosNuevos) {
    let n = libros.length;
    for (let i = 0; i < n; i++) {
        librosNuevos.push(librosOrden.pop());
    }
}
reverseLibros(libros, libros2);
console.table(libros2);

//Ejercicio 3:
console.log("Ejercicio 3:")
let librosCopia = [].concat(libros2);

function deleteLibro(id, libros) {
    let index = libros.findIndex(libro => libro.id == id);
    if (index < 0) {
        console.log("Elemento ", id, "no existe");
        return false;
    }
    libros.splice(index, 1);
    console.log("Elemento ", id, "eliminado");
    return true;
}
deleteLibro(10, librosCopia);
console.table(librosCopia);

function filtrarLibros(año, libros) {
    return libros.filter(libro => libro.año <= año);
}
let librosFiltrados = filtrarLibros(2015, librosCopia);
console.table(librosFiltrados);

// Ejercicio de tarea
// 1
console.log("Ejercico de tarea:")
let libros_tarea = [];
for (let i = 0; i < 20; i++) {
    let año = Math.floor(Math.random() * 21) + 2000;
    libros_tarea.push(
        {
            id: i + 1,
            autor: "Autor " + Math.floor(Math.random() * 101),
            año: año,
            fecha: new Date(año + "-01-01T12:00:00.000Z"),
            clave: Math.floor(Math.random() * 900) + 100,
            palabras: Math.floor(Math.random() * 99001) + 1000,
        }
    );
}
console.table(libros_tarea);
// 2
let otro_libro = {
    id: 21,
    autor: "Autor Chido",
    año: 2023,
    fecha: new Date("2023-01-01T12:00:00.000Z"),
    clave: Math.floor(Math.random() * 900) + 100,
    palabras: Math.floor(Math.random() * 99001) + 1000,
};
libros_tarea.splice(7, 0, otro_libro)
console.table(libros_tarea)
// 3
libros_tarea.sort(
    (libro_a, libro_b) => { return libro_a.clave - libro_b.clave }
);
console.table(libros_tarea);
// 4
function consultarLibros(libros, opcion) {
    let copia = [].concat(libros)
    switch (opcion) {
        case "TOT":
            return copia.reduce((sum, libro) => sum + libro.palabras, 0);
        case "PRO":
            let sum = copia.reduce((sum, libro) => sum + libro.palabras, 0);
            return sum / copia.length;
        case "MAX":
            copia.sort(
                (libro_a, libro_b) => { return libro_a.palabras - libro_b.palabras }
            );
            return "Clave: " + copia[0].clave + " Palabras: " + copia[1].palabras;
        case "MIN":
            copia.sort(
                (libro_a, libro_b) => { return libro_b.palabras - libro_a.palabras }
            );
            return "Clave: " + copia[0].clave + " Palabras: " + copia[1].palabras;
        default:
            return -1;
    }
}
console.log("Total: ", consultarLibros(libros_tarea, "TOT"));
console.log("Promedio: ", consultarLibros(libros_tarea, "PRO"));
console.log("Max: ", consultarLibros(libros_tarea, "MAX"));
console.log("Min: ", consultarLibros(libros_tarea, "MIN"));