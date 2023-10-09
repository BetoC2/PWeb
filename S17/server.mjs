import cors from "cors";
import express from 'express';
import chalk from 'chalk';
import  * as fs from 'node:fs';
import asciiCats from "ascii-cats";

const app = express();
const port = 3000;

app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use((req, res, next) => {
    console.log(chalk.gray(asciiCats()));
    next();
})
app.get('/',(req,res) => { //get paratemotros: la ruta, y lo que hará cuando entre a esa ruta
    res.send('Raiz del sitio');
    console.log(chalk.blue("Entró a la raiz"));
});

app.get('/home',(req,res) => { //get paratemotros: la ruta, y lo que hará cuando entre a esa ruta
    res.send('Home del sitio');
    console.log(chalk.green("Entró a la raiz"));
});

app.use("/users", (req, res, next) => {
    console.log(chalk.blue("Método:"), chalk.green(req.method));
    console.log(chalk.blue("URL:"), chalk.green(req.originalUrl));
    console.log(chalk.blue("Fecha:"), chalk.green(new Date(Date.now()).toString()));
    console.log(chalk.blue("Content-Type:"), chalk.green(req.get("Content-type")));
    if (req.get("x-auth"))
        next();
    else {
        res.sendStatus(401);
        console.log(chalk.red("No autorizo"));
    }
})
app.get('/users',(req,res) => { //get paratemotros: la ruta, y lo que hará cuando entre a esa ruta
    console.log(chalk.yellow("Consultando..."));
    fs.readFile('./files/users.json', 'utf8',(error,data) => {
        if(error){
            console.log(error);
        }
        let newJSON = JSON.parse(data);
        console.table(newJSON);
        res.send(JSON.parse(data));
    });
    console.log(chalk.green("Usuarios encontrados!"));
});

app.listen(port, () => {
    console.log("Aplicación de ejemplo corriendo en puerto " + port);
});