app.controller('productsController', ['$scope', 'productFactory', function($scope, productFactory) {
    $scope.products = [];
    updateProducts();

    function updateProducts() {
        productFactory.getProducts(function(data) {
            $scope.products = data;
        });
    }

    $scope.addProduct = function() {
        productFactory.create($scope.newProduct, function() {
            $scope.newProduct = {};
            updateProducts();
        });
    }
    $scope.removeProduct = function(index) {
        productFactory.destroy(index, function() {
            updateProducts();
        });
    }
}])
