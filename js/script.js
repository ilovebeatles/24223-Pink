
$(document).ready(function() {

  function slidersInit() {

    if( $(window).width() > 590 ) {

      $(".slider--benefits__table_wrapper").css({"transform":"translateX(0)"});

    }

    if ( $(window).width() < 600 ) {

      $(".slider--benefits__table_wrapper").css({"transform":"translateX(-256px)"})
      $("#benefits_slider .slider_pagination a").removeClass("active");
      $("#benefits_slider .slider_pagination a:nth-child(2)").addClass("active");

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

        }

      })

    }

    if( $(window).width() < 1200 ) {

      $("#review_slider .slider__slide").removeClass("active");

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

        $.when( $(slides).hide("fast") ).done( function() {
          
          $(slideTarget).fadeIn("fast")
        
        } );

      }

    })

  }

    if( $(window).width() > 1200 ) {

      $(".slider_pagination--review a").removeClass("active");
      $(".slider_pagination--review a:first-child").addClass("active");

      $("#review_slider .slider__slide").removeClass("active").hide();
      $("#review_slider .slider__slide:first-child").addClass("active").show();

      $("#review_slider .slider_controls").unbind();
      
      $(".slider_controls").click(function(event) {

        event.preventDefault();

        var parent = $(this).closest("#review_slider");
        var currentHeight = $(parent).height() + "px";

        parent.css("height", currentHeight);

        var prevBtn = $(parent).find(".slider_controls--prev");
        var nextBtn = $(parent).find(".slider_controls--next");
        var slides = $("#review_slider .slider__slide");
        var activeSlide = $("#review_slider .slider__slide.active")[0];
        var activeSlidePosition = +$.inArray( activeSlide, slides );

        if ( $(this).hasClass("slider_controls--next") ) {

          if ( activeSlidePosition < slides.length - 1 ) {

            $(prevBtn).removeClass("disabled");

            var target = $(slides).get(activeSlidePosition + 1);

            $.when( $(activeSlide).removeClass("active").fadeOut("fast") ).done(function() { 
            
              $(target).fadeIn("fast").addClass("active")} 
            
            );

            if ( activeSlidePosition == slides.length - 2 ) {
              $(this).addClass("disabled");  
            }
          }

        }

        if ( $(this).hasClass("slider_controls--prev") ) {

          if ( activeSlidePosition !=0 ) {

            $(nextBtn).removeClass("disabled");

            var target = $(slides).get(activeSlidePosition - 1);

            $.when( $(activeSlide).removeClass("active").fadeOut("fast") ).done( function() {$(target).fadeIn("fast").addClass("active")}  );

            if ( activeSlidePosition == 1) {
              $(this).addClass("disabled");
            }

          }

        }

      })

    }

  }

  slidersInit();

  $(window).resize(function() {
    slidersInit();
  })

  $("#toggler").on("tap", function(event) {
    event.preventDefault();
    $(this).toggleClass("menu_btn--close");
    $(".menu").toggleClass("active");
    $(".menu__list").slideToggle("fast");
  })

})
