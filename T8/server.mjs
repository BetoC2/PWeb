import * as fs from 'node:fs';
import chalk from 'chalk';
import express from 'express';
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

app.use('/products', (req, res, next) => {
    if (req.get("query-type"))
        next();
    else {
        res.sendStatus(401);
        console.log(chalk.red("Query not defined"));
    }
})
app.get('/products', (req, res) => {
    const query = req.get('query-type');
    console.log(chalk.yellow("Searching..."))
    fs.readFile('./products/products.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(chalk.red(err));
            return res.status(500);
        }

        if (query == 'getProducts') {
            const json = JSON.parse(data);
            console.table(json);
            res.send(data);
        }
        else if (query == 'getMostExpensive') {
            const products = JSON.parse(data);
            const product = products.reduce((a, b) => {
                return a.Price > b.Price ? a : b;
            })
            console.log(chalk.blue('Most Expensive Product:'));
            console.table(product);
            res.send(JSON.stringify(product));
        }
        else if (query == 'getPriceAvg') {
            const products = JSON.parse(data);
            let sum = products.reduce((acc, p) => {
                return acc + p.Price;
            }, 0)
            const avg = sum / products.length;
            console.log(chalk.blue("Average price:"), chalk.magenta(avg))
            res.send({ avgPrice: avg })
        }
    })
})

app.listen(port, () => {
    console.log(chalk.magenta("Application running on port " + port));
});