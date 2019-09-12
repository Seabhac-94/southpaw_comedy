$(document).ready(function() {

  // Selector Buttons


  $('#cork').click(function() {
    $('.dublinResults').slideUp('slow');
    $('.limerickResults').slideUp('slow');
    $('.dublinResultsBox').slideUp('slow');
    $('.limerickResultsBox').slideUp('slow');
    $('.corkResults').slideDown('slow');
    $('.corkResultsBox').slideDown('1800');
  });

  $('#dublin').click(function() {
    $('.corkResults').slideUp('slow');
    $('.limerickResults').slideUp('slow');
    $('.corkResultsBox').slideUp('slow');
    $('.limerickResultsBox').slideUp('slow');
    $('.dublinResults').slideDown('slow');
    $('.dublinResultsBox').slideDown('1800')
  });

  $('#limerick').click(function() {
    $('.dublinResults').slideUp('slow');
    $('.corkResults').slideUp('slow');
    $('.dublinResultsBox').slideUp('slow');
    $('.corkResultsBox').slideUp('slow');
    $('.limerickResults').slideDown('slow');
    $('.limerickResultsBox').slideDown('1800')
  });

  //Cork Club Buttons

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



  //Dublin Club Buttons

  $('#laughterLoungeButton').click(function() {
    $('#comedyCellarContent').slideUp('slow');
    $('#jestersComedyContent').slideUp('slow');
    $('#popCherryContent').slideUp('slow');
    $('#laughterLoungeContent').slideToggle('slow');
  });

  $('#comedyCellarButton').click(function() {
    $('#laughterLoungeContent').slideUp('slow');
    $('#jestersComedyContent').slideUp('slow');
    $('#popCherryContent').slideUp('slow');
    $('#comedyCellarContent').slideToggle('slow');
  });

  $('#jestersComedyButton').click(function() {
    $('#comedyCellarContent').slideUp('slow');
    $('#laughterLoungeContent').slideUp('slow');
    $('#popCherryContent').slideUp('slow');
    $('#jestersComedyContent').slideToggle('slow');
  });

  $('#popCherryButton').click(function() {
    $('#jestersComedyContent').slideUp('slow');
    $('#comedyCellarContent').slideUp('slow');
    $('#laughterLoungeContent').slideUp('slow');
    $('#popCherryContent').slideToggle('slow');
  });


});
