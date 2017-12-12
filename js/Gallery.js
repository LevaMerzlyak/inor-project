function Gallery(sSelector) {

	var g = this;

	g.gallery = $(sSelector);

	g.pags 		= g.gallery.find('.galleryPag__wrap');
	g.pag 		= g.gallery.find('.galleryPag__item');
	g.pagAmount = g.pag.length;
	g.current 	= g.gallery.find('.galleryPag__item_current');
	g.img 		= g.current.find('.gallery__img');

	g.btnPrev 	= g.gallery.find('.galleryPag__btn_prev');
	g.btnNext 	= g.gallery.find('.galleryPag__btn_next');
	g.count 	= 0;

	g.preview 		= g.gallery.find('.gallery__preview');
	g.imgPreview 	= g.preview.find('.preview__img');

	g.imgNav 		= g.gallery.find('.gallery__nav');
	g.fullScreen 	= g.imgNav.find('.fullScreen__btn');

	g.pans = g.gallery.find('.galleryPag__item_360');

	g.pagNum = 4;
	g.pagWidth = 26;

	var src = $(g.pans[0]).find('.gallery__img').attr('src');

	// Panorama display
	var div = document.getElementById('preview');
	
	var PSV = new PhotoSphereViewer({
		container: 'preview',
		panorama: src,
		autoload: false,
		navbar: [
    		'autorotate',
    		'zoom',
    		'caption',
    		'fullscreen'
		]
	});


	g.pagInit = function () {

		//console.log(g.pags.width()*0.26);

		if(g.current.hasClass('galleryPag__item_360')) {

			g.show360(g.current);
			
		} else {

			$('.psv-container').hide();			
			g.showImage(g.current);
			
		}

		
		g.pag.each(function () {
			
			var src = $(this).find('.gallery__img').attr('src');

			$(this).css({'background-image': 'url(' + src + ')'});

		});

		g.pagCntrl();
		
	}

	g.pagCntrl = function () {

		var max = (g.pagNum - g.pagAmount)*g.pagWidth;

		if (g.pagAmount <= g.pagNum) {
			g.btnPrev.hide();
			g.btnNext.hide();
		} else {
			if (g.count == 0) {
				g.btnPrev.hide();
			} else {
				g.btnPrev.show();		
			}
			if (g.count == max) {
				g.btnNext.hide();
			} else {
				g.btnNext.show();		
			}
		}

	}
	g.pagPrev = function (event) {
		event.preventDefault();
		g.count += g.pagWidth;

		g.pags.css('left', g.count + '%');
		g.pagCntrl();
	}
	g.pagNext = function (event) {
		event.preventDefault();
		g.count -= g.pagWidth;

		g.pags.css('left', g.count + '%');
		g.pagCntrl();
	}

	g.showPreview = function (event) {
		
		var target = $(event.target);


		if (!(target.hasClass('galleryPag__item_360'))) {
			g.showImage(target);
		} else {
			g.show360(target);
		}


	}

	g.showImage = function (pag) {

		var current = g.gallery.find('.galleryPag__item_current');

		if(current.hasClass('galleryPag__item_360')) {

			$('.psv-container').hide();			
			
		}
		current.removeClass('galleryPag__item_current');
		pag.addClass('galleryPag__item_current');


		var img = pag.find('.gallery__img')
				,src = img.attr('src')
				,w = img.get(0).naturalWidth
				,h = img.get(0).naturalHeight
				;

		if ((w / h) > 1) {
			g.imgPreview.css({'width': '100%','height': 'auto'});
		} else {
			g.imgPreview.css({'height': '100%','width': 'auto'});			
		}

		g.imgNav.show();
		g.imgPreview.attr('src', src);

	}

	g.show360 = function (pag) {

		var current = g.gallery.find('.galleryPag__item_current');

		if(!(current.hasClass('galleryPag__item_360'))) {

			$('.psv-container').show();		
			
		}
		current.removeClass('galleryPag__item_current');
		pag.addClass('galleryPag__item_current');
			
		var src = pag.find('.gallery__img').attr('src');

		g.imgPreview.attr('src', '');
		g.imgNav.hide();

		PSV.setPanorama(src);
		
	}

	g.iosShow = function () {
		var fullscreenImg = $('#iosFullscreen').find('.preview__img')
			,img = g.imgPreview
			,src = img.attr('src')
			,w = img.get(0).naturalWidth
			,h = img.get(0).naturalHeight
			,fullscreenOut =  $('#iosFullscreen').find('.fullScreen__btn_out')
			;

		if ((w / h) > 1) {
			fullscreenImg.css({'width': '100%','height': 'auto'});
		} else {
			fullscreenImg.css({'height': '100%','width': 'auto'});			
		}
		$('#iosFullscreen').addClass('fullScreen__wrap_open');
		fullscreenImg.attr('src', src);

		fullscreenOut.click(function (event) {
			event.preventDefault();
			$('#iosFullscreen').removeClass('fullScreen__wrap_open');
		})
	}
	
	$(document).ready(g.pagInit);
	g.pag.click(g.showPreview);
	g.fullScreen.on('click', function() {
		/*var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
		// if already full screen; exit
		// else go fullscreen
		if (iOS) {*/
			g.iosShow();/*
		} else if (
			document.fullscreenElement ||
			document.webkitFullscreenElement ||
			document.mozFullScreenElement ||
			document.msFullscreenElement
		) {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
		}
		} else {
			element = $('.gallery__wrap').get(0);
			if (element.requestFullscreen) {
				element.requestFullscreen();
			} else if (element.mozRequestFullScreen) {
				element.mozRequestFullScreen();
			} else if (element.webkitRequestFullscreen) {
				element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
			} else if (element.msRequestFullscreen) {
				element.msRequestFullscreen();
			}
		}
		g.fullScreen.toggleClass('fullScreen__btn_out');*/
	});
	g.btnPrev.click(g.pagPrev);
	g.btnNext.click(g.pagNext);

}