app.controller('ordersController', ['$scope', 'productFactory', function($scope, productFactory) {
    $scope.products = [];
    updateProducts();

    function updateProducts() {
        productFactory.getProducts(function(data) {
            $scope.products = data;
        });
    }

    $scope.buyProduct = function(index) {
        productFactory.decrement(index, function() {
            updateProducts();
        });
    }
}])
