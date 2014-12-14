/* Author:

*/

 var ielt9 = false;
 var isiPad = false;
 var windowheight = '';
 var mtopagence = '';
 var mtopagence0 = '';
 var mtopreal = '' ;
 var mtopreal0 = '' ;
 var mtopref = '';
 var mtopref0 = '';
 var projet = 0;
 var map =  '';


$(window).bind("load resize", function(){

	 windowheight = $(window).height();
		Wheight = Math.round(windowheight + 1);
		
		$('.slide-contact').height(Wheight);
		$('.slide').height(Wheight);
		mtopagence = (Wheight - 376 - 65)/2 ;
		mtopreal = (windowheight- 500 - 65)/2 ;
		mtopref = (windowheight - 400 - 65)/2 ;
		mtopagence0 = mtopagence * 2;
		mtopreal0 = mtopreal * 2;
		mtopref0 = mtopref * 2;
		if((ielt9 == true) || (isiPad == true)){
			$('#agence #agence-content .inner').css('paddingTop',( mtopagence - 50)+'px');
			$('#realisations #real-content .inner').css('paddingTop', mtopreal+'px');
			$('#services #services-content .inner').css('paddingTop', (mtopagence - 10)+'px');
			$('#references #references-content .inner').css('paddingTop', mtopref+'px')
		} 
		else {
			$('#agence #agence-content .inner').css('paddingTop', (mtopagence0 - 50)+'px');
			$('#realisations #real-content .inner').css('paddingTop', mtopreal0+'px');
			$('#services #services-content .inner').css('paddingTop', (mtopagence0 - 10)+'px');
			$('#references #references-content .inner').css('paddingTop', mtopref0+'px')
		}
	});
	
