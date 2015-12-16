'use strict';


angular.module('ScoutIOApp')
.controller('MainController', MainController);



function MainController($http, $scope, $state, socket, Search){
  this.$http = $http;
  this.$state = $state;

/*Triggers SearchFactory method sets response to ... redirects to results
@param {string} query [comma deliniated word string]*/
  this.getByTagOnly = function(query){
    console.log(query);
    Search.getByTagOnly(query)
    .then(function(response){
      console.log(response);
      this.$state.go('results');
      //assign results to an object that is used by resultsController...
      // results.photos = results
    })
  }
}


// below here was the existing MainController from the generator
// (function() {

// class MainController {

//   constructor($http, $scope, socket) {
//     this.$http = $http;
//     this.awesomeThings = [];


    // $http.get('/api/things').then(response => {
    //   this.awesomeThings = response.data;
    //   socket.syncUpdates('thing', this.awesomeThings);
    // });

    // $scope.$on('$destroy', function() {
    //   socket.unsyncUpdates('thing');
    // });
  // }

  // addThing() {
  //   if (this.newThing) {
  //     this.$http.post('/api/things', { name: this.newThing });
  //     this.newThing = '';
  //   }
  // }

  // deleteThing(thing) {
  //   this.$http.delete('/api/things/' + thing._id);
  // }
// }

// angular.module('ScoutIOApp')
//   .controller('MainController', MainController);

// })();
