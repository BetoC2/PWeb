//alert("Hola pitaya")
/*
let x = 5;
let y = 10;

const z = x + y;
console.log(`Z value: ${z}`)

let number_1 = 3;
let number_2 = 3.14159;
let string_1 = "Cadena 1";
let string_2 = "Cadena 2";
console.log(number_1 + number_2);
console.log(string_1 + string_2);
console.log(number_1 - number_2);
console.log(number_1 * 2.5);
console.log(2**3);
console.log(number_2++);
console.log(++number_2);
console.log(number_2--)
*/
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(avg(array))

function avg(array){
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum/array.length
}