let url = 'https://jsonplaceholder.typicode.com/users';

function guardarEnJSON(url, id) {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    xhr.setRequestHeader("Content-Type", "Application/json");

    xhr.send()

    xhr.onload = () => {
        if (xhr.status != 200) {
            alert(xhr.status + ": " + xhr.statusText);
        } else {
            console.log("Guardado exitosamente");
        }
        let obj = JSON.parse(xhr.responseText)
        console.table(obj)

        let flag = false
        if (id != -1) {
            obj.forEach(element => {
                if (element.id == id) {
                    flag = true;
                    document.getElementById("ID_DIV").innerHTML = element.username + " " + element.email;
                }
            });
            if (!flag) {
                alert("No existe un usuario con el ID: " + id)
            }
        }
    }

}

guardarEnJSON(url, 3);
