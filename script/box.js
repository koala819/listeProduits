const http = require('http');
const host = 'localhost';
const port = 8000;
let box = '';

const mysql = require('mysql');
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





const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/box":
            res.writeHead(200);
            res.end(box);
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({
                error: "Resource not found"
            }));
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});