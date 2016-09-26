console.log('client.js src');

var myApp = angular.module("myApp", []);

// initialize controller to work with html
myApp.controller('heroController', ['$scope', '$http', function ($scope, $http) {
  console.log('using heroController');

  // set up http call to retrieve heroes in database
  $scope.getHeroes = function () {
  $http({
    method: 'GET',
    url: '/heroes'
  }).then( function (response){
        console.log('http success:', response);
        $scope.heroes = response.data;
      }, function (error) {
        console.log('error ;', error);
      }); // end then function
}; // end getHeroes function

  $scope.addHero = function () {
    console.log('in getHeroes function');

  var newHero = {
    alias: $scope.alias,
    first_name: $scope.first_name,
    last_name: $scope.last_name,
    city: $scope.city,
    power_name: $scope.power_name
  }; // end newHero

// set up http call to add heroes in database
$http({
  method: 'POST',
  url: '/heroes',
  data: newHero
}).then( function (response){
      console.log('http post success:', response);
      $scope.getHeroes();
      $scope.clearFields();
    }, function (error) {
      console.log('error in post;', error);
    }); // end then function
}; // end getHeroes function

  $scope.clearFields = function(){
    $scope.alias = '';
    $scope.first_name = '';
    $scope.last_name = '';
    $scope.city = '';
    $scope.power_name = '';
  }; // end clear fields

  $scope.deleteHero = function () {
    console.log('in delete function');
    $http({
      method: 'DELETE',
      url: '/heroes',
    }).then( function (response){
          console.log('http post success:', response);
        }, function (error) {
          console.log('error in post;', error);
        }); // end then function
  }; // end delete function
}]); // end controller
