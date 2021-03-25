const loader = document.querySelector('.loader');

function populateTableList() {
  fetch(`http://127.0.0.1:8000/box`)
    .then(res => res.json())
    .then(res => {
      loader.classList.remove('hidden');
      return (res)
    })
    .then(res => {
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

      document.getElementById('productList').innerHTML = pouet;
      loader.className += ' hidden';
    })
}