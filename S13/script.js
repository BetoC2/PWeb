let url = "https://api.npoint.io/ea51c8070abffe175064";
let datos = {var_1: "Hola", var_2: "Mundo"};

function guardarEnJSON(datos, urlJSON) {

    let xhr = new XMLHttpRequest();

    xhr.open("POST", urlJSON);

    xhr.setRequestHeader("Content-Type", "Application/json");

    xhr.send([JSON.stringify(datos)])

    xhr.onload = () => {
        if (xhr.status != 200) {
            alert(xhr.status + ": " + xhr.statusText);
        } else {
            console.log("Guardado:", xhr.responseText);
        }
    }
}

guardarEnJSON(datos, url);