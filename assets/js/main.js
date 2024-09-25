var productForm = document.querySelector('.product-form');

var productName = document.querySelector('#product-name');
var description = document.querySelector('#decription');
var price = document.querySelector('#price');

var productList = [];
productForm.onsubmit = function (e) {
    e.preventDefault();
    var product = {
        name: productName.value,
        description: description.value,
        price: price.value
    }
    productList.push(product);
    printProduct();
}

function printProduct(product) {
    var data = '';
    for (var i = 0; i < productList.length; i++) {
        data += `<tr>
                    <td>${productList[i].name}</td>
                    <td>${productList[i].description}</td>
                    <td>${productList[i].price}</td>
                </tr>`
    }
    document.querySelector('.products-table tbody').innerHTML = data;
}