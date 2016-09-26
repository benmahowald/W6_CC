console.log('client.js src');

var myApp = angular.module("myApp", []);

// initialize controller to work with html
myApp.controller('heroController', ['$scope', '$http', function ($scope, $http) {
  console.log('using ng');
  $scope.getHeroes = function () {
    console.log('in getHeroes function');
  var newHero = {
    alias: $scope.name,
    first_name: $scope.first_name,
    last_name: $scope.last_name,
    city: $scope.city,
    power_name: $scope.power_name
  }; // end newHero

// set up http call to retrieve heroes in database
$http({
  method: 'GET',
  url: '/heroes'
}).then( function (err, response){
    if (err) {
      console.log("http err:", err);
    } else {
      console.log('http success:', response);
      var data = response.data;
      console.log(data);
    } // end else
}); // end $http
}; // end getHeroes function
}]); // end controller
