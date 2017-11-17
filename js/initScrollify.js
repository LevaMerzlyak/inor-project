$(function() {
	var objects 		= $('.objects')
		,objectSvg 		= objects.find('.objectsSvg__wrap')
		,objectSlider 	= objects.find('.objectSlider')
		,objectNav 		= objects.find('.slider__nav')
		,company 	= $('.company')
		,companySvg = company.find('.companySvg__wrap')
		,companyTxt = company.find('.company__txt')
		,companyVid = company.find('.company__video')
		,reputation = $('.reputation')
		,reputationGrey = reputation.find('.reputation__txt')
		,reputationSvg = reputation.find('.reputationSvg__wrap')
		,reputationTxt = reputation.find('.main__txt_reputation')
		,reputationWht = reputation.find('.reputation__logos')
		,reputationLogos = reputation.find('.reputationLogo__wrap')
		;
	$.scrollify({
		section : ".scrollifyClass",
		scrollbars: true,
		scrollSpeed: 1500,
		standardScrollElements: ".slide__article, .main__video",
		setHeights: false,
		before: function(i,panels) {
    		var ref = panels[i].attr('data-section-name');

    		$('.pagination a.pag__link_active').removeClass('pag__link_active');

    		$('.pagination a.pag__link[href=\\#' + ref + ']').addClass('pag__link_active');

    		if(ref === 'main') {
    			$('.pagination').addClass('pagination_main');
    			$('.nav__wrap').addClass('nav__wrap_main');
    		} else {
    			$('.pagination').removeClass('pagination_main');
    			$('.nav__wrap').removeClass('nav__wrap_main');

    			objectSvg.removeClass('animated').removeClass('fadeInUp');
    			objectSlider.removeClass('animated2').removeClass('fadeInUp');
    			objectNav.removeClass('animated2').removeClass('fadeInUpBig');

    			companySvg.removeClass('animated3').removeClass('fadeInLeftBig');
    			companyTxt.removeClass('animated2').removeClass('fadeInUp');
    			companyVid.removeClass('animated3').removeClass('fadeInRightBig');

    			reputationGrey.removeClass('animated2').removeClass('fadeInLeftBig');
    			reputationWht.removeClass('animated3').removeClass('fadeInUpBig');
    			reputationSvg.removeClass('animated-d').removeClass('fadeIn');
    			reputationTxt.removeClass('animated-d').removeClass('fadeIn');
    		}

    		if((ref === 'main') || (ref === 'objects') || (ref === 'company')) {
    			$('.pagination a.pag__arrow.arrow_up').hide();
    			$('.pagination a.pag__arrow.arrow_down').show();
    		} else {
    			$('.pagination a.pag__arrow.arrow_down').hide();
    			$('.pagination a.pag__arrow.arrow_up').show();
    		}

    		if(ref === 'objects') {
    			objectSvg.addClass('animated').addClass('fadeInUp');
    			objectSlider.addClass('animated2').addClass('fadeInUp');
    			objectNav.addClass('animated2').addClass('fadeInUpBig');

    			companySvg.removeClass('animated3').removeClass('fadeInLeftBig');
    			companyTxt.removeClass('animated2').removeClass('fadeInUp');
    			companyVid.removeClass('animated3').removeClass('fadeInRightBig');

    			reputationGrey.removeClass('animated2').removeClass('fadeInLeftBig');
    			reputationWht.removeClass('animated3').removeClass('fadeInUpBig');
    			reputationSvg.removeClass('animated-d').removeClass('fadeIn');
    			reputationTxt.removeClass('animated-d').removeClass('fadeIn');
    		}
    		if(ref === 'company') {
    			companySvg.addClass('animated3').addClass('fadeInLeftBig');
    			companyTxt.addClass('animated2').addClass('fadeInUp');
    			companyVid.addClass('animated3').addClass('fadeInRightBig');

    			objectSvg.removeClass('animated').removeClass('fadeInUp');
    			objectSlider.removeClass('animated2').removeClass('fadeInUp');
    			objectNav.removeClass('animated2').removeClass('fadeInUpBig');

    			reputationGrey.removeClass('animated2').removeClass('fadeInLeftBig');
    			reputationWht.removeClass('animated3').removeClass('fadeInUpBig');
    			reputationSvg.removeClass('animated-d').removeClass('fadeIn');
    			reputationTxt.removeClass('animated-d').removeClass('fadeIn');
    		}
    		if(ref === 'reputation') {
    			reputationGrey.addClass('animated2').addClass('fadeInLeftBig');
    			reputationWht.addClass('animated3').addClass('fadeInUpBig');
    			reputationSvg.addClass('animated-d').addClass('fadeIn');
    			reputationTxt.addClass('animated-d').addClass('fadeIn');
    			//reputationLogos.addClass('animated-d').addClass('fadeIn');

    			objectSvg.removeClass('animated').removeClass('fadeInUp');
    			objectSlider.removeClass('animated2').removeClass('fadeInUp');
    			objectNav.removeClass('animated2').removeClass('fadeInUpBig');

    			companySvg.removeClass('animated3').removeClass('fadeInLeftBig');
    			companyTxt.removeClass('animated2').removeClass('fadeInUp');
    			companyVid.removeClass('animated3').removeClass('fadeInRightBig');
    		}
    		
    	},
    	after: function(i,panels) {

    	}
		//offset: hOffset
		//interstitialSection:".footer"
	});
	
	
	$('.pagination a.pag__link').on('click', function () {
		$.scrollify.move($(this).attr('href'));
	});
	$('.pagination a.pag__arrow.arrow_down').on('click', function (e) {
		e.preventDefault();
		$.scrollify.next();
	});
	$('.pagination a.pag__arrow.arrow_up').on('click', function (e) {
		e.preventDefault();
		$.scrollify.move('#main');
	});
});