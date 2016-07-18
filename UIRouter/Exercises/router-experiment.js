(function(angular) {
  var mod = angular.module( 'routerExperiment', ['ui.router'] );

  mod.config(function($stateProvider) {
    $stateProvider.state('initial', {
      url: '/greeting',
      template : 'Hello!'
    })
      .state('departure', {
        url: '/departure',
        template: 'Good-bye!'
      })
  });

  mod.controller( 'MainCtrl', function ( $scope, $log ) {
    $log.log( 'MainCtrl running.' );
  } );

})(angular);