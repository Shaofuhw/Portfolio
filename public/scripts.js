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
		window.open("https://github.com/Shaofuhw/DroneWeb", '_blank');
	});

	$(".p-img-3").on("click", function(){
		window.open("https://www.youtube.com/watch?v=kmpxkKq3zNA", '_blank');
	});
	
	/* Smooth scrol of nav hrefs */
	$(".nav a").on("click", function(){
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