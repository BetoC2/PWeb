import express from "express";
import chalk from "chalk";
import * as fs from "node:fs"

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Root de la página");
    console.log(chalk.blue("Entró a raiz"));
})

app.get("/home/", (req, res) => {
    res.send("Home de la página");
    console.log(chalk.green("Entró a home"));
})

app.get("/users", (req, res) => {
    console.log(chalk.yellow("Consultando usuarios..."))
    fs.readFile("./users/db.json", (error, data) => {
        if (error)
            console.log(error);
        console.table(JSON.parse(data));
        console.log(chalk.green("Usuarios encontrados!"))
        res.send("Usuarios encontrados en consola!")

    })
})

app.listen(port, () => {
    console.log("Aplicación de ejemplo corriendo en puerto", port)
});