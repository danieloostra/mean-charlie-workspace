var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/userList.html',
            controller: 'UserListsController'
        })
        .when('/admin', {
            templateUrl: 'partials/customizeUsers.html',
            controller: 'CustomizeUsersController'
        })
        .otherwise({redirectTo: '/'});
});