$(document).ready(function(){

			// var FullscreenrOptions = {  width: 1600, height: 1000, bgID: '.bg' };
			// jQuery.fn.fullscreenr(FullscreenrOptions);
			// if((ielt9 == true)|| (isiPad == true)){
			// 	var FullscreenrOptions = {  width: 2048, height: 1154, bgID: '.bghome' };
			// 	jQuery.fn.fullscreenr(FullscreenrOptions);	
			// }
	
	var menuopen = false;
$(".gotohome").bind('click', { id: '#home' }, scroller);
$(".gotoagence").bind('click', { id: '#agence' }, scroller);
$(".gotorealisations").bind('click', { id: '#realisations' }, scroller);
$(".gotoservices").bind('click', { id: '#services' }, scroller);
$(".gotoreferences").bind('click', { id: '#references' }, scroller);
$(".gotocontact").bind('click', { id: '#contact' }, scroller);

function scroller(event){
  var scrollYPos = $(event.data.id).offset().top;
  event.preventDefault();
  TweenMax.to(window, 2.2, {scrollTo:{y:scrollYPos, x:0}, ease:Power4.easeOut})
  }

function openslider(){
  var top = 0;
  var none = "none";
  var ptop = '100%';
  var slider = $('#slider-realisations');
  var pslider = $('.countdown');
  var tl = new TimelineMax();
  tl.to(pslider, 1.4, {css:{marginTop:top}});//Chrome pb
  tl.to(slider, .2, {css:{marginTop:top}}, -0.2);//Chrome pb
  tl.to(pslider, .8, {css:{opacity:top}}, 0.4);
  tl.to(pslider, .1, {css:{display:none}}, -0.1);
   }
function closeslider(){
  var top = '-100%';
  var ptop = 0;
  var opcity = 1;
  var blck = "block";
  var slider = $('#slider-realisations');
  var pslider = $('.countdown');
  var tl = new TimelineMax();
  tl.to(slider, 0.9, {css:{marginTop:top}});
  tl.to(pslider, 0.9, {css:{marginTop:top}});
  tl.to(pslider, 0.1, {css:{opacity:opcity}}, 0.1);
  tl.to(pslider, 0.1, {css:{display:blck}}, -0.1);
}
$('.real a.projection').bind('click', function(e){
	e.preventDefault();
	openslider()
});
$('a.close-item').bind('click', function(e){
	e.preventDefault();
	closeslider();
	setTimeout( function(){
		$('.countdown').stop().css({opacity: 1});
	}, 800);
});

$('.paris').hover(
    function() {
        $('.wmap').stop().animate({
            backgroundPositionX:0 
        }, 300);
    }, function() {
        $('.wmap').stop().animate({
            backgroundPositionX: -445 
        }, 300);
    });
$('.montreal').hover(
    function() {
        $('.wmap').stop().animate({
            backgroundPositionX:-890 
        }, 300);
    }, function() {
        $('.wmap').stop().animate({
            backgroundPositionX: -445 
        }, 300);
    });


$(".logo").hover(function(){
    $(this).filter(':not(:animated)').animate({ opacity: 1 }, 200);
	//$(this).effect("scale", { percent: 150,origin:'center'}, 600);
}, function() {
	 $(this).animate({ opacity: 0.4 }, 800)
});

$(window).bind("load resize", function(){
	if((ielt9 == false) || (isiPad == false)){
	var controller = $.superscrollorama();
//alert(mtopagence);
	 controller.addTween(
		'#agence',
		(new TimelineLite())
			.append([
				TweenMax.fromTo($('#agence .languette'), 1.2, {css:{top: 0}, immediateRender:true}, {css:{top: -200}}),
				TweenMax.fromTo($('#agence .languette-back'), 1.2, {css:{bottom: -100}, immediateRender:true}, {css:{bottom: 0}}),  
				TweenMax.fromTo($('#agence  #agence-content .inner'), 1.8, {css:{paddingTop: mtopagence0}, immediateRender:true}, {css:{paddingTop: mtopagence}}),
				]) 
			);
	controller.addTween(
		'#realisations',
		(new TimelineLite())
			.append([
				TweenMax.fromTo($('#realisations .languette'), 1.3, {css:{top: 0}, immediateRender:true}, {css:{top: -200}}), 
				TweenMax.fromTo($('#realisations .languette-back'), 1.3, {css:{bottom: -100}, immediateRender:true}, {css:{bottom: 0}}),  
				TweenMax.fromTo($('#realisations #real-content .inner'), 1.8, {css:{paddingTop: mtopreal0}, immediateRender:true}, {css:{paddingTop: mtopreal}}),
				])
			);
	controller.addTween(
		'#services',
		(new TimelineLite())
			.append([
				TweenMax.fromTo($('#services .languette'), 1.4, {css:{top: 0}, immediateRender:true}, {css:{top: -200}}), 
				TweenMax.fromTo($('#services .languette-back'), 1.4, {css:{bottom: -100}, immediateRender:true}, {css:{bottom: 0}}),
				TweenMax.fromTo($('#services  #services-content .inner'), 1.8, {css:{paddingTop: mtopagence0}, immediateRender:true}, {css:{paddingTop: mtopagence}}),
				])
			);
	controller.addTween(
		'#references',
		(new TimelineLite())
			.append([ 
				TweenMax.fromTo($('#references .languette'), 1.5, {css:{top: 0}, immediateRender:true}, {css:{top: -200}}), 
				TweenMax.fromTo($('#references .languette-back'), 1.5, {css:{bottom: -100}, immediateRender:true}, {css:{bottom: 0}}),
				TweenMax.fromTo($('#references #references-content .inner'), 1.8, {css:{paddingTop: mtopref0}, immediateRender:true}, {css:{paddingTop: mtopref}}),
				])
			);
			
	controller.addTween(
		'#contact',
		(new TimelineLite())
			.append([
				TweenMax.fromTo($('#contact .languette'), 2, {css:{marginTop: 0}, immediateRender:true}, {css:{marginTop: -200}}), 
				TweenMax.fromTo($('#contact .languette-back'), 2, {css:{bottom: -100}, immediateRender:true}, {css:{bottom: 0}})
				])//, 1900  scroll duration of tween 
			);		
		}
	})	
});

