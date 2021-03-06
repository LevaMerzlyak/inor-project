function SliderInit(sSelector) {

    var i = this;

    i.objects   = $(sSelector);
    i.slide     = i.objects.find('.slide__article');
    i.length    = i.slide.length;
    i.item      = i.objects.find('.objectSlider__item');
    i.itemHead  = i.item.find('.slide__head');

    i.backBtn = i.objects.find('.back__btn');

    i.opened    = {};
    i.article   = {};

    //Controls
    i.prev = i.objects.find('.slideNav__btn_prev');
    i.next = i.objects.find('.slideNav__btn_next');

    i.pag = i.objects.find('.sliderPag__item');
    i.pagMob = i.objects.find('.slider__mobControls').find('.sliderPag__item');

    //Slides init
    i.init = function () {

        for (var j = 0; j < i.length; j++) {

            var slide       = i.slide.eq(j)
                ,src        = slide.find('.slide__img_cover').attr('src')
                ,head       = slide.find('.slideArt__head').html()
                ,item       = i.item.eq(j)
                ,wrap       = item.find('.slide__bg')
                ,coverHead  = item.find('.slideHead')
                ;

            wrap.css({ 'background-image': 'url(' + src + ')' } );
            coverHead.html(head);

        }

    }

    i.showSlide = function () {

        i.article = i.objects.find(i.opened);
        
        var slide = i.objects.find('.objectSlider__item');

        slide.addClass('opened');
        i.backBtn.addClass('opened');
        setTimeout(function () {

            $('body').css('overflow', 'hidden');

        }, 800);
        i.article.addClass('active');

    }

    i.hideSlide = function () {

        var slide = i.objects.find('.objectSlider__item');
        
        slide.removeClass('opened');
        i.article.removeClass('active');
        i.backBtn.removeClass('opened');
        $('body').css('overflow', '');
        

    }
    window.addEventListener("hashchange", function (event) {
        var hash = window.location.hash.replace('#', '');
        console.log(hash);
        if (hash !== 'objects' && hash !== 'one' && hash !== 'two' && hash !== 'three' && hash !== 'four' && hash !== 'five' && hash !== 'six' && hash !== 'seven') {
            i.showSlide();
        } else {
            i.hideSlide();
        }
    });

    i.change = function (event) {
        
        var item = event.item.index;

        i.pag.removeClass('sliderPag__item_active');
        i.pag.eq(item).addClass('sliderPag__item_active');
        i.pagMob.eq(item).addClass('sliderPag__item_active');

    }

};