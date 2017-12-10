function ShowDisc(sSelector) {

	var s = this;

	s.object = $(sSelector);
	s.moreBtn = s.object.find('.vacancy__infoBtn');
	s.disc = $('.vacancyDisc');
	s.closeBtn = s.disc.find('.vacancyDisc__closeBtn');

	s.t = 0.15;
	s.pos = 0;

	s.getPosition = function () { 
		s.t = ($(window).width() <= 770 && $(window).width() < $(window).height()) ? 0.08 : 0.15;
		s.updatePosition();
	}
	s.updatePosition = function () {
		s.pos = $(document).scrollTop() + ($(window).height() * s.t);
		s.disc.css('top', s.pos);
	}

	s.moreBtn.click(function (event) {
		event.preventDefault();
		console.log("btn");
		s.updatePosition();
		s.disc.show();		
	});
	s.closeBtn.click(function (event) {
		event.preventDefault();
		s.disc.hide();
	});
	$(window).resize(s.getPosition);
	$(document).ready(s.getPosition);

}