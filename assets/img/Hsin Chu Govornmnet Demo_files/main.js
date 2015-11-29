$(document).ready(function() {
  // console.log(localStorage.new_visit);
  // alert($(document).width());

  // close the alert-banner
  function close_alert() {
    document.getElementById('first-visit-alert-row').setAttribute("style", "display:none");
    localStorage.new_visit = '1';
    console.log('Closed alert banner. Now localStorage.new_visit is: ' + localStorage.new_visit);
    $('#new-visit-count').text('localStorage.new_visit now is: ' + localStorage.new_visit);
  }

  // judge banner-alert whether to show or not
  function first_visit_alert() {
    console.log('Entered first_visit_alert() function with localStorage.new_visit: ' + localStorage.new_visit);
    if (typeof(Storage) != 'undefined') {
      if (localStorage.new_visit == 'undefined') {
        console.log('localStorage = "undefined" now');
        document.getElementById('first-visit-alert-row').setAttribute("style", "");
        console.log('Banner has been displayed');
      } else {
        console.log('why go to here?');
        close_alert();
      }
    }
  }

  function reset_visit_alert() {
    localStorage.new_visit = 'undefined';
    $('#new-visit-count').text('localStorage.new_visit now is: ' + localStorage.new_visit);
    console.log('Entered reset_visit_alert() function with localStorage.new_visit: ' + localStorage.new_visit);
    document.getElementById('first-visit-alert-row').setAttribute("style", "");
  }

  $('.onclick-close-banner').click(function() {
    close_alert();
  });

  $('.reset-count-button').click(function() {
    reset_visit_alert();
  });

  first_visit_alert();
  // alert(localStorage.new_visit);
  console.log('Run to the end of js, with localStorage.new_visit: ' + localStorage.new_visit);

  // adjsut img height to device-width
  // var device_height =
  // $('.index-img').
  $('#carousel-go').carousel()
  $('.js-hambg-close').click(function(e) {
    $('.hambg-cover').addClass('bye');
  });
  $('.js-hambg-open').click(function(e) {
    $('.hambg-cover').removeClass('bye');

  });

});
