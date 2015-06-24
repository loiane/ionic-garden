angular.module('starter.state.single', ['starter.state.single.controller'])

.config(function($stateProvider) {
  $stateProvider.state('app.single', {
    url: '/single/:singleId',
    views: {
      'menuContent': {
        templateUrl: 'js/states/single/template.html',
        controller: 'SingleCtrl'
      }
    }
  });
});
