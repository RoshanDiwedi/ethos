$(document).ready(function(){
    $(".fa-bars").on("click", function(){
        $(".header .menuzord").show();
        $(".fa-xmark").show();
        $(this).hide();
    });

    $(".fa-xmark").on("click", function(){
        $(this).hide();
        $(".header .menuzord").hide();
        $(".fa-bars").show();
    });
})