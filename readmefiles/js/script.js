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
  TweenMax.to(window, 2.2, {scrollTo:{y:scrollYPos, x:0}, ease:Power2.easeInOut})
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
