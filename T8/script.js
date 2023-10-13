function getProducts(value) {
    let url = "http://localhost:3000/products"
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    if (value == 0)
        xhr.setRequestHeader('query-type', 'getProducts');
    else if (value == 1)
        xhr.setRequestHeader('query-type', 'getMostExpensive');
    else if (value == 2)
        xhr.setRequestHeader('query-type', 'getPriceAvg');

    xhr.send();
    xhr.onload = function () {
        if (xhr.status != 200)
            alert("Invalid query");
        else {
            const doc = document.getElementById("hola");
            const values = JSON.parse(xhr.responseText)
            let text;
            if (value == 0) {
                const headers = `
                <table border="1">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Categoría</th>
                    </tr>
                `
                const content = values.map(item => {
                    return `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.Price}</td>
                        <td>${item.Category}</td>
                    </tr>
                `;
                })
                text = headers + content.join('') + '</table>'
            }
            else if (value == 1) {
                const headers = `
                <table border="1">
                    <tr>
                        <th colspan="2">Most Expensive Product</th>
                    </tr>`;
                let content = "";
                const entries = Object.entries(values);
                for (const [key, value] of entries) {
                    content += `
                    <tr>
                        <td>${key}</td>
                        <td>${value}</td>
                    </tr>
                    `;
                }
                text = headers + content + '</table>';
            }
            else if (value == 2) {
                const avg = values.avgPrice;
                text = `<p><b>Average Price: </b>${avg}</p>`;
            }
            doc.innerHTML = text;
        }
    }
}