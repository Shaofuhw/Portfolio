$(document).ready(function(){
	/* Toggle the text when click on Skill Box Button and change icon*/
	$(".sb-btn-toggle").on("click", function(){
		$(this).parent().find(".sb-text").fadeToggle("fast", "linear");
		$(this).find(".glyphicon").toggle();
	});
});