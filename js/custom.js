

(function($) {

		"use strict";

		$(function(){


			animate_progressBars();

			animate_piecharts();
			
			init_bxslider();
			
			init_mobile_nav();
			
			init_counter();
			

			$('.portfolio-container').magnificPopup({
		  delegate: 'a', // child items selector, by clicking on it popup will open
		  type: 'image',
		   gallery:{
			enabled:true
		  }
		  // other options
		});
			
			
		/* ======== CURRENT MENU ITEM ======== */		
			$(document).scroll(function(){
				$.activeMenuItem();
			});

			$(document).ready(function(){
				$.activeMenuItem();
			});
			
			
		/* ======== SCROLL MENU ======== */
				var height_menu = $(".nav-height").css("height");
				height_menu = parseInt(height_menu,8);
				
				jQuery('#menu').localScroll({offset: {top: -height_menu},duration: 1000});
				
				
		/* ======== STICKY======== */
			$(window).scroll(function() {
				if ($(this).scrollTop() > 1){  
					$('.wrapper-nav').addClass("sticky");
				}
				else{
					$('.wrapper-nav').removeClass("sticky");
				}
			});
				
		});



		/* ==========================================================================
		   When the window is scrolled, do
		   ========================================================================== */
		   
			$(window).scroll(function() {				   
				
				animate_progressBars();
				animate_piecharts();
				
			});

		/* ==========================================================================
		   When the window is resized, do
		   ========================================================================== */
		   
			$(window).resize(function() {
				
				animate_progressBars();
				animate_piecharts();
				
			});
			
			
		/* ==========================================================================
		   When the window is loaded, do
		   ========================================================================== */
		   
			$(window).load(function() {
				
				animate_progressBars();
				animate_piecharts();
				
			});
			
		/* ==========================================================================
		   BX Slider
		   ========================================================================== */	
			
			function init_bxslider(){
				
				$('.bxslider').bxSlider({
				
					pager:true,
					nextText: "",
					prevText: "",
					auto:true,
					controls:false
				
				});
			
			}
			


		/* ==========================================================================
		   Animations
		   ========================================================================== */
			
			function animate_piecharts () {
				if (typeof($.fn.easyPieChart) != "function"){ 
					console.log('Error - easyPieChart script is not included!') 
					return false; 
				}
				
				// console.log('Piechart running: '+$('.chart').length);
				
				
				$('.pie-chart:in-viewport').each(function(){
				
					var barColor = $(this).attr('data-barColor');
					var trackColor = $(this).attr('data-trackColor');
					var lineWidth = $(this).attr('data-lineWidth');
					var lineCap = $(this).attr('data-lineCap');
					var scaleColor = $(this).attr('data-scaleColor');
					var size = $(this).attr('data-size');
					var animate = $(this).attr('data-animate');
				
					$(this).easyPieChart({
						// easing: 'easeOutElastic',
						barColor: barColor,
						trackColor: trackColor,
						lineWidth: lineWidth,
						lineCap: lineCap,
						scaleColor: 'transparent',
						size: size,
						animate: animate,
						
						onStep: function(from, to, percent) {
							$(this.el).find('.percent').text(Math.round(percent));
						},
						delay: 3000 
					});
				
				});
						
			}
			
		/* ==========================================================================
		   Counter
		   ========================================================================== */	
			
			function init_counter() {
			
				$('.counter').counterUp({
				delay: 15,
				time: 1000
				});
			
			}
			
		/* ==========================================================================
		   Progress Bars
		   ========================================================================== */	
			
			function animate_progressBars() {
				
				$('.progress-inner:in-viewport').each(function() {
					
					var $t = $('.progress-bg', this);
					
					if (!$t.hasClass("already-animated")) {
						$t.addClass("already-animated");
						$t.animate({
							width: $t.attr("data-width") + "%"
						}, 2000);
					}
					
				});

			}

			
		/* ==========================================================================
		   Mobile main-nav
		   ========================================================================== */	
			
			function init_mobile_nav() {
					
					if ($('#mobile-menu:visible').length){
						$('.sf-menu > li > a').click(function () {
						
							// $('#menu').fadeOut();
							$('#menu').removeAttr('style');
						
						});
					}
				
			}	 
			
			
		   $("#mobile-menu").click(function() {
			if ($('#menu:visible').length){
				$('#menu').fadeOut();
			}else{
				$('#menu').fadeIn();
			}
			
		  });
			
			
		/* ==========================================================================
		   Portfolio
		   ========================================================================== */	
			
			if (typeof $.fn.isotope != 'undefined') {
				
				$('.portfolio-container').imagesLoaded( function() {
				
					var container = $('.portfolio-container');
						
					container.isotope({
						itemSelector: '.portfolio-container .item',
						layoutMode: 'masonry',
						transitionDuration: '0.5s'
					});

					$('.filter-portfolio li a').click(function () {
						$('.filter-portfolio li a').removeClass('active');
						$(this).addClass('active');

						var selector = $(this).attr('data-filter');
						container.isotope({
							filter: selector
						});

						return false;
					});

					$(window).resize(function () {

						container.isotope({ });
					
					});
					
				});
				
			}
			


})(window.jQuery);
	