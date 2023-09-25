function holas(iter) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Hola " + iter);
            resolve(iter + 1);
        }, 1000)
    });
}

function mundos(iter) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Mundo " + iter);
            resolve(iter + 1)
        }, 2000)
    })
}

function fin() {
    console.log("FIN");
}

let saludar = holas(1)
    .then(result => holas(result))
    .then(result => holas(result))
    .then(result => holas(result))
    .then(result => holas(result))
    .then(result => holas(result))
    .then(result => holas(result))
    .then(result => holas(result))
    .then(result => holas(result))
    .then(result => holas(result))
    .then(() => Promise.resolve())

let mundar = mundos(1)
    .then(result => mundos(result))
    .then(result => mundos(result))
    .then(result => mundos(result))
    .then(result => mundos(result))
    .then(() => Promise.resolve())

Promise.all([saludar, mundar])
    .then(() => fin())


