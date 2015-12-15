'use strict';

angular.module('ScoutIOApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('results', {
        url: '/results',
        templateUrl: 'app/results/results.html',
        controller: 'ResultsController',
        controllerAs: 'results'
      })
      .state('results.detail', {
      	url: '/results/:dialog',
      	templateUrl: 'app/results/photos/photo.detail.html'
      });
  });
