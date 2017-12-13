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

	g.iosFullScrn = $('#iosFullscreen');
	g.iosImgPreview = g.iosFullScrn.find('.preview__img');
	g.fullScrnOut = g.iosFullScrn.find('.fullScreen__btn_out');

	g.pagNum = 4;
	g.pagWidth = 26;

	var src = $(g.pans[0]).find('.gallery__img').attr('src');

		
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
	var PSV2 = new PhotoSphereViewer({
		container: 'iosFullscreen',
		panorama: src,
		autoload: false,
		navbar: [
    		'autorotate',
    		'zoom',
		]
	});


	g.pagInit = function () {

		console.log(navigator.platform);

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

			g.preview.find('.psv-container').hide();			
			
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
		g.preview.removeClass('gallery__preview_360');
		g.imgNav.removeClass('gallery__nav_360');

	}

	g.show360 = function (pag) {

		var current = g.gallery.find('.galleryPag__item_current');

		if(!(current.hasClass('galleryPag__item_360'))) {

			g.preview.find('.psv-container').show();		
			
		}
		current.removeClass('galleryPag__item_current');
		pag.addClass('galleryPag__item_current');
			
		var src = pag.find('.gallery__img').attr('src');

		g.imgPreview.attr('src', '');

		var iOS = !!navigator.platform && /iPad|iPhone|iPod|Win32/.test(navigator.platform);
		if (iOS) {
			g.imgNav.addClass('gallery__nav_360');
		} else {
			g.imgNav.hide();
		}

		PSV.setPanorama(src);

		g.preview.addClass('gallery__preview_360');
		
	}

	g.iosShow = function () {
		var current = g.gallery.find('.galleryPag__item_current')
			,img = current.find('.gallery__img')
			,src = img.attr('src')
			;
		
		g.iosFullScrn.addClass('fullScreen__wrap_open');

		if (g.preview.hasClass('gallery__preview_360')) {
			g.iosFullScrn.find('.gallery__nav').addClass('gallery__nav_360');
			g.iosFullScrn.find('.psv-container').show();
			PSV2.setPanorama(src);
		} else {
			var w = img.get(0).naturalWidth
				,h = img.get(0).naturalHeight
				;

			if ((w / h) > 1) {
				g.iosImgPreview.css({'width': '100%','height': 'auto'});
			} else {
				g.iosImgPreview.css({'height': '100%','width': 'auto'});	
			}

			g.iosFullScrn.find('.gallery__nav').removeClass('gallery__nav_360');
			g.iosImgPreview.attr('src', src);			
		}

		

		g.fullScrnOut.click(function (event) {
			event.preventDefault();
			g.iosFullScrn.removeClass('fullScreen__wrap_open');
			g.iosFullScrn.find('.psv-container').hide();
			g.iosImgPreview.attr('src','');
		});

	}
	
	$(document).ready(g.pagInit);
	g.pag.click(g.showPreview);
	g.fullScreen.on('click', function() {
		var iOS = !!navigator.platform && /iPad|iPhone|iPod|Win32/.test(navigator.platform);
		// if already full screen; exit
		// else go fullscreen
		if (iOS) {
			g.iosShow();
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
			g.fullScreen.toggleClass('fullScreen__btn_out');
		}
	});
	g.btnPrev.click(g.pagPrev);
	g.btnNext.click(g.pagNext);
}