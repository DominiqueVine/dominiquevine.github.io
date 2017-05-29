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
         if ($(this).css("opacity")==0) {$(this).fadeTo(400,1);}
       } else { //object goes out of view (scrolling up)
         if ($(this).css("opacity")==1) {$(this).fadeTo(400,0);}
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





 $('.beatriceblurbred').mouseenter(function() {
 $('.beatriceblurbred__image').addClass('showme');
 });

 $('.beatriceblurbred').mouseleave(function() {
 $('.beatriceblurbred__image').removeClass('showme');
 });


 $('.allanblurbred').mouseenter(function() {
 $('.allanblurbred__image').addClass('showme');
 });

 $('.allanblurbred').mouseleave(function() {
 $('.allanblurbred__image').removeClass('showme');
 });


  $('.brunoblurbred').mouseenter(function() {
  $('.brunoblurbred__image').addClass('showme');
  });

  $('.brunoblurbred').mouseleave(function() {
  $('.brunoblurbred__image').removeClass('showme');
  });


  $('.visualblurbred').mouseenter(function() {
  $('.visualblurbred__image').addClass('showme');
  });

  $('.visualblurbred').mouseleave(function() {
  $('.visualblurbred__image').removeClass('showme');
  });





  $('.beatrice').mouseenter(function() {
  $('.beatrice__image').addClass('showme');
  });

  $('.beatrice').mouseleave(function() {
  $('.beatrice__image').removeClass('showme');
  });


  $('.allan').mouseenter(function() {
  $('.allan__image').addClass('showme');
  });

  $('.allan').mouseleave(function() {
  $('.allan__image').removeClass('showme');
  });

  $('.bruno').mouseenter(function() {
  $('.bruno__image').addClass('showme');
  });

  $('.bruno').mouseleave(function() {
  $('.bruno__image').removeClass('showme');
  });



  $('.authorlist').click(function() {
  $('.authorlist__image').toggleClass('showme');
  });






 $(document).on('click', '.top a', function(event){
     event.preventDefault();

     $('html, body').animate({
         scrollTop: $( $.attr(this, 'href') ).offset().top
     }, 500);
 });













});
