$(document).ready(function() {

  // Selector Buttons


  $('#cork').click(function() {
    $('.dublinResults').slideUp('medium');
    $('.limerickResults').slideUp('medium');
    $('.dublinResultsBox').slideUp('medium');
    $('.limerickResultsBox').slideUp('medium');
    $('.corkResults').slideDown('slow');
    $('.corkResultsBox').slideDown(1800);
  });

  $('#dublin').click(function() {
    $('.corkResults').slideUp('medium');
    $('.limerickResults').slideUp('medium');
    $('.corkResultsBox').slideUp('medium');
    $('.limerickResultsBox').slideUp('medium');
    $('.dublinResults').slideDown('slow');
    $('.dublinResultsBox').slideDown(1800)
  });

  $('#limerick').click(function() {
    $('.dublinResults').slideUp('medium');
    $('.corkResults').slideUp('medium');
    $('.dublinResultsBox').slideUp('medium');
    $('.corkResultsBox').slideUp('medium');
    $('.limerickResults').slideDown('slow');
    $('.limerickResultsBox').slideDown(1800)
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


  //Limerick Club Buttons

  $('#treatyComedyButton').click(function() {
    $('#filibusterContent').slideUp('slow');
    $('#karlnivalContent').slideUp('slow');
    $('#treatyComedyContent').slideToggle('slow');
  });

  $('#filibusterButton').click(function() {
    $('#treatyComedyContent').slideUp('slow');
    $('#karlnivalContent').slideUp('slow');
    $('#filibusterContent').slideToggle('slow');
  });

  $('#karlnivalButton').click(function() {
    $('#filibusterContent').slideUp('slow');
    $('#treatyComedyContent').slideUp('slow');
    $('#karlnivalContent').slideToggle('slow');
  });



});


