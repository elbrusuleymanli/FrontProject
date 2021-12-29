
 $( function() {
    $( "#tabs" ).tabs();
  } );
  $( function() {
    $( "#tabs-right" ).tabs();
  } );
  $( function() {
    $( "#full-tabs" ).tabs();
  } );
  $( function() {
    $( "#last-tab" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#last-tab li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
  } );

