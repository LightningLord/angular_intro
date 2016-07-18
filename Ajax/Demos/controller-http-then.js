// Global for demonstration purposes
var p = null;

(function ( angular ) {

  var cityApp = angular.module( 'citiesApp', [] );

  cityApp.controller( 'CityListCtrl', ['$scope', '$http', '$log',
    function ( $scope, $http, $log ) {
      p = $http( {
        url    : '/data/cities.json',
        //url : '/data/no-cities.json',
        method : 'get'
      } );

      p.then( function ( retObj ) {
          $log.log( 'Success fired!' );
          $log.log( 'Status: ' + retObj.status );
          $log.log( 'Data: ', retObj.data );
          $scope.cities = retObj.data;
          $log.log( 'Return object: ', retObj );
        },
        function ( retObj ) {
          $log.error( 'Error fired!' );
          $log.log( 'Status: ' + retObj.status );  // Only appears with an actual
                                                   // error
          $log.log( 'Data: ', retObj.data ); // Response content
        } );

      p.catch( function ( obj ) {
        $log.log( 'The request failed for some reason' );
        $log.error( 'Failed: ', obj );
      } );

      p.finally( function ( obj ) {
        $log.log( 'This runs whether we are successful or the promise fails.' );
        $log.log( 'Obj passed to this function: ', obj );

      } );

    }] );
})( angular );
