function Gallery(sSelector) {

	var g = this;

	g.gallery = $(sSelector);

	g.pag = g.gallery.find('.galleryPag__item');
	g.current = g.gallery.find('.galleryPag__item_current')
	g.img = g.current.find('.gallery__img');
	g.preview = g.gallery.find('.gallery__preview');
	g.imgPreview = g.preview.find('.preview__img');


	g.pagInit = function () {

		g.showImage(g.current);
		
		g.pag.each(function () {
			
			var src = $(this).find('.gallery__img').attr('src');

			$(this).css({'background-image': 'url(' + src + ')'});

		});
		
	}

	g.showPreview = function (event) {
		
		var current = g.gallery.find('.galleryPag__item_current'),
			target = $(event.target)
			;

		//console.log(target.attr('class'));

		if (!(target.hasClass('galleryPag__item_current'))) {
			current.removeClass('galleryPag__item_current');
			target.addClass('galleryPag__item_current');
			g.showImage(target);
		}


	}

	g.showImage = function (pag) {

		if(!(pag.hasClass('galleryPag__item_360'))) {

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

			g.imgPreview.attr('src', src);
			
		} else {

			g.show360(pag);

		}

		g.show360 = function (pag) {
			
			var src = pag.find('.gallery__img').attr('src');

			g.imgPreview.attr('src', '');

			// Loader
			var loader = document.createElement('div');
			loader.className = 'loader';

			// Panorama display
			var div = document.getElementById('preview');
			//div.style.height = '30px';
			
			var PSV = new PhotoSphereViewer({
				// Panorama, given in base 64
				panorama: src,

				// Container
				container: div,

				// Deactivate the animation
				time_anim: 3000,

				// Display the navigation bar
				navbar: true,

				// Resize the panorama
				size: {
					width: '100%',
					height: '100%'
				},

				// HTML loader
				loading_html: loader,

				// No XMP data
				usexmpdata: true
			});

		}


	}
	

	$(document).ready(g.pagInit);
	g.pag.click(g.showPreview);

}