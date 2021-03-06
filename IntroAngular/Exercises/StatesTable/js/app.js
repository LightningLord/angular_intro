(function ( angular ) {
  /*
   * Create a module called statesApp
   * It will have no dependencies
   * Add a controller to it called StateCtrl which depends on $scope and $http.
   * Use the minification-proof style of declaring a controller
   *
   * Use $http to download /data/states.json
   * Make it available to the view by publishing/copying it to $scope.states
   */

   var statesApp = angular.module('statesApp', []);

   statesApp.controller('StateCtrl', ['$scope', '$http',
    function($scope, $http) {
      $http({
        url : '/data/states.json',
        method: 'get'
      }).then(function(response){
        $scope.states = response.data;
        console.log(response)
      })
      $scope.orderBy = function(column){
        if ($scope.orderField == column){
          $scope.orderField = '-' + column
        } else {
          $scope.orderField = column;
        }
      }
      $scope.getClass = function(column){
        if ($scope.filterState){
          var keys = Object.keys($scope.filterState)
          console.log(keys.indexOf(column))
          console.log(column)
          if (keys.indexOf(column) > -1){
            console.log('returning highlight')
            return 'highlight'
          }

        }
      }
    }
    ])

})( angular );
