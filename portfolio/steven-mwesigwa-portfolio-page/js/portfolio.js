$(document).ready(function () {
	var $year = new Date().getFullYear(); 
	$("#year").html($year);

	$("#maincontent, #porfolio, #about, #contact, footer").on( "click", ()=> {
		$("#hamburger").addClass("collapsed");
		$("#hamburger, #navbar-collapse-1").css({"aria-expanded": false});
		
		$("#navbar-collapse-1").css({"height": "1px"});
		$("#navbar-collapse-1").removeClass("collapse in collapsing");
		$("#navbar-collapse-1").addClass("collapse");
		
// 		alert("yes");
	
	});	

});
