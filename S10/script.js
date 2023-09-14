/*
let strJSON = '{"nombre":"pepe","nacimiento":"2000-11-30T12:00:00.000Z"}'
let obj2 = JSON.parse(strJSON, function(key, value)){
    if (key == 'nacimiento'){
        return new Date(value);
    }
}*/
function reverse_books(libros){
    let libros_reverse = [];
    let elements = libros.length;
    for (let i = 0; i < elements; i++) {
        libros_reverse.push(libros.pop())
    }
    console.table(libros_reverse)
    return libros_reverse
}

let libros = []; 
for (let i = 0; i < 10; i++){
    let año = Math.floor(Math.random() * 21) + 2000;
    libros.push(
        {
            id: i+1,
            autor: "Autor " + Math.floor(Math.random() * 101),
            año: año,
            fecha: new Date(año+"-01-01T12:00:00.000Z")
        }
    )
}
console.log("Libros")
console.table(libros)
//let libros_json = JSON.stringify(libros)
//console.log(libros_json)

libros2 = libros.slice(0,libros.length + 1)
console.log("libros 2")
console.table(libros2   )

