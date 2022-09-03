$(document).ready( function () {

    // Sliders
 
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
 });