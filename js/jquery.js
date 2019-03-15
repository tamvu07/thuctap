$(document).ready(function(){
	$("#header_menu").children(".container").children("ul").children("li").siblings().css({"list-style":"none","text-transform":"uppercase","font-family":"c","padding-top":"5%","font-size":"16px","font-weight":"500"});
	$("#header_menu").children(".container").children().css({"display":"-webkit-inline-box","height":"100%","width":"auto","padding-left":"0px"});
	$("#header_menu").children(".container").children("ul").children("li").children("ul").children("li").children("a").addClass("header_menu_property_a");
	$("#header_menu").children(".container").children("ul").children("li").children("ul").children("li").children("a").children("span").addClass("header_menu_property_a_span");
	/*$("#header_menu").children(".container").children("ul").children("li").children("ul").children("li").addClass("header_menu_property_ul_li_ul_li");*/
	
	$("#header_menu").children(".container").children("ul").children("li").children("ul").children("li").children("a").mouseenter(function(){
		$(this).css({"opacity":"0.4"});
	});

	$("#header_menu").children(".container").children("ul").children("li").children("ul").children("li").children("a").mouseleave(function(){
		$(this).css({"opacity":"1"});
	});

	$("#header_menu").children(".container").children("ul").children("li").children("ul").children("li").children("a").filter(".border").css(  {"border-bottom": "1px solid rgba(0, 0, 0, 0.1)"});

	$("#header_menu").children(".container").children("ul").children("li").siblings().mouseenter(function(){
 		$(this).children("ul").css({"display":"block"});
		$(this).children("ul").animate({top: "81px"}, 400);
 	});

 	$("#header_menu").children(".container").children("ul").children("li").siblings().mouseleave(function(){
 		$(this).children("ul").css({"display":"none"});
		$(this).children("ul").animate({top: "100px"}, 400);
 	});


 	// lay ra ul cua con cua pages
	$('#menu_pages').children("ul").children("li").children("ul").addClass("centent_ul_shortcodes_widgets");		
	$('#menu_pages').children("ul").children("li").children("ul").children("li").children("a").filter(".border").css({"border-bottom": "1px solid rgba(241, 233, 233, 0.13)"});
	$('#menu_pages').children("ul").children("li").children("ul").children("li").children("a").addClass("header_menu_property_a");
	$('#menu_pages').children("ul").children("li").children("ul").children("li").children("a").children("span").addClass("header_menu_property_a_span_span");
 	$('#menu_pages').children("ul").children("li").children("ul").css({"display":"none"});	

 	$('#menu_pages').children("ul").children("li").siblings().mouseenter(function(){
 		var a =  $(this).attr('id');
 		if(a == "menu_pages_shortcodes___widgets")
 		{
 			$(this).children("ul").css({"display":"block"});
			$(this).children("ul").css({"top":"-30px"});   /* animate({top: "-30px"},0);*/
 			$(this).children("ul").animate({'margin-left': "250px"},300);
 			$(this).mouseleave(function(){
 			$(this).children("ul").css({"display":"none"});
 			$(this).children("ul").css({"top":"30px"});
 			$(this).children("ul").css({"margin-left":"315px"});     /*animate({'margin-left': "315px"},1);*/	
 			a = "";
 			});
 			
 		}

 	});


});

