function DropDown(sSelector) {

	var d = this;

	var opened = 'navDropdown_opened';

	d.item = $(sSelector);
	d.drowdown = d.item.find('.navDropdown');

	d.hide = function () {

		d.drowdown.removeClass(opened);

	}
	d.show = function () {

		d.drowdown.addClass(opened);

	}

	d.item.mouseenter(d.show);
	d.item.mouseleave(d.hide);

}