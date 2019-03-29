$(document).ready(function(){
	$("#header_menu").children(".container").children("ul").children("li").siblings().css({"list-style":"none","text-transform":"uppercase","font-family":"c","padding-top":"5%","font-size":"16px","font-weight":"500"});
	$("#header_menu").children(".container").children().css({"display":"-webkit-inline-box","height":"100%","width":"auto","padding-left":"0px"});
	$("#header_menu").children(".container").children("ul").children("li").siblings().children("ul").children("li").not(".features").children("a").addClass("header_menu_property_a");
	$("#header_menu").children(".container").children("ul").children("li").children("ul").children("li").children("a").children("span").addClass("header_menu_property_a_span");
	
	$("#header_menu").children(".container").children("ul").children("li").children("span").mouseenter(function(){
		$(this).css({"color":"#FE824C"});
	});
	
	$("#header_menu").children(".container").children("ul").children("li").children("span").mouseleave(function(){
		$(this).css({"color":"#323232"});
	});
	

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

$('.socials_img').children("h4").mouseenter(function(){
	$(this).css({"opacity":"0.5"});
	$(this).children("a").css({"text-decoration":"none"});
	$(this).mouseleave(function(){
		$(this).css({"opacity":"1"});
	});
});

$('.social_footer_content_img_corver_1').mouseenter(function(){

 	$(this).children("div").children("a").children("img").css({"filter":"grayscale(0%)","opacity":"1"});

	$(this).mouseleave(function(){
		$(this).children("div").children("a").children("img").css({"filter":"grayscale(100%)","opacity":"0.5"});
	});
});

// dang lam
$('.twitter_ourteam').mouseenter(function(){

 	$(this).css({"background-color":"rgb(234, 233, 241)","color":"#00abef"});

	$(this).mouseleave(function(){
		$(this).css({"background-color":"#00abef","color":"#fff"});
	});
});

$('.facebook_ourteam').mouseenter(function(){

 	$(this).css({"background-color":"rgb(234, 233, 241)","color":"#337ab7"});

	$(this).mouseleave(function(){
		$(this).css({"background-color":"#337ab7","color":"#fff"});
	});
});

$('.google_ourteam').mouseenter(function(){

 	$(this).css({"background-color":"rgb(234, 233, 241)","color":"#D93E2D"});

	$(this).mouseleave(function(){
		$(this).css({"background-color":"#D93E2D","color":"#fff"});
	});
});


$('.footer_content_right').children("div").children("ul").children("li").mouseenter(function(){

 	$(this).children("a").css({"color":"#2b82a7"});

	$(this).mouseleave(function(){
		$(this).children("a").css({"color":"#37aadb"});
	});
});

$('.show_img_person').children("div").not(".person_2").children("div").mouseenter(function(){

 	$(this).children("img").css({"filter":"grayscale(0%)"});

	$(this).mouseleave(function(){
		$(this).children("img").css({"filter":"grayscale(100%)"});
	});
});

$('.detail').children(".round").mouseenter(function(){

 	$(this).children("i").css({"opacity":"0.5"});

	$(this).mouseleave(function(){
		$(this).children("i").css({"opacity":"1"});
	});
});

$('.meet_our_team_content_img_footer').children(".hai").mouseenter(function(){

 	$(this).css({"color":"#cb5151"});

	$(this).mouseleave(function(){
		$(this).css({"color":"#102035"});
	});
});

$('.content_column_4').children("div").children("a").mouseenter(function(){
	
 	$(this).css({"color":"#e2d9d9"});

	$(this).mouseleave(function(){
		$(this).css({"color":"#fff"});
	});
});

});


$('.choose_menu .pages_children_div_2 .right').click(function() {
	transformSliderGallery('right')
})
$('.choose_menu .pages_children_div_2 .float').click(function() {
	transformSliderGallery('left')
})

function transformSliderGallery(direction) {
	var selectorSlider = $('.choose_menu .pages_children_div_1 > div');
	var nextImageWidthStep = 360;
	if (!selectorSlider.attr('data-transform')) {
		selectorSlider.attr('data-transform', 0)
	}
	var currentPositionImageTransform = Number(selectorSlider.attr('data-transform'));
	
	if (direction == 'right') {
		nextTransform = currentPositionImageTransform + nextImageWidthStep;
		selectorSlider.css("transform", "translateX(-"+nextTransform+"px)")
	} else {
		nextTransform = currentPositionImageTransform - nextImageWidthStep;
		if (nextTransform < 0) {
			nextTransform = -nextTransform;
			selectorSlider.css("transform", "translateX("+nextTransform+"px)")
		} else {
			selectorSlider.css("transform", "translateX(-"+nextTransform+"px)")
		}
		
	}
	
	selectorSlider.attr('data-transform', nextTransform)
}