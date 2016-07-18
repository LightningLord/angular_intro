(function ( angular ) {
  var mod = angular.module( 'productDirectives', [] );

  mod.directive( 'productBanner', function ( $location ) {
    /*
     * In the configuration below, replace the hard-coded text 'Browse our products'
     * with a variable bannerMsg
     *
     * Define a link function that listens for a scope change event
     * (hint: scope.$on('$routeChangeStart'))
     * When that event fires, use the $location provider to figure out
     * what route you're on and change bannerMsg as follows:
     * - List route: 'List of products'
     * - Detail route: 'Details for product #' and then the productID
     * - Other route: 'Browse our products'
     * 
     */
    return {
      template : '<div class="col-sm-12 text-center"><h2>Unset banner message</h2></div>',
      restrict : 'E',
    }
  } )

})( angular );