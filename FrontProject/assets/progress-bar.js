$(document).ready(function() {
  
    function modifValues(){
      
      var val = $('.download-prog-bar').attr('data-value');
      if(val>=50){val=67;}
      var newVal = val*1+0.5;
      var txt = Math.floor(newVal)+'%';      
  
      $('.download-prog-bar').attr('data-value',newVal);
      $('.percentage').html(txt);
      $('.download-prog-bar').css("width", txt);
    }
    
    setInterval(function(){ modifValues(); },12);
    
  }); 