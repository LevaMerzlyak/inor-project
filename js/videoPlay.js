function VideoStart(sSelector) {
	var  v = this
		,mainClass  = 'play__start'
		;

	v.container = $(sSelector);
	v.playBtn 	= v.container.find(".playBtn");
	v.closeBtn	= v.container.find(".close__btn");
	v.player	= v.container.find("#player");


	
	v.startVideo = function(event) {
		
		event.preventDefault();
		v.container.addClass(mainClass);
		setTimeout(function() {
			v.player.attr("src", "https://www.youtube.com/embed//PE-QOjc1Z5w?autoplay=1&showinfo=0&controls=0");
		}, 1000);


	}
	
	v.stopVideo = function() {

		v.container.removeClass(mainClass);
		v.player.attr("src", "");

	}
	
	

	v.playBtn.click(v.startVideo);
	v.closeBtn.click(v.stopVideo);
}