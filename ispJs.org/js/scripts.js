
$('.langnan').css('opacity', '0.5');
$(function () {
    $('[title]').tooltip({ placement: 'bottom' });
    $('a.fancybox').fancybox({
        helpers: {
            thumbs: {
                width: 75,
                height: 50
            }
        }
    });
    $(window).scroll(function () {
        if ($('.visible-phone').css('display') == 'none') {
            $('.navmenu').css({ 'position': 'fixed', top: 60 });
        }
    });
    window.onresize = function () {
        if ($('.visible-phone').css('display') == 'none') {
            $('.navmenu').css({
                'position': 'fixed',
                top: 60,
                right: $(document).width() - ($('body>.container').offset().left + $('body>.container').width())
            });
        } else {
            $('.navmenu').css({
                'position': 'static'
            });
        }
        $(window).trigger('scroll');
    };
    window.onresize();
});