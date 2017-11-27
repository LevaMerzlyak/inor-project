function SliderInit(sSelector) {

    var i = this;

    i.object   = $(sSelector);
    
    i.current = i.object.find('.sliderPag_current');
    i.all = i.object.find('.sliderPag_all');
    
    //Controls
    i.prev = i.object.find('.sliderControl__btn_prev');
    i.next = i.object.find('.sliderControl__btn_next');

    //Slides init
    i.counter = function (event) {

        var element   = event.target;
        var all     = event.item.count;
        var current      = event.item.index + 1;
        if (all<10) {
            all = '0' + all;
        }
        if (current<10) {
            current = '0' + current;
        }
        i.all.html(all);
        i.current.html(current);

    };


};