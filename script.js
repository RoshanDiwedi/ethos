$(document).ready( function () {
 
    //// Slider Top
   $('.js-items-slider-container .slider-for').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false,
       fade: true,
       asNavFor: '.js-items-slider-container .slider-nav'
   });

   $('.js-items-slider-container .slider-nav').slick({
       slidesToShow: 4,
       slidesToScroll: 1,
       asNavFor: '.js-items-slider-container .slider-for',
       dots: true,
       centerMode: false,
       focusOnSelect: false,
       arrows: true,
       accessibility: true,
       onAfterChange: function (slide, index) {
         console.log("slider-nav change");
         console.log(this.$slides.get(index));
       },
       onInit: function (slick) {
       }
    });

    const hamburger = document.querySelector(".hambarger");
    const navMenu = document.querySelector(".navbar-wrapper");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      navMenu.classList.toggle("navbar-active");
    });

    document.querySelectorAll(".nav-link").forEach((link) =>
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        navMenu.css("display","none")
      })
    );


  // footer ul hover effect
  $(".footer .top-footer li span").on("mouseover", function(){
    $(this).addClass("active");
  });

  $(".footer .top-footer li span").on("mouseout", function(){
    $(this).removeClass("active");
  });

 });