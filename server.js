const express = require('express');
const mongoose = require('mongoose');
const Dog = require('/WebPage/js/uploadDog.js');


const app = express();
const port = 3000;

app.use(express.json());

let mongoConnection = "mongodb+srv://arlynmedina:admin@myapp.e5mj3za.mongodb.net/"
let db = mongoose.connection;

mongoose.connect(mongoConnection,{useNewUrlParser:true});


db.on("connecting",()=>{
    console.log("Conectando...");
    console.log(mongoose.connection.readyState);
});
db.on("connected",()=>{
    console.log("Conectado exitosamente");
    console.log(mongoose.connection.readyState);
});

mongoose.connect(mongoConnection,{useNewUrlParser:true});

app.listen(port, () => {
    console.log(`Server on port: ${port}`);
});