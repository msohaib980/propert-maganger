
'use strict';

var app = angular.module('propertyApp');

app.service('clientsBio', function ($http) {

    this.getAll = function () {
      return $http.get('/api/clients');
    }

    this.create = (newClient,cb) => {
            $http.post('/api/clients', newClient).then(res => {
                console.log("success");
                // cb();
            }, err => {
                if (err) {
                    console.log(err);
                }
            });
        };

      //  Delete function

    this.remove = (deleteclient) => {
      $http.delete(`/api/clients/${deleteclient._id}`)
      // $http.delete('/api/clients')
    }

 });
