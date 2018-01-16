$(function() {
	var objects 		= $('.objects')
		,objectSlider 	= objects.find('.objectSlider')
		,objectTxt 		= objects.find('.objectsTxt__wrap')
		,company 	= $('.company')
		,companyTxt = company.find('.company__txt')
		,companyVid = company.find('.company__video')
		,reputation = $('.reputation')
		,reputationGrey = reputation.find('.reputation__txt')
		,reputationWht = reputation.find('.reputationSlider')
        ,footer = $('.footer')
		;

	$.scrollify({
		section : ".scrollifyClass",
        interstitialSection: ".footy",
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
    			objectSlider.addClass('animated2').addClass('fadeInUp');
    			objectTxt.addClass('animated2').addClass('fadeInUp');
    		}
    		if(ref === 'company') {
    			companyTxt.addClass('animated2').addClass('fadeInUp');
    			companyVid.addClass('animated2').addClass('fadeInUp');
    		}
    		if(ref === 'reputation') {
    			reputationGrey.addClass('animated2').addClass('fadeInUp');
    			reputationWht.addClass('animated2').addClass('fadeInUp');
    		}
    		if(ref === 'footer') {

                footer.addClass('animated2').addClass('fadeInUp');

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
                objectSlider.removeClass('animated2').removeClass('fadeInUp');
                objectTxt.removeClass('animated2').removeClass('fadeInUp');
            }
            if(ref === 'objects') {
                companyTxt.removeClass('animated2').removeClass('fadeInUp');
                companyVid.removeClass('animated2').removeClass('fadeInUp');
            }
            if(ref === 'company') {
                reputationGrey.removeClass('animated2').removeClass('fadeInUp');
                reputationWht.removeClass('animated2').removeClass('fadeInUp');
            }
            if(ref === 'reputation') {
                footer.removeClass('animated2').removeClass('fadeInUp');
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