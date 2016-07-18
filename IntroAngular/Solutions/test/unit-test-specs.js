/*
 * Build a set of unit tests for the controller you completed in the last
 * exercise. The structure should look something like this:
 *
 * describe // Top-level for the TeamApp module
 *   declare variables for testScope and controller, which will be shared
 *           throughout the application.
 *   beforeEach // Load the teamApp module
 *              // Inject the controller lookup service and instantiate a
 *              // scope into testScope
 *   describe // Check data in TeamCtrl
 *     it // Make sure that $scope.teams has ten elements
 *     it // Make sure that the third element is "Red Sox"
 *   describe // Check the function delTeam
 *     it // Should verify that a team has been deleted
 *     it // Should verify that the teams list is shorter
 *   describe // Check the function restoreTeams
 *     it // Should verify that deleted teams have come back
 */

describe( 'TeamApp Controller', function () {
  var testScope;

  beforeEach( function() {
    module( 'teamApp' );
    inject( function ( $controller, $rootScope ) {
      testScope = $rootScope.$new();
      $controller( 'TeamCtrl', { $scope : testScope } );
    } );
  } );

  describe( 'Testing TeamCtrl data', function () {
    it( 'should have 10 elements',  function ( ) {
      expect( testScope.teams.length ).toBe( 10 );
    } );

    it( 'should have the Red Sox as the third element', function ( ) {
      // Test for 'Red Sox' by known position
      expect( testScope.teams[2] ).toEqual( 'Red Sox' );

      // Just testing for the presence of 'Red Sox'
      expect( testScope.teams.indexOf('Red Sox') ).toBe( 2 );
    } ) ;
  } );

  describe('Testing delTeam', function() {
    it('should delete a team', function() {
      var teamToDelete = testScope.teams[2];
      var numberOfTeams = testScope.teams.length;

      testScope.delTeam( teamToDelete );
      expect( testScope.teams.indexOf( teamToDelete ) ).toBe( -1 );
      expect( testScope.teams.length ).toBeLessThan( numberOfTeams );
    })
  });

  describe('Testing restoreTeams', function() {
    it('should restore a deleted team', function() {
      var teamToDelete = testScope.teams[0];
      var numberOfTeams = testScope.teams.length;

      expect( testScope.teams.length ).toBeGreaterThan( 1 );

      testScope.delTeam( teamToDelete );
      expect( testScope.teams.indexOf( teamToDelete ) ).toBe( -1 );
      expect( testScope.teams.length ).toBeLessThan( numberOfTeams );

      testScope.restoreTeams();
      expect( testScope.teams.indexOf( teamToDelete ) ).toBeGreaterThan( -1 );
      expect( testScope.teams.length ).toBe( numberOfTeams );
    })
  })
} );
