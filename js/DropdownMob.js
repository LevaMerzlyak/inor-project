function DropDownMob(sSelector) {

	var d = this;

	var opened = 'navDropdown_opened';

	d.item = $(sSelector);
	d.link = d.item.find('.nav__link');
	d.drowdown = d.item.find('.navDropdown');

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

		$('.header').find('.navDropdown_opened').removeClass(opened);
		d.drowdown.addClass(opened);

	}

	d.link.click(d.showHide);

}