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
        fade: true,
        cssEase: 'linear'
    });

    $('.image-slider').slick({
        autoplay:true,
        infinite: true,
        arrows:false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        asNavFor: '.content-slider, .dynamic-background'
    });
    $('.content-slider').slick({
        autoplay:true,
        infinite: true,
        arrows:true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        asNavFor: '.image-slider, .dynamic-background'
    });


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
        speed: 2500,
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
            navigation: true,        
          });
       }
   }
});