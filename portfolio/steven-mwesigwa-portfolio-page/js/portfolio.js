$(document).ready(function () {
	var $year = new Date().getFullYear(); 
	$("#year").html($year);

	$("#maincontent").on( "click", ()=> {
		$("hamburger").css({"class": "navbar-toggle collapsed"});
// 		alert("yes");
	
	});	

});
