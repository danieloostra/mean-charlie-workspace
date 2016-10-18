var app = angular.module('myApp', [])
app.factory('productFactory', ['$http', function($http) {
  var factory = {};
  var products = [];
  factory.index = function(callback){
    //callback is the function that is passed to the productIndex by the controller, in this caseP: setProducts.
    callback(products);
  }
  factory.create = function(product, callback){
  	product.quantity = 50;
    if(product.price && Number(parseFloat(product.price))==product.price){
      products.push(product);
      callback(products);
    }
  }
  factory.update = function(product, callback) {
  	product.quantity -= 1;
  	callback(products);
  }
  factory.delete = function(id, callback){
    products.splice(id,1);
    callback(products);
  }
  return factory;
}]);
app.controller('productController', ['$scope','productFactory', function($scope, productFactory) {
  // callback, but not as an anonymous function, rather a named function!
  function setProducts(data){
    $scope.products = data;
    $scope.product = {};
  }
  $scope.product = {};
  $scope.products = {};
  $scope.index = function(){
    productFactory.index(setProducts);
  }
  $scope.index();
  $scope.create = function(){
    productFactory.create($scope.product, setProducts);
  }
  $scope.delete = function(id){
    productFactory.delete(id,setProducts);
  }
}]);
app.controller('orderController', ['$scope', 'productFactory', function($scope, productFactory) {
	function setProducts(data) {
		$scope.products = data;
		$scope.product = {};
	}
	$scope.products = [];
	productFactory.index(setProducts);
	$scope.update = function(id) {
		productFactory.update({
			id: id, quantity: 1}, setProducts);
	}
}]);