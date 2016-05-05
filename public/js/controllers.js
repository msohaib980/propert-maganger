'use strict';

var app = angular.module('propertyApp');

app.controller('homeCtrl', function ($scope, clientsBio) {


function getData () {
  clientsBio.getAll()
  .then(function(res) {
    $scope.clientsdata = res.data;
    // console.log('$scope.clientsdata:', $scope.clientsdata);
  }, function(err) {
    console.error('err:', err);
  });
}

// get data
    getData()

      $scope.addClient = function(input) {
          clientsBio.create(input);
          getData()
      }

      $scope.delteClient = function (client) {
        clientsBio.remove(client);
        console.log(client._id);
        getData()
      }

    //  editing
    $scope.edit = client => {
  $scope.editclient = angular.copy(client);
  console.log($scope.editclient);
};



})
