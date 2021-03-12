const http = require('http');
const {
    Sequelize
} = require('sequelize');

const sequelize = new Sequelize("liste-de-produits", "root", "", {
    dialect: "mysql",
    host: "localhost"
});

try {
    sequelize.authenticate();
    console.log('Connecté à la base de données MySQL!');
    sequelize.query("SELECT id as 'id', picture as 'picture', name as 'name', price as 'price' FROM product").then(([results, metadata]) => {
        console.log(results);
    })
} catch (error) {
    console.error('Impossible de se connecter, erreur suivante :', error);
}

function Product(pic, name, price) {
    this.pic = pic;
    this.name = name;
    this.price = price;
}

const products = [];
const box01 = new Product("img/01.jpg", 'nx 310', 70);
const box02 = new Product('img/02.jpg', 'p5', 58);
const box03 = new Product('img/03.jpg', 'nsk4100', 60);
const box04 = new Product('img/04.jpg', 'vsk3000', 44.99);
const box05 = new Product('img/05.jpg', 'elite5100', 85);
const box06 = new Product('img/06.jpg', 'razor857', 44.99);
products.push(box01, box02, box03, box04, box05, box06);



const serveur = http.createServer(
    (request, response) => {
        response.end("hello World");
        //response.end(JSON.stringify(products))

    }
);
serveur.listen(3000);