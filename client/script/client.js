const load = '<div class="loader"><img src="img/load.svg"></div>';

function populateTableList() {
  fetch(`http://127.0.0.1:8000/box`)
    .then(res => res.json())
    .then(res => {
      document.getElementById('loader').innerHTML = load;
      return res.map((p) => {
        return '<tr class="text-center">' +
          '<td class="inline-block align-middle"><img src=' + p.picture + ' ></td>' +
          '<td class="w-1/4">' + p.name + '</td>' +
          '<td class="w-1/4">' + p.price + '€</td>' +
          '<td class="w-1/4"><button class="btn btn-info">View</button></td>' +
          '</tr>';
      })
    })
    .then(pouet => {
      setTimeout(() => {
        document.getElementById('productList').innerHTML = pouet;
        document.getElementById('loader').innerHTML = '';
      }, 5000)

    })
}