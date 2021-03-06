angular
  .module('ionicGarden.state.browse', [])
  .config(configBrowse);

/**
 * Define Browse Route
 */
function configBrowse($stateProvider) {
  $stateProvider
    .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'states/browse/template.html'
        }
      }
    });
}
