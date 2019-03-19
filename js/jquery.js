$(document).ready(function(){
	$("#header_menu").children(".container").children("ul").children("li").siblings().css({"list-style":"none","text-transform":"uppercase","font-family":"c","padding-top":"5%","font-size":"16px","font-weight":"500"});
	$("#header_menu").children(".container").children().css({"display":"-webkit-inline-box","height":"100%","width":"auto","padding-left":"0px"});
	$("#header_menu").children(".container").children("ul").children("li").siblings().children("ul").children("li").not(".features").children("a").addClass("header_menu_property_a");
	$("#header_menu").children(".container").children("ul").children("li").children("ul").children("li").children("a").children("span").addClass("header_menu_property_a_span");
	/*$("#header_menu").children(".container").children("ul").children("li").children("ul").children("li").addClass("header_menu_property_ul_li_ul_li");*/
	
	$("#header_menu").children(".container").children("ul").children("li").not("#menu_features").children("ul").children("li").children("a").mouseenter(function(){
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
	$('#menu_pages_shortcodes___widgets').children("ul").addClass("centent_ul_shortcodes_widgets");		
	$('#menu_pages_shortcodes___widgets').children("ul").children("li").children("a").filter(".border").css({"border-bottom": "1px solid rgba(241, 233, 233, 0.13)"});
	$('#menu_pages_shortcodes___widgets').children("ul").children("li").children("a").addClass("header_menu_property_a");
	$('#menu_pages_shortcodes___widgets').children("ul").children("li").children("a").children("span").addClass("header_menu_property_a_span_span");
	/*page event*/
	$('#menu_pages_events').children("ul").addClass("centent_ul_events");		
	$('#menu_pages_events').children("ul").children("li").children("a").filter(".border").css({"border-bottom": "1px solid rgba(241, 233, 233, 0.13)"});
	$('#menu_pages_events').children("ul").children("li").children("a").addClass("header_menu_property_a");
	$('#menu_pages_events').children("ul").children("li").children("a").children("span").addClass("header_menu_property_a_span_span");

	$('#menu_pages_coming_soon').children("ul").addClass("centent_ul_coming_soon");		
	$('#menu_pages_coming_soon').children("ul").children("li").children("a").filter(".border").css({"border-bottom": "1px solid rgba(241, 233, 233, 0.13)"});
	$('#menu_pages_coming_soon').children("ul").children("li").children("a").addClass("header_menu_property_a");
	$('#menu_pages_coming_soon').children("ul").children("li").children("a").children("span").addClass("header_menu_property_a_span_span");

	$('#menu_pages_faq').children("ul").addClass("centent_ul_faq");		
	$('#menu_pages_faq').children("ul").children("li").children("a").filter(".border").css({"border-bottom": "1px solid rgba(241, 233, 233, 0.13)"});
	$('#menu_pages_faq').children("ul").children("li").children("a").addClass("header_menu_property_a");
	$('#menu_pages_faq').children("ul").children("li").children("a").children("span").addClass("header_menu_property_a_span_span");

 	$('#menu_pages').children("ul").children("li").children("ul").css({"display":"none"});	

 	$('#menu_pages').children("ul").children("li").siblings().mouseenter(function(){

 		
 		var a =  $(this).attr('id');
 		if(a == "menu_pages_shortcodes___widgets")
 		{
 			$(this).children("ul").css({"display":"block"});
			$(this).children("ul").css({"top":"-30px"});   
 			$(this).children("ul").animate({'margin-left': "250px"},300);
 			$(this).mouseleave(function(){
 			$(this).children("ul").css({"display":"none"});
 			$(this).children("ul").css({"top":"30px"});
 			$(this).children("ul").css({"margin-left":"315px"});
 			a = "";
 			});
 			
 		}
 		else
 		{
 			if(a == "menu_pages_events")
 			{			
	 			$(this).children("ul").css({"display":"block"});
				$(this).children("ul").css({"top":"-30px"});   
	 			$(this).children("ul").animate({'margin-left': "250px"},300);
	 			$(this).mouseleave(function(){
	 			$(this).children("ul").css({"display":"none"});
	 			$(this).children("ul").css({"top":"30px"});
	 			$(this).children("ul").css({"margin-left":"315px"});
	 			a = "";
	 			}); 				
 			}
 			else
 			{
 				if(a == "menu_pages_coming_soon")
 				{
		 			$(this).children("ul").css({"display":"block"});
					$(this).children("ul").css({"top":"-30px"});   
		 			$(this).children("ul").animate({'margin-left': "250px"},300);
		 			$(this).mouseleave(function(){
		 			$(this).children("ul").css({"display":"none"});
		 			$(this).children("ul").css({"top":"30px"});
		 			$(this).children("ul").css({"margin-left":"315px"});
		 			a = "";
		 			}); 
 				}
 				else
 				{
					if(a == "menu_pages_faq")
	 				{
			 			$(this).children("ul").css({"display":"block"});
						$(this).children("ul").css({"top":"-30px"});   
			 			$(this).children("ul").animate({'margin-left': "250px"},300);
			 			$(this).mouseleave(function(){
			 			$(this).children("ul").css({"display":"none"});
			 			$(this).children("ul").css({"top":"30px"});
			 			$(this).children("ul").css({"margin-left":"315px"});
			 			a = "";
			 			}); 
	 				} 					
 				}

 			}
 		}

 	});

/*the header*/
$('#menu_features').children("ul").children("li").children("ul").filter(".header_ul").css({"height":"auto"});
$('#menu_features').children("ul").children("li").children("ul").children("li").filter(".border").css({"border-bottom": "1px solid #dadada"});
$('#menu_features').children("ul").children("li").children("ul").children("li").children("a").addClass("menu_features_property_a");
$('#menu_features').children("ul").children("li").children("ul").children("li").children("a").children("span").addClass("menu_features_property_a_span");

	$("#menu_features").children("ul").children("li").children("ul").children("li").children("a").mouseenter(function(){
		$(this).css({"opacity":"0.4","text-decoration":"none"});
	});

	$("#menu_features").children("ul").children("li").children("ul").children("li").children("a").mouseleave(function(){
		$(this).css({"opacity":"1","text-decoration":"none"});
	});

/* bat dau voi the gallery*/
	$('#menu_gallery').children("ul").children("li").children("ul").addClass("content_ul_gallery");

	$('#menu_gallery').children("ul").children("li").children("ul").children("li").children("a").filter(".border").css({"border-bottom": "1px solid rgba(241, 233, 233, 0.13)"});
	$('#menu_gallery').children("ul").children("li").children("ul").children("li").children("a").addClass("header_menu_property_a");
	$('#menu_gallery').children("ul").children("li").children("ul").children("li").children("a").children("span").addClass("header_menu_property_a_span_span");

 	$('#menu_gallery').children("ul").children("li").siblings().mouseenter(function(){

 		 	$(this).children("ul").css({"display":"block"});

 			$(this).mouseleave(function(){
 			$(this).children("ul").css({"display":"none"});
 			a = "";
 			});

 	});
/*bat dau voi blog*/
	$('#menu_blog').children("ul").children("li").children("ul").addClass("content_ul_gallery");

	$('#menu_blog').children("ul").children("li").children("ul").children("li").children("a").filter(".border").css({"border-bottom": "1px solid rgba(241, 233, 233, 0.13)"});
	$('#menu_blog').children("ul").children("li").children("ul").children("li").children("a").addClass("header_menu_property_a");
	$('#menu_blog').children("ul").children("li").children("ul").children("li").children("a").children("span").addClass("header_menu_property_a_span_span");

 	$('#menu_blog').children("ul").children("li").siblings().mouseenter(function(){

 		 	$(this).children("ul").css({"display":"block"});

 			$(this).mouseleave(function(){
 			$(this).children("ul").css({"display":"none"});
 			a = "";
 			});

 	});


});

