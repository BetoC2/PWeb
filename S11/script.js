/*
console.log("uno");
setTimeout(function timeout() {
    console.log("A");
}, 7000);
setTimeout(function timeout() {
    console.log("B");
}, 0);
setTimeout(function timeout() {
    console.log("C");
}, 2000);
setTimeout(function timeout() {
    console.log("D");
}, 1000);
console.log("end")
*/
// Ejercicio 1
for (let i = 0; i < 5; i++){
    setTimeout(() => console.log("Hola"), 1000 * i);
}
for (let i = 0; i < 4; i++){
    setTimeout(() => console.log("Mundo"), 1000 * i);
}
// Ejemplo de promesa 
let promesa1 = new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
        console.log("Procesando la promesa");
        resolve("Correcto!");
    } else {
        reject(new Error("Algo falló"));
    }
});

promesa1.then((result) => console.log(result), (error) => console.log(error));
// 
function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src; 
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error("Script load error: " + src));
        document.head.append(script);
    });
}

// let promesa2 = loadScript("https://www.googletagmanager.com/gtag/js?id=UA-XXXXX-Y")
let promesa2 = loadScript("https://www.googletagmanager/gtag/js?id=UA-XXXXX-Y")
promesa2.then (
    script => alert(script.src + "cargada!"),
    error => alert("Error:" + error.message)
);
promesa2.then(script => alert("Algo extra por hacer"))