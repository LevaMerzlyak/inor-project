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