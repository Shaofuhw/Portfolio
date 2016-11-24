$(document).ready(function(){
	/* Toggle the text when click on Skill Box Button and change icon*/
	$(".skill-box").on("click", function(){
		$(this).find(".sb-text").fadeToggle("fast", "linear");
		$(this).find(".glyphicon").toggle();
		$(this).toggleClass("skill-box-active");
	});
});