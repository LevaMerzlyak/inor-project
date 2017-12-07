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
		,reputationWht = reputation.find('.reputationSlider')
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
    		}

    		if(ref === 'footer') {
    			$('.pagination a.pag__arrow.arrow_down').hide();
    			$('.pagination a.pag__arrow.arrow_up').show();
            } else {
                $('.pagination a.pag__arrow.arrow_up').hide();
                $('.pagination a.pag__arrow.arrow_down').show();
    		}

    		if(ref === 'objects') {
    			objectSvg.addClass('animated').addClass('fadeInUp');
    			objectSlider.addClass('animated2').addClass('fadeInUp');
    			objectNav.addClass('animated2').addClass('fadeInUpBig');
    		}
    		if(ref === 'company') {
    			companySvg.addClass('animated').addClass('fadeInUp');
    			companyTxt.addClass('animated2').addClass('fadeInUp');
    			companyVid.addClass('animated2').addClass('fadeInUp');
    		}
    		if(ref === 'reputation') {
    			reputationGrey.addClass('animated').addClass('fadeInUp');
    			reputationWht.addClass('animated2').addClass('fadeInUpBig');
    		}
    		if(ref === 'footer') {

                $('.scrollBtn').addClass('scrollBtn_hidden');
                setTimeout(function () {
                    $('.scroll__btn').addClass('scroll__btn_hidden');
                },500);
            } else {
                $('.scroll__btn').removeClass('scroll__btn_hidden');
                setTimeout(function () {
                    $('.scrollBtn').removeClass('scrollBtn_hidden');
                },500);
            }
    		
    	},
    	after: function(i,panels) {
            var ref = panels[i].attr('data-section-name');

            if(ref === 'main') {
                objectSvg.removeClass('animated').removeClass('fadeInUp');
                objectSlider.removeClass('animated2').removeClass('fadeInUp');
                objectNav.removeClass('animated2').removeClass('fadeInUpBig');
            }
            if(ref === 'objects') {
                companySvg.removeClass('animated').removeClass('fadeInUp');
                companyTxt.removeClass('animated2').removeClass('fadeInUp');
                companyVid.removeClass('animated2').removeClass('fadeInUp');
            }
            if(ref === 'company') {
                reputationGrey.removeClass('animated').removeClass('fadeInUp');
                reputationWht.removeClass('animated2').removeClass('fadeInUpBig');
            }

    	},
		afterResize:offMobile,
    	afterRender:offMobile,
		//interstitialSection: ".footer"
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
    $('.scrollBtn').on('click', function (e) {
        e.preventDefault();
        $.scrollify.next();
    });
	function offMobile() {
		var width = $(window).width();
		if(width < 1199 && !$.scrollify.isDisabled()) {
			$.scrollify.disable();
		} else if(width >= 1199 && $.scrollify.isDisabled()) {
			$.scrollify.enable();
		}
	}
});