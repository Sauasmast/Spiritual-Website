/* For bouncing the logo */
$(document).ready(function() {
  setTimeout(() => {
    $('.js-animate-1').addClass('animated zoomIn');
  }, 500);

  var typed3 = new Typed('.js-type', {
    strings: [
      'Glitch',
      'Feeling Low?',
      'Depressed?',
      "Don't want to do anything?",
      "It's Okay!!",
      'Life is Tough',
      "It's Okay !!",
      'You are the best person in this world'
    ],
    typeSpeed: 100,
    backSpeed: 100,
    smartBackspace: true, // this is a default
    loop: true
  });
});

/* Adding the animation on scroll with the waypoints */

$('.js-animate-2').waypoint(
  function(direction) {
    $('.js-animate-2').addClass('animated fadeInDown');
  },
  { offset: '75%' }
);

$('.js-animate-3').waypoint(
  function(direction) {
    $('.js-animate-3').addClass('animated fadeIn');
  },
  { offset: '75%' }
);

$('.js-animate-4').waypoint(
  function(direction) {
    $('.js-animate-4').addClass('animated fadeInLeft');
  },
  { offset: '75%' }
);

$('.js-animate-5').waypoint(
  function(direction) {
    $('.js-animate-5').addClass('animated fadeInRight');
    $('.big-line').addClass('animation');
  },
  { offset: '75%' }
);

$('.js-animate-7').waypoint(
  function(direction) {
    $('.contact .row:nth-child(3)>div').addClass('animated rotateIn');
  },
  { offset: '60%' }
);

$('.js-animate-8').waypoint(
  function(direction) {
    $('.js-animate-8').addClass('animated fadeInUpBig');
  },
  { offset: '80%' }
);

$('#feedback-btn').click(function() {
  var Name = $('#name').val();
  var Email = $('#email').val();
  var Comment = $('#message').val();

  if (Name == '' || Email == '' || Comment == '') {
    alert('You need to fill out all the requirements');
  } else if (!Email.includes('@')) {
    alert('Please input the valid Email address.');
  } else {
    window.location.href = `mailto:saugatdahal14@gmail.com?subject=Hey, It's me ${Name}!!!&body=${Comment} \n You can reach me at ${Email}`;
    alert(
      'If your email application does not open send me an email at saugatdahal14@gmail.com. Cheers!!'
    );
  }
});
