function ShowDisc(sSelector) {

	var s = this;

	s.object = $(sSelector);
	s.moreBtn = s.object.find('.info__btn');
	s.disc = $('.info');
	s.closeBtn = s.disc.find('.info__closeBtn');

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
		s.updatePosition();
		s.disc.show();
		$('.scroll__btn').hide();
		if(!$.scrollify.isDisabled()) {
			$.scrollify.disable();
		}
	});
	s.closeBtn.click(function (event) {
		event.preventDefault();
		s.disc.hide();
		var width = $(window).width();
		if(width < 1199 && !$.scrollify.isDisabled()) {
			$.scrollify.disable();
		} else if(width >= 1199 && $.scrollify.isDisabled()) {
			$.scrollify.enable();
			$('.scroll__btn').show();
		}
	});
	$(window).resize(s.getPosition);
	$(document).ready(s.getPosition);

}