var wrapper = $('#agence-content, #real-content, #services-content, , #references-content');
	wrapper.kinetic({
		y : false
	});
	$('#left').mousedown(function(){
			wrapper.kinetic('start', { velocity: -40 });
	});
	$('#left').mouseup(function(){
			wrapper.kinetic('end');
	});
	$('#right').mousedown(function(){
			wrapper.kinetic('start', { velocity: 40 });
	});
	$('#right').mouseup(function(){
			wrapper.kinetic('end');
	}); 

$('a#nextslide').bind('click', function(e){
	e.preventDefault();
});
$('a#prevslide').bind('click', function(e){
	e.preventDefault();
});	


var fkStyles = [
  {
	featureType:	'water',
	elementType:	'all',
	stylers: [	
		{ saturation: -100 },
		{ lightness: -80}
			]
  },
{
  	featureType:	'landscape',
	elementType: 'all',
	stylers: [
		{ saturation: -100 },
		{ lightness: -80}
			]
  },
{
	featureType:	'all',
	elementType: 'labels',
	stylers: [
			]
  },
{
  	featureType:	'administrative',
	elementType: 'all',
	stylers: [
		{ visibility:	'off'}
			]
  },
{
  	featureType:	'poi',
	elementType: 'all',
	stylers: [
		{ visibility:	'off'}
			]
  },
{
  	featureType:	'road',
	elementType: 'all',
	stylers: [	
		{ saturation: -100 },
		{ lightness: -50}
			]
  },
  {
  	featureType:	'transit',
	elementType: 'all',
	stylers: [
		{ visibility:	'off'}
		]
  }
]


