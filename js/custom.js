$(document).ready(function(){
    $('.toggle').click(function(){
        $('body').toggleClass('open-menu');
    }); 
    $(window).scroll(function(){
        if($(this).scrollTop()>150) {
            $('body').addClass('sticky');
        }
        else {
            $('body').removeClass('sticky');
        }
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
            text[i] = '<span data-text="'+ text[i] +'">' + text[i] + '</span>';
        }
        $(this).html(text.join(' '));

    });


    $('.what-we-do-content .content-inner span').each(function(index){
        $(this).addClass('wow fadeInUp').addClass('word-'+index).attr("data-wow-delay", 0.5 + index*0.5 +'s');
    });


    var delay = $('.what-we-do-content span').last().attr('data-wow-delay');
    var delayTime = parseFloat(delay);
    var time = delayTime + 5.0;
    if($('.what-we-do-content span').last().attr('data-wow-delay') === delay ) {
        setTimeout(function(){
            $('.what-we-do-content .content-inner span').addClass('active');
        }, time*1000);

    }


    $(' .logo-sec > .cli-logo-inner ').each( function() {
        $(this).hoverdir({
            hoverDelay : 75
        });
    }).hover(function(){
        $(this).toggleClass('active');
    });

    $(".nav-link").mouseover(function(){
        $(".nav-link").removeClass("brands_active").addClass("brands_n_active");
        $(this).removeClass( "brands_n_active").addClass("brands_active");
    }).mouseout(function(){
        $(".nav-link").removeClass( "brands_n_active").removeClass("brands_active");
    });


    $(".color-sec").each(function () {
        var color1 = $(this).attr("data-color1");
        var color2 = $(this).attr("data-color2");
        $(this).css({background: 'linear-gradient(120deg, '+ color1+', '+ color2 + ')'});
    });


    /*$(document).ready(function() {
        var movementStrength = 25;
        var height = movementStrength / $(window).height();
        var width = movementStrength / $(window).width();
        $("#top-image").mousemove(function(e){
            var pageX = e.pageX - ($(window).width() / 2);
            var pageY = e.pageY - ($(window).height() / 2);
            var newvalueX = width * pageX * -1 - 25;
            var newvalueY = height * pageY * -1 - 50;
            $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
        });
    });*/

    $('.dynamic-background').slick({
        autoplay:false,
        infinite: true,
        arrows:false,
        speed: 500,
        autoplaySpeed: 5000,
        fade: true,
        draggable: false,
        cssEase: 'linear'
    });

    $('.image-slider').slick({
        autoplay:false,
        infinite: true,
        arrows:false,
        speed: 500,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        asNavFor: '.content-slider, .dynamic-background'
    });
    $('.content-slider').slick({
        autoplay:false,
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
        dotsClass: 'slick-dots dotstyle-dotstroke',
        autoplay:true,
        infinite: true,
        arrows:false,
        speed: 500,
        autoplaySpeed: 4000,
        fade: true
      }); 
    
      $('.blog-slider').slick({
        dotsClass: 'slick-dots dotstyle-dotstroke',
        dots:false,
        arrows:false,
        autoplay:false,
        autoplaySpeed: 3000,
        infinite: true,               
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
          responsive: [
              {
                  breakpoint: 1024,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: true
                  }
              }]
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

    wow = new WOW(
        {
            animateClass: 'animated',
            offset:       100,
            callback:     function(box) {
                console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
            }
        }
    );
    wow.init();

    $('.home .main').fullpage({
        scrollBar: true,
        responsiveWidth:767,
        scrollingSpeed: 1000,
        navigation: false
    });

   //global variables
   var responsiveflag = false;

   responsiveResize();

   $(window).resize(responsiveResize);

   function responsiveResize() {
       if (($(window).width()) <= 767 && responsiveflag == false)
       {           
           responsiveflag = true;
           //fullpage_api.destroy('all');
       }
       else if (($(window).width()) >= 768)
       {

       }
   }
   /*--------------------------------------------------
	Function Page Progress
	---------------------------------------------------*/	
		
		function PageProgress() {
	  
			var progressPath = document.querySelector('.progress-page path');
			var pathLength = progressPath.getTotalLength();
			progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
			progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
			progressPath.style.strokeDashoffset = pathLength;
			progressPath.getBoundingClientRect();
			progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
			var updateProgress = function () {
				var scroll = $(window).scrollTop();
				var height = $(document).height() - $(window).height();
				var progress = pathLength - (scroll * pathLength / height);
				progressPath.style.strokeDashoffset = progress;
			}
			updateProgress();
			$(window).scroll(updateProgress);
			
	 }//End Page Progress	
	 PageProgress();
	 

	/*--------------------------------------------------
	Function FooterAppear
	---------------------------------------------------*/	
        FooterAppear();

		function FooterAppear() {
			
			if( $('.main').length > 0 ){
				$(window).scroll(function() {    
					var scroll = $(window).scrollTop();
				
					if (scroll >= 300) {					
						$(".progress-page, #page-action-holder").addClass('is-active');					
					} else {								
						$(".progress-page, #page-action-holder").removeClass('is-active');
					}
				});
			}
			
			var lastScroll = 0;
		
			$(window).scroll(function(){
				var scroll = $(window).scrollTop();
				if (scroll > lastScroll) {
					$(".progress-page, #page-action-holder").addClass("is-visible");
				} else if (scroll < lastScroll) {
					$(".progress-page, #page-action-holder").removeClass("is-visible");
				}
				lastScroll = scroll;
			});

			$('.scrolltotop').on('click', function(){
			    $('html, body').animate({
                    scrollTop: 0
                }, 1000);
                return false;
            })
	  
	  }//End FooterAppear
});