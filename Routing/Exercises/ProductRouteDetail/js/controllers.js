(function ( angular ) {
  var prodControllers = angular.module( 'productControllers', [] );

  prodControllers.controller( 'ProductCtrl', ['$scope', '$cacheFactory', '$log',
    function ( $scope, $cacheFactory, $log ) {
      $log.log( 'Called ProductCtrl.' );

      // Create a cache to store our product information
      $scope.cache = $cacheFactory('productCache');
    }] );

// Add a dependency on the $location service
  prodControllers.controller( 'ProductListCtrl', ['$scope', '$http', '$log', '$location',
    function ( $scope, $http, $log, $location ) {
      $log.log( 'Called ProductListCtrl' );
      $http( {
        url    : '/data/northwind-products.json',
        method : 'get',
        cache  : $scope.cache
      } )
        .success( function ( products ) {
          $scope.products = products;
        } );

      // Build fetchProduct to redirect to the appropriate route
      // for the clicked-on product
      $scope.fetchProduct = function(product){
        $location.path('/products/' + product.productID)
      }
    }] );

  prodControllers.controller( 'ProductDetailCtrl', ['$scope', '$routeParams', '$http', '$location', '$log',
    function ( $scope, $routeParams, $http, $location, $log ) {
      $scope.productID = $routeParams.productID;
      $log.log( 'ProductDetailCtrl invoked with product id: %s', $scope.productID );
      $http({
        url: '/data/northwind-products.json',
        method: 'get',
        cache: $scope.cache
      }).success(function(products){
        $scope.products = products;
        products.some(function(product){
          $log.log('checking product: ')
          $log.log('scope product id: ' + $scope.productID)
          $log.log('data product id: ' + product.productID)
          if (product.productID == $scope.productID){
            $scope.product = product;
            return true;
          }
        })
      })
      // Make an $http request to /data/northwind-products.json,
      // using the cache we set up in ProductCtrl
      // on success, find the appropriate product in the array and add it to the $scope

      // Build functions to implement the next, previous, and back buttons
      $scope.back = function(){
        $location.path('/products')
      }
      // Then go to partials/product-detail-tpl.html and complete it
      $scope.next = function(){
        $scope.product = $scope.products[
          Math.min( $scope.products.length - 1,
            ($scope.products.indexOf( $scope.product ) + 1) )
          ];
      }

      $scope.previous = function(){
        $scope.product = $scope.products[Math.max( 0,
        ($scope.products.indexOf( $scope.product ) - 1) )];
      }
    }] );

})( angular );
