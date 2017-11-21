function DropDown(sSelector) {

	var d = this;

	var opened = 'nav__dropdown_opened';

	d.item = $(sSelector);
	d.link = d.item.find('.nav__link');
	d.drowdown = d.item.find('.nav__dropdown');

	d.showHide = function (e) {
		e.preventDefault();
		if (d.drowdown.hasClass(opened)) {

			d.hide();

		} else {

			d.show();
		}
		
	}
	d.hide = function () {

		d.drowdown.removeClass(opened);

	}
	d.show = function () {

		$('.header').find('.nav__dropdown_opened').removeClass(opened);
		d.drowdown.addClass(opened);

	}

	d.link.click(d.showHide);

}