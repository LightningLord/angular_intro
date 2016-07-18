(function(angular) {
  var mod = angular.module( 'teamApp', [] );
  mod.controller( 'TeamCtrl', function ( $scope, filterFilter  ) {
    $scope.teams = ['Mets', 'Yankees', 'Red Sox', 'Phillies', 'Blue Jays',
      'Braves', 'Orioles', 'Marlins', 'Rays', 'Nationals'];
    $scope.dropped = []
    // Challenge: Restore the dropped teams.
    // You'll need an array to track the dropped teams
    // And you'll need to modify delTeam, below, to "remember" the dropped team(s)


    // Add a function, addTeam to add a new team to $scope.teams. Don't forget to
    // verify that there is a team to add, and that it's not a duplicate!

    $scope.addTeam = function(newTeam){
      var filtered = []
      filtered = filterFilter( $scope.teams, newTeam );
      if (filtered.length === 0){
        $scope.teams.push(angular.copy(newTeam))
      }
    };
    // Add a function, delTeam to delete a team from $scope.teams. As above, check
    // to make sure a team to drop was passed in.
    $scope.removeTeam = function(team){
      console.log('removeTeam' + team )
      index = $scope.teams.indexOf(team)
      if ( index > -1 ){
        console.log('removing: ' + team)
        $scope.teams.splice(index, 1)
        $scope.dropped.push(team)
      }
    }

    $scope.restoreTeams = function(){
      $scope.teams = $scope.teams.concat($scope.dropped)
      $scope.dropped = []
    }
    // Challenge: Restore the dropped teams

  } );
})(angular);