function VideoStart(sSelector) {
	var  v = this
		,mainClass  = 'play__start'
		;

	v.playBtn = $(sSelector);
	v.selector = v.playBtn.attr("data-video");
	v.src = v.playBtn.attr("data-src");
	v.video = $(v.selector);
	v.closeBtn	= v.video.find(".close__btn");
	v.player	= v.video.find(".player");


	
	v.startVideo = function(event) {
		
		event.preventDefault();
		v.video.addClass(mainClass);
		setTimeout(function() {
			v.player.attr("src", v.src + "?autoplay=1&showinfo=0&controls=0&border=0");
		}, 1000);
		$('.scrollBtn').addClass('scrollBtn_hidden');

	}
	
	v.stopVideo = function() {

		v.video.removeClass(mainClass);
		v.player.attr("src", "");
		$('.scrollBtn').removeClass('scrollBtn_hidden');

	}
	
	

	v.playBtn.click(v.startVideo);
	v.closeBtn.click(v.stopVideo);
}