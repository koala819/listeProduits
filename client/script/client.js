function populateTableList() {
  fetch(`http://127.0.0.1:8000/box`)
    .then(res => res.json())
    .then(res => {
      let html = '';
      res.map((p) => {
        console.log(p);
        html += '<tr class="text-center">' +
          '<td class="inline-block align-middle"><img src=' + p.picture + ' ></td>' +
          '<td class="w-1/4">' + p.name + '</td>' +
          '<td class="w-1/4">' + p.price + '€</td>' +
          '<td class="w-1/4"><button class="btn btn-info">View</button></td>' +
          '</tr>';
      })
      return (html);
    })
    .then(pouet => {
      document.getElementById('productList').innerHTML = pouet;
    })
}