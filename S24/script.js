/*
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const cont1 = document.getElementById("contador");
const cont2 = document.getElementById("contador2");


b1.addEventListener("click", () => {
    cont1.innerText = Math.floor(cont1.innerText) + 1;
    cont2.innerText = Math.floor(cont2.innerText) + 1;
})

b2.addEventListener("click", () => {
    cont1.innerText = Math.floor(cont1.innerText) - 1;
    cont2.innerText = Math.floor(cont2.innerText) + 1;
})
*/
const input = document.getElementById("input");
const enviar = document.getElementById("enviar");

let funcion = () => {
    input.value = "";
    alert("Enviado");
}

enviar.addEventListener("click", funcion);
input.addEventListener("keypress", () => {
    if (event.key == "Enter")
        enviar.click()
})