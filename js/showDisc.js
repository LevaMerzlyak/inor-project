function ShowDisc(sSelector) {

	var s = this;

	s.object = $(sSelector);
	s.moreBtn = s.object.find('.vacancy__infoBtn');
	s.disc = s.object.find('.vacancyDisc');
	s.closeBtn = s.disc.find('.vacancyDisc__closeBtn');

	s.moreBtn.click(function (event) {
		event.preventDefault();
		s.disc.show();
	});
	s.closeBtn.click(function (event) {
		event.preventDefault();
		s.disc.hide();
	});

}