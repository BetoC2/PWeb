let calificaciones = [
    [7, 8, 5, 10, 9],
    [5, 5, 6, 7, 4],
    [10, 10, 9, 8, 8],
    [6, 5, 4, 3, 9, 5],
    [10, 2, 2, 2, 2]
];

let fnAprobado = (grupo, promedio) => (console.log("El grupo ", grupo, "aprobó con un promedio de ", promedio))
let fnReprobado = (grupo, promedio) => (console.log("El grupo ", grupo, "reprobó con un promedio de ", promedio))
let getPromedio = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

getCalificaciones(calificaciones, fnReprobado, fnAprobado, getPromedio);

function getCalificaciones(calificaciones, fnReprobado, fnAprobado, getPromedio) {
    for (let i = 0; i < calificaciones.length; i++) {
        let promedio = getPromedio(calificaciones[i])
        if (promedio >= 6) {
            fnAprobado(i + 1, promedio);
        } else {
            fnReprobado(i + 1, promedio);
        }

    }
    console.log("Proceso terminado")
}