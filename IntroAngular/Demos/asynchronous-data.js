(function ( angular ) {
  var cityApp = angular.module( 'citiesApp', [] );

  cityApp.controller( 'CityListCtrl', ['$scope', '$http', '$log',
    function ( $scope, $http, $log ) {
      $http( {
        url    : '/data/cities.json',
        method : 'get'
      } )
        .then( function ( retObj ) {
          $scope.cities = retObj.data;
        } )
        .error( function ( err ) {
          $log.error( 'Error data: ', err.data );
          $log.log( 'Error status: ', err.status );
        } );

    }] );

})( angular );
