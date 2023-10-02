import * as fs from "node:fs"

let fileReaderCb = (error, data) => {
    if(error)
        console.log(error);
    console.table(JSON.parse(data));
}

let getAverage = (error, data) => {
    if(error)
        console.log(error);
    let json = JSON.parse(data)
    let sum = json.reduce(function (acc, obj) { return acc + obj.edad; }, 0)
    console.log("Promedio edades:", sum/json.length)
}

let getLongest = (error, data) => {
    if(error)
        console.log(error);
    let json = JSON.parse(data);
    json.sort((a, b) => {
        return a.length > b.length ? 1 : -1
    })    
    console.table(json[0])
}

let deleteUser = (id => {
    let getUsers = (error, data) => {
        if (error)
            console.log(error);
        let users = JSON.parse(data)
        let index = users.findIndex(a => a.id == id);
        if (index > 0) {
            users.splice(index, 1);
            fs.writeFile("./files/db.json", JSON.stringify(users), (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log("Archivo actualizado")
                }
            })
        }
        else {
            console.log("No existe ese usuario")
        }
    }
    fs.readFile("./files/db.json", "utf-8", getUsers);

})

//fs.readFile("./files/db.json", "utf-8", fileReaderCb);
//fs.readFile("./files/db.json", "utf-8", getAverage);
//fs.readFile("./files/db.json", "utf-8", getLongest);
deleteUser(0)