const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Todo el show de express
const app = express();
const port = 3000;

app.use(express.json())
app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
app.use("/api/users", (req, res, next) => {
    if (req.get("Content-Type") === "application/json")
        next();
    else {
        res.sendStatus(401);
        console.log("Not a json")
    }
});
app.post("/api/users", (req, res) => {
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
        const userSchema = mongoose.Schema({
            nombre: {
                type: String,
                required: true
            },
            correo: {
                type: String,
                required: true
            },
            pass: {
                type: String,
                required: true
            },
            edad: {
                type: Number,
                min: 0,
                max: 120,
                required: true
            },
            sexo: {
                type: String,
                emun: ["H", "M"],
                required: true
            }
        })
        let User = mongoose.model("users", userSchema);
        const userData = req.body;
        const newUser = User(userData);
        newUser.save().then((doc) => console.log(("User has been created: " + doc)))
    });
});

app.listen(port, () => {
    console.log("Application running on port " + port);
});