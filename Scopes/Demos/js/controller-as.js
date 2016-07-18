(function ( angular ) {
// We'll go over what's going on here in detail later on
// For now, we're creating a namespace for the application: introApp
  var introApp = angular.module( 'introApp', [] );

// Then we're adding a controller.
// Just a comment.
  introApp.controller( 'FirstCtrl', function ( $scope ) {
      var ctrl = this;
      ctrl.names = ['John', 'Dan', 'Tim', 'Andre', 'Angela', 'Maria', 'Andres', 'Chuck', 'Joseph',
        'Jose'];
      ctrl.foo = 'Controller\'s foo';
      $scope.foo = 'Foo';
    }
  );

})( angular );
