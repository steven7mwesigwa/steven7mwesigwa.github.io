$(document).ready(function () {
	var $year = new Date().getFullYear(); 
	$("#year").html($year);

	$("#maincontent").on( "click", ()=> {
		$("hamburger").css({"background-color": "yellow", "font-size": "200%"});
		alert("yes");
	
	});	

});
