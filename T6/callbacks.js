var holaFlag = false;
var mundoFlag = false;

function holas(iter) {
    if (iter == 10) {
        setTimeout(() => {
            console.log("Hola " + iter);
            holaFlag = true;
        }, 1000)
    } else {
        setTimeout(() => { console.log("Hola " + iter); holas(iter + 1) }, 1000)
    }
}

function mundos(iter) {
    if (iter == 5) {
        setTimeout(() => {
            console.log("Mundo " + iter);
            mundoFlag = true;
        }, 2000)
    } else {
        setTimeout(() => { console.log("Mundo " + iter); mundos(iter + 1) }, 2000)
    }
}

function termino() {
    if (holaFlag && mundoFlag) {
        console.log("FIN")
    } else {
        setTimeout(termino, 100)
    }
}

holas(1);
mundos(1);
termino();

