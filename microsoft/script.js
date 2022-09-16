$(document).ready(function(){

      // mobile navigation
      $(".mobile-bar .fa-bars").on("click", function(){
        $(".navbar-top").show();
        $(this).hide();
        $(".fa-xmark").show();
      });

      $(".mobile-bar .fa-xmark").on("click", function(){
        $(".navbar-top").hide();
        $(this).hide();
        $(".fa-bars").show();
      });


      // contact section
      $(".video-icon span").on("click", function(){
        $(".contact .video").slideDown();
      })
      $(".video .fa-xmark").on("click", function(){
        $(".contact .video").slideUp();
      })



    //       // Slick slider
    // $(".slick-slider").slick({
    //   slidesToShow: 3,
    //   infinite:false,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 2000
    //     // dots: false, Boolean
    //    // arrows: false, Boolean
    // });
      
       
});


 
 