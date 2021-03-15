const http = require('http');
const url = require('url')
const mysql = require('mysql');
let box = '';

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

const monServeur = function (requete, reponse) {
    const page = url.parse(requete.url).pathname;
    reponse.setHeader("Access-Control-Allow-Origin", "*");
    switch (page) {

        case '/box':
            reponse.writeHead(200, {
                "Content-Type": "application/json"
            });
            reponse.end(box);

            break;
        default:
            reponse.writeHead(200, {
                "Content-Type": "text/html; charset=UTF-8"
            });
            reponse.end("<h1>Wrong way !!!</h1>");
    }
}

const serveur = http.createServer(monServeur);

serveur.listen(8888);


/* 
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
}); */