function getInfo(elemento, atributo) {
    console.log("ID:", elemento.id);
    console.log(elemento.atributes);
    console.log("Existe", atributo + "?");

}
function setInfo() { }

function doStuff() {
    const elemento = document.getElementById("lista");
    const parrafo1 = document.createElement("p");
    const parrafo2 = document.createElement("p");
    parrafo1.innerHTML = "Párrafo 1";
    parrafo2.innerHTML = "Párrafo 2";
    elemento.before(parrafo1);
    elemento.after(parrafo2);

    const l1 = document.createElement("li");
    const l2 = document.createElement("li");
    const l3 = document.createElement("li");

    l1.innerText = "1";
    l2.innerText = "2";
    l3.innerText = "3";

    elemento.prepend(l1);
    l1.nextElementSibling.after(l2)
    elemento.append(l3);

    const html_to_insert = "<mark>Importante</mark>";
    elemento.insertAdjacentHTML("afterbegin", ehtml_to_insert)
}

doStuff();