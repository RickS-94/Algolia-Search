iFrameResize({log:false}, '#sufAlgoliaIframe');

jQuery( document ).ready( function($) {
  $( document ).on( 'click', 'a[href="#show-search"]', function( e ) {
    e.preventDefault();

    var $container = $( '.content-algolia-search--modal' );

    if( $( '.content-algolia-search--modal' ).hasClass( 'is-hidden' ) ) {
      $container.removeClass( 'is-hidden' );
    } else {
      $container.addClass( 'is-hidden' );
    }
  } );

  $( document ).mouseup( function(e) {
      var $container = $( '.content-algolia-search--modal' );

      if( !$container.is( e.target ) && $container.has( e.target ).length === 0 ) {
        $container.addClass( 'is-hidden' );
      }
  } );

  $( '.js-close-algolia' ).on( 'click', function() {
    $( '.content-algolia-search--modal' ).addClass( 'is-hidden' );
  } );
} );
