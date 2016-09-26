console.log('client.js src');

var myApp = angular.module("myApp", []);

myApp.controller('heroController', ['$scope', '$http', function ($scope, $http) {
  console.log('using ng');
}]); // end controller
