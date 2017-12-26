$(document).ready(function(){
	/* Toggle the text when click on Skill Box Button and change icon*/
	$(".skill-box").on("mousedown", function(){
		$(this).find(".sb-text").fadeToggle("fast", "linear");
		$(this).find(".glyphicon").toggle();
		$(this).toggleClass("box-active");
	});

	$(".project-box").on("mousedown", function(){
		$(this).addClass("box-active");
	});

	$(".project-box").on("mouseup", function(){
		$(this).removeClass("box-active");
	});

	/* Open links of projects */
	$(".p-img-1").on("click", function(){
		window.open('https://shaofuhw.github.io/Portfolio/', '_blank');
	});

	$(".p-img-2").on("click", function(){
		window.open("https://droneweb.herokuapp.com/", '_blank');
	});

	$(".p-img-3").on("click", function(){
		window.open("https://www.youtube.com/watch?v=kmpxkKq3zNA", '_blank');
	});

	$(".snake").on("click", function(){
		if($(this).hasClass("p-img-4-1")){
			$(this).addClass("p-img-4-2");
			$(this).removeClass("p-img-4-1");
		} else if($(this).hasClass("p-img-4-2")){
			$(this).addClass("p-img-4-3");
			$(this).removeClass("p-img-4-2");
		} else if($(this).hasClass("p-img-4-3")){
			$(this).addClass("p-img-4-1");
			$(this).removeClass("p-img-4-3");	
		}
	});

	$(".p-img-5").on("click", function(){
		window.open("https://youtu.be/Ye0hFc3_5qw", '_blank');
	});

	$(".p-img-6").on("click", function(){
		window.open("https://github.com/Shaofuhw/MIPS-FPGA", '_blank');
	});

	$(".p-img-7").on("click", function(){
		window.open("http://caelikers.herokuapp.com/", '_blank');
	});
	/* Smooth scrol of nav hrefs */
	$(".nav a, .footer-links").on("click", function(){
		$('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 700);
	});

	/* Scroll to top */
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

});