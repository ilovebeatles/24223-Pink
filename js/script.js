
$(document).ready(function() {

  $(window).resize(function() {

    createSliders();
    
  })

  createSliders();

  function createSliders() {

    if( $(window).width() < 590 ) {

      $(".slider--benefits__table_wrapper").css({"transform":"translateX(-256px)"})
      $("#benefits_slider .slider_pagination a").removeClass("active");
      $("#benefits_slider .slider_pagination a:nth-child(2)").addClass("active");

      $("#review_slider .slider_pagination a").click(function(event) {

      event.preventDefault();
      var parent = $(this).closest("#review_slider");

      var currentHeight = $(parent).height() + "px";

      parent.css("height", currentHeight);

      var paginationLinks = $("#review_slider .slider_pagination a");
      var count = $.inArray( this, paginationLinks );
      var slides = $("#review_slider .slider__slide");
      var slideTarget = $("#review_slider .slider__slide").get(count);

      if ( !$(this).hasClass("active") ) {
        $(paginationLinks).removeClass("active");
        $(this).addClass("active");
        console.log( $.inArray( this, paginationLinks ) );

        $.when( $(slides).hide("fast") ).done( function() {$(slideTarget).fadeIn("fast")} );

      }

    })

    $("#benefits_slider .slider_pagination a").click(function(event) {

      event.preventDefault();

      var parent = $(this).closest("#benefits_slider").find(".slider--benefits__table_wrapper");
      var paginationLinks = $("#benefits_slider .slider_pagination a");
      var count = $.inArray( this, paginationLinks );
      var slides = $("#benefits_slider .slider__slide");
      var width = $("#benefits_slider .slider__slide").css("width") + "px";
      var slideTarget = $("#benefits_slider .slider__slide").get(count);

      if ( !$(this).hasClass("active") ) {
        $(paginationLinks).removeClass("active");
        $(this).addClass("active");

        if ( count == 0 ) {
           $(parent).css({"transform":"translateX(21px)"})
        }

        if ( count == 1 ) {
           $(parent).css({"transform":"translateX(-256px)"})
        }

        if ( count == 2 ) {
           $(parent).css({"transform":"translateX(-533px)"})
        }

        console.log( $.inArray( this, paginationLinks ) );
        var a ="255px"

      }

    })

  }

  if( $(window).width() > 590 ) {

    $(".slider--benefits__table_wrapper").css({"transform":"translateX(0)"})

  }

  if( $(window).width() > 1200 ) {

    $("#review_slider .slider_controls").unbind();
    
    $(".slider_controls").click(function(event) {

      event.preventDefault();

      var parent = $(this).closest("#review_slider");

      var currentHeight = $(parent).height() + "px";

      parent.css("height", currentHeight);

      console.log( currentHeight );

      var prevBtn = $(parent).find(".slider_controls--prev");
      var nextBtn = $(parent).find(".slider_controls--next");

      var slides = $("#review_slider .slider__slide");
      var activeSlide1 = $("#review_slider .slider__slide.active")[0]
      var activeSlide = +$.inArray( activeSlide1, slides );

      if ( $(this).hasClass("slider_controls--next") ) {

            if ( activeSlide < slides.length - 1 ) {

              console.log(activeSlide);
              console.log(slides.length);

              $(prevBtn).removeClass("disabled");

              var target = $(slides).get(activeSlide + 1);

              $.when( $(activeSlide1).removeClass("active").fadeOut("fast") ).done(function() { 
              
                $(target).fadeIn("fast").addClass("active")} 
              
              );

              if ( activeSlide == slides.length - 2 ) {
                $(this).addClass("disabled");  
              }
            }

      }

      if ( $(this).hasClass("slider_controls--prev") ) {

            if ( activeSlide !=0 ) {

              console.log(activeSlide);
              console.log(slides.length);

              $(nextBtn).removeClass("disabled");

              var target = $(slides).get(activeSlide - 1);

              $.when( $(activeSlide1).removeClass("active").fadeOut("fast") ).done( function() {$(target).fadeIn("fast").addClass("active")}  );

              if ( activeSlide == 1) {
                $(this).addClass("disabled");
              }

            }

      }

    })

  }

  }

















  $("#toggler").on("tap", function(event) {
    event.preventDefault();
    $(this).toggleClass("menu_btn--close");
    $(".menu").toggleClass("active");
    $(".menu__list").slideToggle("fast");
  })

})
