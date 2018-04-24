$(document).ready(function () {
	var $year = new Date().getFullYear(); 
	$("#year").html($year);

	$("header").click(()=> {
		$("hamburger").css({"background-color": "yellow", "font-size": "200%"});
	
	});	

});
