const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Todo el show de mongodb
const mongoConnection = "mongodb+srv://admin:admin@myapp.mfg5ynr.mongodb.net";
const db = mongoose.connection;

db.on("connecting", () => {
    console.log("Conectando...");
    console.log(mongoose.connection.readyState);
});

db.on("connected", () => {
    console.log("Conectado exitosamente!");
    console.log(mongoose.connection.readyState);
});

mongoose.connect(mongoConnection, { useNewUrlParser: true }).then(() => {
});

const userSchema = mongoose.Schema({
    Nombre: {
        type: String,
        required: true
    },
    Correo: {
        type: String,
        required: true
    },
    Pass: {
        type: String,
        required: true
    },
    Edad: {
        type: Number,
        min: 0,
        max: 120,
        required: true
    },
    Sexo: {
        type: String,
        emun: ["H", "M"],
        required: true
    }
})
const User = mongoose.model("users", userSchema);

// Todo el show de express
const app = express();
const port = 3000;

app.use(express.json())
app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
app.post("/api/users", (req, res) => {
});

app.listen(port, () => {
    console.log("Application running on port " + port);
});
app.get("/api/users", (req, res) => {
    const name =  req.query.name;
    User.find({
        Nombre: {$regex: name},
    }).then((docs) => {
        res.send(docs);
        console.log(docs);
    }).catch(err => console.log(err));
});
app.put("/api/users", (req, res) => {
    console.log("Actualizando informacion");
    let id = req.body.id,
        nombre = req.body.Nombre,
        correo = req.body.Correo,
        edad = req.body.Edad,
        object_to_update = {},
        flag = false;

    if (nombre != undefined){
        object_to_update.Nombre = nombre;
        flag = true;
    }

    if (correo != undefined){
        object_to_update.Correo = correo;
        flag = true;
    }

    if (edad != undefined){
        object_to_update.Edad = edad;
        flag = true;
    }

    console.log(id);

    if (flag) {
        User.findByIdAndUpdate(id, object_to_update, {new: true}).then(doc => {
            console.log("Usuario actualizado");
            console.log(doc);
            res.send(doc);
        }).catch(err => console.log(err))
    } else {
        res.send("No se ha actualizado");
    }
});
app.delete("/api/users", (req, res) => {
    console.log("Eliminando registro...");
    const id = req.body.id;

    User.findByIdAndDelete(id).then(doc => {
        console.log("Usuario eliminado");
        console.log(doc);
        res.send(doc);
    }).catch(err => console.log(err))
});