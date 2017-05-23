$(document).ready(function() {




  $('.number').mouseenter(function() {
    $('.footnote').addClass('showme');
  });

  $('.number').mouseleave(function() {
    $('.footnote').removeClass('showme');
  });


  $('.thumbnail').click(function() {
   $(this).toggleClass('enlarge');
 });







 $(window).on("load",function() {
   $(window).scroll(function() {
     var windowBottom = $(this).scrollTop() + $(this).innerHeight();
     $(".fade").each(function() {
       /* Check the location of each desired element */
       var objectBottom = $(this).offset().top + $(this).outerHeight();

       /* If the element is completely within bounds of the window, fade it in */
       if (objectBottom < windowBottom) { //object comes into view (scrolling down)
         if ($(this).css("opacity")==0) {$(this).fadeTo(700,1);}
       } else { //object goes out of view (scrolling up)
         if ($(this).css("opacity")==1) {$(this).fadeTo(700,0);}
       }
     });
   }).scroll(); //invoke scroll-handler on page-load
 });



 $('.beatriceblurb').mouseenter(function() {
 $('.beatriceblurb__image').addClass('showme');
 });

 $('.beatriceblurb').mouseleave(function() {
 $('.beatriceblurb__image').removeClass('showme');
 });




 $('.brunoblurb').mouseenter(function() {
 $('.brunoblurb__image').addClass('showme');
 });

 $('.brunoblurb').mouseleave(function() {
 $('.brunoblurb__image').removeClass('showme');
 });




 $('.allanblurb').mouseenter(function() {
 $('.allanblurb__image').addClass('showme');
 });

 $('.allanblurb').mouseleave(function() {
 $('.allanblurb__image').removeClass('showme');
 });




 $('.visualblurb').mouseenter(function() {
 $('.visualblurb__image').addClass('showme');
 });

 $('.visualblurb').mouseleave(function() {
 $('.visualblurb__image').removeClass('showme');
 });




 $(document).on('click', '.top a', function(event){
     event.preventDefault();

     $('html, body').animate({
         scrollTop: $( $.attr(this, 'href') ).offset().top
     }, 500);
 });



});
