function Gallery(sSelector) {

	var g = this;

	g.gallery = $(sSelector);

	g.pag = g.gallery.find('.galleryPag__item');
	g.current = g.gallery.find('.galleryPag__item_current')
	g.img = g.current.find('.gallery__img');
	g.preview = g.gallery.find('.gallery__preview');
	g.imgPreview = g.preview.find('.preview__img');
	g.imgNav = g.gallery.find('.gallery__nav');
	g.fullScreen = g.imgNav.find('.fullScreen__btn');

	g.pans = g.gallery.find('.galleryPag__item_360');

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
	

	$(document).ready(g.pagInit);
	g.pag.click(g.showPreview);
	g.fullScreen.on('click', function(){
	  // if already full screen; exit
	  // else go fullscreen
	  if (
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
	  g.fullScreen.toggleClass('fullScreen__btn_out');
	});

}