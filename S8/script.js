/*
function fun_1(variable_1 = 5) {
    return variable_1 + 3;
}

let resultado = fun_1(100);
console.log("resultado: ", resultado)

let var_mensaje2 = function showMessage_2(message) {
    console.log(message);
}

var_mensaje2('Hola pitaya')
*/

let names_array = [
    ["juan", 0],
    ["pedro", 1]
]
console.log(de_chill_function(names_array, 1))

function de_chill_function(array_squared, n) {
    /*
    if (n >= array_squared.lenght || n < 0) {
        return "Mal index, todo wey";
    }
    return array_squared[n][0] + array_squared[n][1];
    */
    return (n < 0 || n <= array_squared.lenght) ? "Mal index, todo wey" : array_squared[n][0] + array_squared[n][1]
}

function createNewUser(id, user_name, storeData) {
    if (id > 0 && id < 100) {
        storeData(id, user_name);
    } else {
        console.log("ID incorrecto");
    }
}

function store(id, name) {
    console.log("Guardado: \nID:", id, "\nUsuario: ", name);
}

createNewUser(25, "Alb", store);
createNewUser(1001, "Alb 2", store);
createNewUser(10, "ALv 3", function (id, name) {
    console.log("Guardado: \nID:", id, "\nUsuario: ", name);
})