jQuery(function($){
		var di = 0;
		//var mh = 0;
		var ph = 0;		
				$.supersized({
					// Functionality
					slideshow               :   1,			// Slideshow on/off
					autoplay				:	di,			// Slideshow starts playing automatically
					start_slide             :   1,			// Start slide (0 is random)
					stop_loop				:	0,			// Pauses slideshow on last slide
					random					: 	0,			// Randomize slide order (Ignores start slide)
					slide_interval          :   5000,		// Length between transitions
					transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
					transition_speed		:	700,		// Speed of transition
					new_window				:	1,			// Image links open in new window/tab
					pause_hover             :   ph,			// Pause slideshow on hover
					keyboard_nav            :   1,			// Keyboard navigation on/off
					performance				:	0,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
					image_protect			:	0,			// Disables image dragging and right click with Javascript
															   
					// Size & Position						   
					min_width		        :   0,			// Min width allowed (in pixels)
					min_height		        :   /*mh*/0,			// Min height allowed (in pixels)
					vertical_center         :   1,			// Vertically center background
					horizontal_center       :   1,			// Horizontally center background
					fit_always				:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
					fit_portrait         	:  /* fp*/1,			// Portrait images will not exceed browser height
					fit_landscape			:  /* fl*/0,			// Landscape images will not exceed browser width
															   
					// Components							
					slide_links				:	'blank',	// Individual links for each slide (Options: false, 'number', 'name', 'blank')
					thumb_links				:	0,			// Individual thumb links for each slide
					thumbnail_navigation    :   0,			// Thumbnail navigation
					slides 					:  	[			// Slideshow Images
													//IGO -->	
														{image : 'img/real/IGO/IGO_WEB_1.jpg', title : '', project : '1' },
														{image : 'img/real/IGO/IGO_WEB_2.jpg', title : '' },  
														{image : 'img/real/IGO/IGO_WEB_3.jpg', title : '' }, 
														{image : 'img/real/IGO/IGO_WEB_4.jpg', title : '' }, 
													
													//KPSULE -->	
														{image : 'img/real/KPSULE/KPSULE_WEB_1.jpg', title : '', project : '2' },
														{image : 'img/real/KPSULE/KPSULE_WEB_2.jpg', title : '' },  
														{image : 'img/real/KPSULE/KPSULE_WEB_3.jpg', title : '' }, 
														{image : 'img/real/KPSULE/KPSULE_WEB_4.jpg', title : '' }, 														
														
													//MONTSOURIS -->	
														{image : 'img/real/Montsouris/MONTS_WEB_1.jpg', title : '', project : '3' },
														{image : 'img/real/Montsouris/MONTS_WEB_2.jpg', title : '' },  
														{image : 'img/real/Montsouris/MONTS_WEB_3.jpg', title : '' }, 
														{image : 'img/real/Montsouris/MONTS_WEB_4.jpg', title : '' },

													//ALEXANDRE R -->	
														{image : 'img/real/ALEXANDRE_R/ALEX_WEB_1.jpg', title : '', project : '4' },
														{image : 'img/real/ALEXANDRE_R/ALEX_WEB_2.jpg', title : '' },  
														{image : 'img/real/ALEXANDRE_R/ALEX_WEB_3.jpg', title : '' }, 
														{image : 'img/real/ALEXANDRE_R/ALEX_WEB_4.jpg', title : '' }, 

													//MILKA -->	
														{image : 'img/real/MILKA/MILKA_WEB_1.jpg', title : '', project : '5' },
														{image : 'img/real/MILKA/MILKA_WEB_2.jpg', title : '' },  
														{image : 'img/real/MILKA/MILKA_WEB_3.jpg', title : '' }, 
														{image : 'img/real/MILKA/MILKA_WEB_4.jpg', title : '' },  

													//CARAMBAR -->	
														{image : 'img/real/Carambar/CARAMBAR_WEB_1.jpg', title : '', project : '6' },
														{image : 'img/real/Carambar/CARAMBAR_WEB_2.jpg', title : '' },  
														{image : 'img/real/Carambar/CARAMBAR_WEB_3.jpg', title : '' }, 
														{image : 'img/real/Carambar/CARAMBAR_WEB_4.jpg', title : '' },
														
													//POLY -->	
														{image : 'img/real/POLY/POLY_WEB_1.jpg', title : '', project : '7' },
														{image : 'img/real/POLY/POLY_WEB_2.jpg', title : '' },  
														{image : 'img/real/POLY/POLY_WEB_3.jpg', title : '' }, 
														{image : 'img/real/POLY/POLY_WEB_4.jpg', title : '' },
														{image : 'img/real/POLY/POLY_WEB_5.jpg', title : '' },
														
													//RNCSM -->	
														{image : 'img/real/RNCSM/RNCSM_WEB_1.jpg', title : '', project : '8' },
														{image : 'img/real/RNCSM/RNCSM_WEB_2.jpg', title : '' },  
														{image : 'img/real/RNCSM/RNCSM_WEB_3.jpg', title : '' }, 
														{image : 'img/real/RNCSM/RNCSM_WEB_5.jpg', title : '' },	
													
													//DEAD ISLAND -->	
														{image : 'img/real/DEAD_ISLAND/DEAD_WEB_1.jpg', title : '', project : '9' },
														{image : 'img/real/DEAD_ISLAND/DEAD_WEB_2.jpg', title : '' },  
														{image : 'img/real/DEAD_ISLAND/DEAD_WEB_3.jpg', title : '' }, 
														{image : 'img/real/DEAD_ISLAND/DEAD_WEB_4.jpg', title : '' },	
														
													//SOUPLINE -->	
														{image : 'img/real/SOUPLINE/SOUPLINE_WEB_1.jpg', title : '', project : '10' },
														{image : 'img/real/SOUPLINE/SOUPLINE_WEB_2.jpg', title : '' },  
														{image : 'img/real/SOUPLINE/SOUPLINE_WEB_3.jpg', title : '' }, 
														{image : 'img/real/SOUPLINE/SOUPLINE_WEB_4.jpg', title : '' },
														{image : 'img/real/SOUPLINE/SOUPLINE_WEB_5.jpg', title : '' },
														
													//PI -->	
														{image : 'img/real/PI/PI_WEB_1.jpg', title : '', project : '11' },
														{image : 'img/real/PI/PI_WEB_2.jpg', title : '' },  
														{image : 'img/real/PI/PI_WEB_3.jpg', title : '' }, 
														{image : 'img/real/PI/PI_WEB_4.jpg', title : '' },
														{image : 'img/real/PI/PI_WEB_5.jpg', title : '' },
														{image : 'img/real/PI/PI_WEB_6.jpg', title : '' }	

												],
												
					// Theme Options			   
					progress_bar			:	0,			// Timer for each slide							
					mouse_scrub				:	0
					
				});
		    });
			//Assign handlers to the simple direction handlers.
			var swipeOptions=
			{
				swipe:swipe,
				threshold:100
			}
			
			$(function()
			{			
				//Enable swiping...
				$("#slider").swipe( swipeOptions );

			});
		
			//Swipe handlers.
			//The only arg passed is the original touch event object			
			function swipe(event, direction)
			{
				if (direction == "left") {
					api.nextSlide();
				}
				else if (direction == "right") {
					api.prevSlide();
				}
			}
		/*	setTimeout(function(){	
				$('.slide-0, .slide-4, .slide-8, .slide-12, .slide-16, .slide-20, .slide-24, .slide-29, .slide-33, .slide-37, .slide-42').addClass('firstfold');
			}, 200);*/
