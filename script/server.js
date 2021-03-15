//const http = require('http');
function populateTableList() {
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
        db.query("SELECT * FROM product", function (err, result) {
            if (err) throw err;


            //console.log(result);
            for (let i = 0; i < result.length; i++) {
                document.getElementById('productList').innerHTML += '<tr class="text-center"><td class="inline-block align-middle"><img src="' + result[i].picture + '"></td><td class="w-1/4">"' + result[i].name + '"></td><td class="w-1/4">"' + result[i].price + '"€</td><td class="w-1/4"><button class="btn btn-info">View</button></td></tr>';
                console.log(result[i].picture);
                console.log(result[i].name);
                console.log(result[i].price);
            }
            //result.forEach(element => console.log(element));
        });
    });
}


/* function Product(pic, name, price) {
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
serveur.listen(3000); */