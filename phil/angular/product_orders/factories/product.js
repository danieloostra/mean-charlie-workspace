var app = angular.module('app', []);
app.factory('productFactory', function() {
    var products = [
        {name:'Keyboard', price: 149.99, quantity: 50},
        {name:'Mouse', price: 59.99, quantity: 50},
        {name:'Basketball', price: 21.99, quantity: 50}
    ];
    var factory = {};

    factory.getProducts = function(callback) {
        callback(products);
    }
    factory.create = function(prod, callback) {
        prod.quantity = 10;
        products.push(prod);
        callback();
    }
    factory.destroy = function(i, callback) {
        products.splice(i, 1);
        callback();
    }
    factory.decrement = function(i, callback) {
        products[i].quantity--;
        callback();
    }

    return factory;
})