/***MENU******/		
if (isiPad == true) {
	$("ul li").find('ul:first').stop().show().animate({
	                        "opacity" : 1,
							"height" : 55
	                    }, 300)
	$('.kinetic-active').css({marginTop:'135px'});
	$('.inner').css({marginTop:'0'})
}
else {
	$("ul li").hover(function(){
	                    $(this).find('ul:first').stop().show().animate({
	                        "opacity" : 1,
							"height" : 55
	                    }, 300)
						$(this).find('.openmenu').fadeOut(200)}
						,function(){ 		
	                		$(this).find('ul:first').stop().animate({
	                        	"opacity" : 0,
								"height" : 0
								},100)
	               		 	$(this).find('.openmenu').fadeIn(200)
					});
}
/******GMAPS******/
	$("a.close").click(function(c){
		c.preventDefault();
			$("#contact_form").animate({"height": "85px"}, "slow");
			$("a.close").css('display', 'none');
			$("a.open").css('display', 'block');	
	});
	
	$("a.open").click(function(c){
		c.preventDefault();
			$("#contact_form").animate({"height": "500px"}, "slow");
			$("a.open").css('display', 'none');
			$("a.close").css('display', 'block');
	});
	if((ielt9 == false) || (isiPad == false)){
		var beepOne = $("#son-poussin")[0];
		$(".chicken")
			.hover(function() {
				beepOne.play();
			});	
		$(window).bind("load resize", function(){
			setTimeout(function(){
		 var bghomeheight = $('#video_video').height();
		 var bghomewidth = $('#video_video').width();
		 var bghometop = $('#video_video').position();
		   // $('.bghome').css({height: bghomeheight, width: bghomewidth, top : bghometop.top , left : bghometop.left}) 
			},300);
		});
	}
/*************MAIL POST**************/
$(document).ready(function(){
	$("#sendmail").click(function(){
		var valid = '';
		var isr = ' doit être rempli.';
		var isrm = ' est requis.';
		var nom = $("#nom").val();
		var mail = $("#mail").val();
		var tel = $("#tel").val();
		var societe = $("#societe").val();
		var msg = $("#msg").val();
		var email_ = $('#email').val();
			if (nom.length<1) {
				valid += '<br />Le champ NOM PR&Eacute;NOM'+isr;
			}
			if (!mail.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
				valid += '<br />Un Email valide'+isrm;
			}
			if (msg.length<1) {
				valid += '<br />Le champ MESSAGE'+isr;
			}
			if( email_ != ''){
				valid += '<br />';
			}
			if (valid!='') {
				$("#response").fadeIn("slow");
				$("#response").html("<span>Une erreur est survenue :</span>"+valid);
			}
			else {
			var datastr ='nom=' + nom + '&mail=' + mail + '&tel=' + tel + '&societe=' + societe + '&msg=' + msg + '&email_=' + email_;
				$("#response").css("display", "block");
				$("#response").html("Envoi du message…. ");
				$("#response").fadeIn("slow");
				setTimeout("send('"+datastr+"')",2000);
			}
		return false;
		});
	});
	function send(datastr){
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: datastr,
			cache: false,
			success: function(html){
				$("#response").fadeIn("slow");
				$("#response").html(html);
				setTimeout('$("#response").fadeOut("slow")',2000);
			}
	});
}