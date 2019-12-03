$(document).ready(function(){
    $('.toggle').click(function(){
        $('body').toggleClass('open-menu');
    }); 
    /**** our works loop */
    function bgSource(imgcontainer) {
        $(imgcontainer).each(function() {
            var img = $(this).find("img");
            var height = img.height();
            var img_src = img.attr("src");
            $(this).css({
                "background-image": "url(" + img_src + ")",
                "background-size": "cover",
                "background-repeat": "no-repeat",
                "background-position": "center"
            });
            img.hide()
        })
    }
    bgSource(".our-works-banner .item");


   /* var arr = $(".what-do-sec h3").text().split(" ");
    var html="";
    for (i = 0; i < arr.length; ++i) {
        html+= "<span>"+arr[i]+"</span>";
    }
    $(".what-do-sec h3").html(html);*/


    /*var spanInserted = $('.what-do-sec h3').html().split(" ").join(" </span><span>");
    var wrapped = ("<span>").concat(spanInserted, "</span>");
    $('.what-do-sec h3').html(wrapped);
    var refPos = $('.what-do-sec h3 span:first-child').position().top;
    var newPos;
    $('.what-do-sec h3 span').each(function(index) {
        newPos = $(this).position().top;
        if (index == 0){
            return;
        }
        if (newPos == refPos){
            $(this).prepend($(this).prev().text() + " ");
            $(this).prev().remove();
        }
        refPos = newPos;
    });*/

    $('.what-we-do-content .content-inner').each(function(){
        var text = $(this).text().split(' ');

        for( var i = 0, len = text.length; i < len; i++ ) {
            text[i] = '<span class="word-' + i + '">' + text[i] + '</span>';
        }
        $(this).html(text.join(' '));

    });

    $('.what-we-do-content span').each(function(index) {
        var _this = this;
        setTimeout(function() {
            $(_this).addClass('fadeInUp');
            setTimeout(function() {
                $(_this).addClass('color');
            }, 2000 * index);
        }, 500 * index);
    });



    $(".color-sec").each(function () {
        var color1 = $(this).attr("data-color1");
        var color2 = $(this).attr("data-color2");
        $(this).css({background: 'linear-gradient(120deg, '+ color1+', '+ color2 + ')'});
    });

    $('.dynamic-background').slick({
        autoplay:true,
        infinite: true,
        arrows:false,
        speed: 500,
        autoplaySpeed: 5000,
        fade: true,
        draggable: false,
        cssEase: 'linear'
    });

    $('.image-slider').slick({
        autoplay:true,
        infinite: true,
        arrows:false,
        speed: 500,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        asNavFor: '.content-slider, .dynamic-background'
    });
    $('.content-slider').slick({
        autoplay:true,
        infinite: true,
        arrows:true,
        speed: 500,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear',
        asNavFor: '.image-slider, .dynamic-background'
    });


    jQuery(".content-slider").on("init", function (e, slick) {
        var $firstAnimatingElements = jQuery(
            ".content-slider .slick-slide:first-child"
        ).find("[data-animation]");
        doAnimations($firstAnimatingElements);
    });
    jQuery(".content-slider").on("beforeChange", function (
        e,
        slick,
        currentSlide,
        nextSlide
    ) {
        var $animatingElements = jQuery(
            '.content-slider .slick-slide[data-slick-index="' + nextSlide + '"]'
        ).find("[data-animation]");
        doAnimations($animatingElements);
    });

    function doAnimations(elements) {
        var animationEndEvents =
            "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
        elements.each(function () {
            var $this = jQuery(this);
            var $animationDelay = $this.data("delay");
            var $animationType = "animated " + $this.data("animation");
            $this.css({
                "animation-delay": $animationDelay,
                "-webkit-animation-delay": $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function () {
                $this.removeClass($animationType);
            });
        });
    }


    /*$('.service-slider').slick({
        autoplay:true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });*/

    $('.our-service-blog').mouseover(function(){
        $('.our-service-blog').removeClass('active');
        $(this).addClass('active');
    })      
    $('.our-service-blog').mouseleave(function(){
        $(this).removeClass('active');
    })   
    $('.our-works-banner').slick({
        dots: true,
        dotsClass: 'slick-dots dotstyle-fall',
        autoplay:true,
        infinite: true,
        arrows:false,
        speed: 500,
        autoplaySpeed: 4000,
        fade: true
      }); 
    
      $('.perspective-banner').slick({
        dots:false,
        autoplay:false,
        autoplaySpeed: 3000,
        prevArrow: ".our-perspective-sec .prev",
        nextArrow: ".our-perspective-sec .next",
        infinite: true,               
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.text-slider'
      }); 
      $('.text-slider').slick({
        dots:false,
        arrows:false,
        autoplay:false,
        autoplaySpeed: 3000,
        infinite: true,
        fade:true,        
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.perspective-banner',
      }); 
      $('.testimonial-banner').slick({
        dots:false,
        autoplay:false,
        autoplaySpeed: 3000,
        infinite: true,
        fade:true,
        prevArrow: ".testimonial-sec .prev",
        nextArrow: ".testimonial-sec .next",
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
      }); 
      
    //   $(".main").onepage_scroll({
    //     sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
    //     easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
    //     // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    //     animationTime: 1000, // AnimationTime let you define how long each section takes to animate
    //     pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
    //     updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    //     beforeMove: function (index) { }, // This option accepts a callback function. The function will be called before the page moves.
    //     afterMove: function (index) { }, // This option accepts a callback function. The function will be called after the page moves.
    //     loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    //     keyboard: true, // You can activate the keyboard controls
    //     responsiveFallback: 993, // You can fallback to normal page scroll by defining the width of the browser in which
    //     // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
    //     // the browser's width is less than 600, the fallback will kick in.
    //     direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
    // });
    
    $('.site-layer').click(function(){
        $('body').removeClass('open-menu');
    })  
   //global variables
   var responsiveflag = false;

   responsiveResize();

   $(window).resize(responsiveResize);

   function responsiveResize() {
       if (($(window).width()) <= 1199 && responsiveflag == false)
       {           
           responsiveflag = true;
           fullpage_api.destroy('all');
       }
       else if (($(window).width()) >= 1200)
       {
        $('.main').fullpage({
            scrollBar: true,
            responsiveWidth:993,                
            scrollingSpeed: 500,
            navigation: false,
          });
       }
   }
});