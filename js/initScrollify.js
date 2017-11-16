$(function() {
	var hOffset = $(".header").height();
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
    		if((ref === 'main') || (ref === 'objects') || (ref === 'company')) {

    			$('.pagination a.pag__arrow').removeClass('arrow_up');
    			$('.pagination a.pag__arrow').addClass('arrow_down');

    		} else {

    			$('.pagination a.pag__arrow').removeClass('arrow_down');
    			$('.pagination a.pag__arrow').addClass('arrow_up');

    		}
    		
    	}
		//offset: hOffset
		//interstitialSection:".footer"
	});
	
	
	$('.pagination a.pag__link').on('click', function () {
		$.scrollify.move($(this).attr('href'));
	});
	$('.pagination a.pag__arrow').on('click', function (e) {
		e.preventDefault();
		if($('.pagination a.pag__arrow').hasClass('arrow_down')) {
			$.scrollify.current().next();
			console.log('next');
		} else {
			$.scrollify.move('main');
			console.log('up');
		}
	});
});