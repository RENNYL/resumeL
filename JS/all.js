// $(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $('.navBar').addClass('affix');
        } else {
            $('.navBar').removeClass('affix');
        }
        let scrollPos = $(window).scrollTop();
        let windowHeigh = $(window).height();
        $('.animated').each(function () {
            let thisPos = $(this).offset().top;
            if ((windowHeigh + scrollPos) >= thisPos) {
                $(this).addClass('fadein');
            } else {
                $(this).removeClass('fadein');
            }
        })
        $('.animated-left').each(function () {
            let thisPos = $(this).offset().top;
            if ((windowHeigh + scrollPos) >= thisPos) {
                $(this).addClass('fadein-left');
            } else {
                $(this).removeClass('fadein-left');
            }
        })
        // let showSkill = false;
        let skillTop = $('#skillSection').position().top;
        if (skillTop <= (scrollPos + windowHeigh / 2)) {
            $('#skillSection .progress-bar').each(function () {
                let thisValue = $(this).data('progress');
                $(this).css('width', thisValue + '%');
            })
        }
        $('.box1').each(function () {
            let thisPos = $(this).offset().top;
            if ((windowHeigh + scrollPos) >= thisPos) {
                $(this).addClass(' shadow-pop-tr');
            } else {
                $(this).removeClass(' shadow-pop-tr');
            }
        })
    });


// });
