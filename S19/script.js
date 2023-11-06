function hola(value){
    for (let i = 1; i <= 5; i++) {
        let id = "div_" + i;
        element = document.getElementById(id);
        element.innerText = value == 0 ? (i%2 == 0 ? "Pares activos": "Disabled"): (i%2 != 0? "Impares activos": "Disabled") 
    }
}