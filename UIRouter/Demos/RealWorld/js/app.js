(function ( angular ) {

  var mod = angular.module( 'uiRouterMod',
    ['ui.router', 'uiRouterControllers'] );

  mod.config( function ( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/customers' );

    $stateProvider.state( 'customers', {
      url         : '/customers',
      templateUrl : 'partials/customers-tpl.html',
      controller  : 'CustomerListCtrl'
    } )
      .state( 'customers.detail', {
        url         : '/:customerID',
        templateUrl : 'partials/customers-detail-tpl.html',
        controller  : 'CustomerDetailCtrl'
      } );
  } )
})( angular );
