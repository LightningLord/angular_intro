(function ( angular ) {
  angular.module( 'docsTimeDirective', [] )
    .controller( 'Controller', ['$scope', function ( $scope ) {
      $scope.format = 'M/d/yy h:mm:ss a';
    }] )
    .directive( 'myCurrentTime', ['$interval', 'dateFilter',
      function ( $interval, dateFilter ) {

        function updateTime( el, fmt ) {
          el.text( dateFilter( new Date(), fmt ) );
        }

        return {
          link : function ( scope, element, attrs ) {
            var format,
                timeoutId;

            scope.$watch( attrs.myCurrentTime, function ( value ) {
              format = value;
              updateTime( element, format );
            } );

            element.on( '$destroy', function () {
              $interval.cancel( timeoutId );
            } );

            // start the UI update process; save the timeoutId for canceling
            timeoutId = $interval( function () {
              updateTime( element, format ); // update DOM
            }, 1000 );
          }
        };
      }] );

})( angular );
