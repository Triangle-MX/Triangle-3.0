// Page Smooth Scroll

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Notification Bar

function closeNotificationBar(){
    var notificationBar = document.getElementById('notification-bar');        notificationBar.classList.add('close-nbar');
};

// Sticky Notification Bar

$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 639) {
            $('#notification-bar').addClass('sticky-notification');
        }
        else {
            $('#notification-bar').removeClass('sticky-notification');
        }
    });
});