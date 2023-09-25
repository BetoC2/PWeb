function delay(ms) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), ms);
    });
}
async function holas() {
    for (let i = 1; i <= 10; i++) {
        await delay(1000);
        console.log("Hola " + i);
    }
    return Promise.resolve();
}
async function mundos() {
    for (let i = 1; i <= 5; i++) {
        await delay(2000);
        console.log("Mundo " + i);
    }
    return Promise.resolve();
}

Promise.all([holas(), mundos()]).then(() => console.log("FIN"));

