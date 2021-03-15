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

function populateTableList() {

  var request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      var response = JSON.parse(this.responseText);
      console.log(response.current_condition.condition);
    }
  };
  request.open("GET", "http://127.0.0.1:8080/box");
  request.setRequestHeader("Access-Control-Allow-Origin", "http://127.0.0.1:8000");
  request.send();

  let listOfProducts = '';
  products.forEach(prod =>
    listOfProducts += `
      <tr class="text-center">
        <td class="inline-block align-middle"><img src=${prod.pic} ></td>
        <td class="w-1/4">${prod.name}</td>
        <td class="w-1/4">${prod.price}€</td>
        <td class="w-1/4"><button class="btn btn-info">View</button></td>
      </tr>
      `
  )

  document.getElementById('productList').innerHTML = listOfProducts;
}