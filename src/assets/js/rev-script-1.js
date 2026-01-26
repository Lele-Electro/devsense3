// (function ($) {
	
    'use strict';	
			

	var revapi251, tpj;	
	function loadSlider1() {		
		if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded",onLoad); else onLoad();	
		function onLoad() {				
			if (tpj===undefined) { tpj = jQuery; if("off" == "on") tpj.noConflict();}
		if(tpj("#rev_slider_251_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_251_1");
		}else{
			revapi251 = tpj("#rev_slider_251_1").show().revolution({
				sliderType:"standard",
				jsFileLocation:"revolution/js/",
				sliderLayout:"fullscreen",
				dottedOverlay:"none",
				delay:9000,
				navigation: {
					keyboardNavigation:"on",
					keyboard_direction: "vertical",
					mouseScrollNavigation:"off",
					mouseScrollReverse:"default",
					onHoverStop:"off",
					bullets: {
						enable:true,
						hide_onmobile:true,
						//hide_under:1024,
						style:"hephaistos",
						hide_onleave:false,
						direction:"vertical",
						h_align:"right",
						v_align:"center",
						h_offset:30,
						v_offset:30,
						space:5,
						tmp:''
					}
				},

				responsiveLevels:[1240,1024,778,480],
				visibilityLevels:[1240,1024,778,480],
				gridwidth:[1360,1024,768,480],
				gridheight:[955,955,960,720],
				lazyType:"none",
				parallax: {
					type:"mouse",
					origo:"slidercenter",
					speed:400,
					speedbg:0,
					speedls:0,
					levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
				},
				shadow:0,
				spinner:"off",
				stopLoop:"on",
				stopAfterLoops:-1,
				stopAtSlide:1,
				shuffle:"off",
				autoHeight:"off",
				fullScreenAutoWidth:"on",
				fullScreenAlignForce:"off",
				hideThumbsOnMobile:"off",
				fullScreenOffsetContainer: "",
				fullScreenOffset: "0px",
				disableProgressBar:"on",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}; /* END OF revapi call */
		
	 }; /* END OF ON LOAD FUNCTION */
	}; /* END OF WRAPPING FUNCTION */

	function killSlider1() {
		if (tpj===undefined) { 
			tpj = jQuery; 
			
			if("off" == "on") 
				tpj.noConflict();
		}
		tpj("#rev_slider_251_1").revkill();	
	}

// })(jQuery);

