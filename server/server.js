const express = require('express')
const mysql = require('mysql');
let box = '';

const app = express();
app.use(express.static('./client'));
app.listen(8000, () => {
    console.log("welcome good start !");
});

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "liste-de-produits"
});

db.connect(function (err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
    db.query("SELECT * FROM product", (err, result, fields) => {
        if (err) throw err;
        box = JSON.stringify(result);
    });
    console.log(box);
});

app.get("/box", (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.set('Content-Type', 'application/json');
    response.send(box);

})