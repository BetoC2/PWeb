const mongoose = require("mongoose");

const mongoConnection = "mongodb+srv://admin:admin@myapp.mfg5ynr.mongodb.net/MyApp";
const db = mongoose.connection;

db.on("connecting", () => {
    console.log("Conectando...");
    console.log(mongoose.connection.readyState);
});

db.on("connected", () => {
    console.log("Conectado exitosamente!");
    console.log(mongoose.connection.readyState);
});

mongoose.connect(mongoConnection, {useNewUrlParser: true});
