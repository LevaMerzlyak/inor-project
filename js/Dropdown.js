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
function DropDownMenu(sSelector) {

	var m = this;

	var opened = 'mobile__menu_opened';
	var close = 'sandwich__btn_close';

	m.menu = $(sSelector);
	m.btn = m.menu.find('.sandwich__btn');
	m.drop = m.menu.siblings('.mobile__menu');

	m.showHide = function (e) {
		e.preventDefault();
		if (m.btn.hasClass(close)) {

			m.hide();

		} else {

			m.show();
		}
		
	}
	m.hide = function () {

		m.drop.removeClass(opened);
		m.btn.removeClass(close);

	}
	m.show = function () {

		m.drop.addClass(opened);
		m.btn.addClass(close);

	}

	m.btn.click(m.showHide);

}
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