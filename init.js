
$( document ).ready(function(){
	$('.parallax').parallax();
  $('.carousel').carousel();
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
      }
  );
    
    $(document).ready(function(){
      $('.slider').slider();
    });

    //parallax
    $(document).ready(function(){
      $('.parallax').parallax();
    });
    
  loopCarossel();
  function loopCarossel() {
    setTimeout(function () {
        $('.carousel.carousel-slider').carousel('next');

        loopCarossel();
    }, 3000);
  } 
    $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
});



        

