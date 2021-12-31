$( function() {
    $( "#prod-tabs" ).tabs();
  } );
 

    
    $('.rev').click(function() {
      $(".prod-items").css({
        marginTop: "930px"
      });

   } 
    )
 
    $('.des').click(function() {
      $(".prod-items").css({
        marginTop: "0px"
      });

   } 
    )
