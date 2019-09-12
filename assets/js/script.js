$(document).ready(function() {

// Selector Buttons


  $('#cork').click(function() {
    $('.dublinResults').slideUp('slow');
    $('.limerickResults').slideUp('slow');
    $('.corkResults').slideDown('slow');
    $('.corkResultsBox').slideDown('1800');
  });

  $('#dublin').click(function() {
    $('.corkResults').slideUp('slow');
    $('.limerickResults').slideUp('slow');
    $('.dublinResults').slideDown('slow');
    $('.resultsBox').slideDown('1800')
  });

  $('#limerick').click(function() {
    $('.dublinResults').slideUp('slow');
    $('.corkResults').slideUp('slow');
    $('.limerickResults').slideDown('slow');
    $('.resultsBox').slideDown('1800')
  });
  
//Club Buttons

  $('#cityLimitsButton').click(function() {
    $('#comedyCavernContent').slideUp('slow');
    $('#cocoClubContent').slideUp('slow');
    $('#wonkyDonkeyContent').slideUp('slow');
    $('#cityLimitsContent').slideToggle('slow');
  });

  $('#comedyCavernButton').click(function() {
    $('#cityLimitsContent').slideUp('slow');
    $('#cocoClubContent').slideUp('slow');
    $('#wonkyDonkeyContent').slideUp('slow');
    $('#comedyCavernContent').slideToggle('slow');
  });
  
  $('#cocoClubButton').click(function() {
    $('#cityLimitsContent').slideUp('slow');
    $('#comedyCavernContent').slideUp('slow');
    $('#wonkyDonkeyContent').slideUp('slow');
    $('#cocoClubContent').slideToggle('slow');
  });
  
  $('#wonkyDonkeyButton').click(function() {
    $('#cityLimitsContent').slideUp('slow');
    $('#cocoClubContent').slideUp('slow');
    $('#comedyCavernContent').slideUp('slow');
    $('#wonkyDonkeyContent').slideToggle('slow');
  });

});
