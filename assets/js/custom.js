$(document).ready(function(){

	

	// Headline-JS
	$('.header-content').animatedHeadline({

	  animationType: "slide",
	  animationDelay: 2500,
	  barAnimationDelay: 3800,
	  barWaiting: 800,
	  lettersDelay: 50,
	  typeLettersDelay: 150,
	  selectionDuration: 500,
	  typeAnimationDelay: 1300,
	  revealDuration: 600,
	  revealAnimationDelay: 1500

	});

	// Owl-carosel
	$('.testi-area').owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
	});


	// Line-ProgressBar
	$('#jq').LineProgressbar({
	  percentage: 90 ,
	  ShowProgressCount: true,
	  duration: 2000,
	  fillBackgroundColor: '#009E66',
	  backgroundColor: '#EEEEEE',
	  radius: '0px',
	  height: '10px',
	  width: '100%'
	});

	$('#jq2').LineProgressbar({
	  percentage: 80 ,
	  ShowProgressCount: true,
	  duration: 2000,
	  fillBackgroundColor: '#009E66',
	  backgroundColor: '#EEEEEE',
	  radius: '0px',
	  height: '10px',
	  width: '100%'
	});

	$('#jq3').LineProgressbar({
	  percentage: 85 ,
	  ShowProgressCount: true,
	  duration: 2000,
	  fillBackgroundColor: '#009E66',
	  backgroundColor: '#EEEEEE',
	  radius: '0px',
	  height: '10px',
	  width: '100%'
	});

	$('#jq4').LineProgressbar({
	  percentage: 95 ,
	  ShowProgressCount: true,
	  duration: 2000,
	  fillBackgroundColor: '#009E66',
	  backgroundColor: '#EEEEEE',
	  radius: '0px',
	  height: '10px',
	  width: '100%'
	});

	$('#jq5').LineProgressbar({
	  percentage: 75 ,
	  ShowProgressCount: true,
	  duration: 2000,
	  fillBackgroundColor: '#009E66',
	  backgroundColor: '#EEEEEE',
	  radius: '0px',
	  height: '10px',
	  width: '100%'
	});

	$('#jq6').LineProgressbar({
	  percentage: 80 ,
	  ShowProgressCount: true,
	  duration: 2000,
	  fillBackgroundColor: '#009E66',
	  backgroundColor: '#EEEEEE',
	  radius: '0px',
	  height: '10px',
	  width: '100%'
	});


	
	// Work Popup 
	$('.work-popup').magnificPopup({
		type: 'image',
	  	gallery:{
	   		enabled:true
	  	}
	});


	// Scroll-btn
	$('.btn-sty2').click(function(){
		$('html,body').animate({
			scrollTop:0
		}, 1000);

		return false;
	});


	// Menu-Scroll
	$('.header-menu ul li a').click(function(){
        $('html,body').animate({
          scrollTop:$($(this).attr('href')).offset().top
        },1000);
        return false;
      });

	$('.nav-icon').click(function(){
		$('.header-menu ul').slideToggle(1000)

		return false;
	})
	
	// Mix It Up
	var mixer = mixitup('.work-area',{
	
		 
		});


});


$(window).scroll(function(){
	var scrollValue = $(this).scrollTop();

	if(scrollValue>500){
		$('.btn-sty2').fadeIn();
	}else{
		$('.btn-sty2').fadeOut();
	}

	if(scrollValue>300){
        $('.header-top').addClass('FixedHeader');
    }else{
        $('.header-top').removeClass('FixedHeader');
    }
})