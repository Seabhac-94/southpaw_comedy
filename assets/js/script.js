$(document).ready(function() {

  // Selector Buttons


  $('#cork').click(function() {
    $('.dublinResults, .limerickResults, .dublinResultsBox, .limerickResultsBox, .reset-function').slideUp('medium');
    $('.corkResults').slideDown('slow');
    $('.corkResultsBox').slideDown(1800);
  });

  $('#dublin').click(function() {
    $('.corkResults, .limerickResults, .corkResultsBox, .limerickResultsBox, .reset-function').slideUp('medium');
    $('.dublinResults').slideDown('slow');
    $('.dublinResultsBox').slideDown(1800)
  });

  $('#limerick').click(function() {
    $('.dublinResults, .corkResults, .dublinResultsBox, .corkResultsBox, .reset-function').slideUp('medium');
    $('.limerickResults').slideDown('slow');
    $('.limerickResultsBox').slideDown(1800)
  });

  //Cork Club Buttons

  $('#cityLimitsButton').click(function() {
    $('#comedyCavernContent, #cocoClubContent, #wonkyDonkeyContent').slideUp('slow');
    $('#cityLimitsContent').slideToggle('slow');
  });

  $('#comedyCavernButton').click(function() {
    $('#cityLimitsContent, #cocoClubContent, #wonkyDonkeyContent').slideUp('slow');
    $('#comedyCavernContent').slideToggle('slow');
  });

  $('#cocoClubButton').click(function() {
    $('#cityLimitsContent, #comedyCavernContent, #wonkyDonkeyContent').slideUp('slow');
    $('#cocoClubContent').slideToggle('slow');
  });

  $('#wonkyDonkeyButton').click(function() {
    $('#cityLimitsContent, #cocoClubContent, #comedyCavernContent').slideUp('slow');
    $('#wonkyDonkeyContent').slideToggle('slow');
  });


  //Dublin Club Buttons

  $('#laughterLoungeButton').click(function() {
    $('#comedyCellarContent, #jestersComedyContent, #popCherryContent').slideUp('slow');
    $('#laughterLoungeContent').slideToggle('slow');
  });

  $('#comedyCellarButton').click(function() {
    $('#laughterLoungeContent, #jestersComedyContent, #popCherryContent').slideUp('slow');
    $('#comedyCellarContent').slideToggle('slow');
  });

  $('#jestersComedyButton').click(function() {
    $('#comedyCellarContent, #laughterLoungeContent, #popCherryContent').slideUp('slow');
    $('#jestersComedyContent').slideToggle('slow');
  });

  $('#popCherryButton').click(function() {
    $('#jestersComedyContent, #comedyCellarContent, #laughterLoungeContent').slideUp('slow');
    $('#popCherryContent').slideToggle('slow');
  });


  //Limerick Club Buttons

  $('#treatyComedyButton').click(function() {
    $('#filibusterContent, #karlnivalContent').slideUp('slow');
    $('#treatyComedyContent').slideToggle('slow');
  });

  $('#filibusterButton').click(function() {
    $('#treatyComedyContent, #karlnivalContent').slideUp('slow');
    $('#filibusterContent').slideToggle('slow');
  });

  $('#karlnivalButton').click(function() {
    $('#filibusterContent, #treatyComedyContent').slideUp('slow');
    $('#karlnivalContent').slideToggle('slow');
  });


  // Opacity

  $('#cork, #dublin, #limerick').click(function() {
    $('.mapOpacity').css('opacity', '1')
  });


});
