var app = angular.module("myApp", ["ngRoute"]); //include ngRoute to get access to the routes

//Define routes
app.config(function($routeProvider){
   $routeProvider
      .when("/users", {
         templateUrl: "customizeUsers.html" //route to customize users
      })
      .when("/list", {
         templateUrl: "userList.html" //route to userList
      })
      .otherwise({
         redirectTo: "/users" //route to users
      });
})

app.factory("userFactory",[function(){
   var factory = {}; //initializes the factory

   //Initialize our list of users
   var users = [ 
      {firstName: "Yukihiro", lastName: "Matsumoto", language: "Ruby"},
      {firstName: "Ryan", lastName: "Dahl", language: "Javascript"},
      {firstName: "Brendan", lastName: "Eich", language: "Javascript"}
   ];


   //Pass the user list to a controller
   factory.index = function(callback){
      callback(users); 
   }

   //Add new user to the list
   factory.create = function(user){
      users.push(user);
   }
   //Remove the user from the list
   factory.delete = function($index){
      users.splice($index, 1);
   }
   return factory;
}])

//Inject userFactory into each controller
app.controller("CustomizeUsersController", ['$scope', 'userFactory', function($scope, userFactory){
   function setUsers(data){
      $scope.users = data; //initialize users
      $scope.newUser = {}; //initialize newUser
   }

   $scope.users = [];

   //When this controller is loaded, fetch the user list
   userFactory.index(setUsers);

   //Pass new user info to the factory
   $scope.create = function(){
      userFactory.create($scope.newUser)
      $scope.newUser = {}; //Reset our form
   }

   //Delegate deleting user to the factory
   $scope.delete = function($index){
      userFactory.delete($index);
   }
}])

//Inject userFactory into each controller
app.controller("UserListsController",['$scope', 'userFactory', function($scope, userFactory){
   function setUsers(data){
      $scope.users = data;
   }

   $scope.users = [];

   //When this controller is loaded, fetch the user list
   userFactory.index(setUsers);
}])