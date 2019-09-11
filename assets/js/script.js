$(document).ready(function() {
  
  $('#cork').click(function(){
    $('.corkResults').slideDown('slow');
    $('.resultsBox').slideDown('1800')
      });

  $('button').click(function(){
    
    $(this).next().slideToggle('slow');
    
  });
    
  });