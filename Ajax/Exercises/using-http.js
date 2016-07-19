(function ( angular ) {

  var teamApp = angular.module( 'teamApp', [] );

  // Build the controller to prevent problems with minification
  // And make sure to include both $scope, $log, and $http

  // Create a call to $http that grabs the URL ../../data/baseball-standings.json
  // via the get method. If it succeeds, assign the data to $scope.teams.
  // If it fails, print an error to the $log
  teamApp.controller('TeamCtrl', ['$scope', '$log', '$http', '$cacheFactory',
    function ($scope, $log, $http, $cacheFactory){
      var customCache = $cacheFactory.get('teamApp')
    if (!customCache){
      customCache = $cacheFactory('teamApp')
    }
    $scope.clearCache = function(){
      customCache.removeAll()
    }
    $scope.getTeams = function(){
      $http({
        url: '../../data/baseball-standings.json',
        method: 'get',
        cache: customCache
      }).then(function(response){
        $scope.teams = response.data
      })

    }
    }
    ])
})( angular );
