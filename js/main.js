'use strict';

$(function () {
    function resizeing() {
        var windowWidth = $(window).width();
        var ifSmallSize = windowWidth < 768;
        $("#photoroll > #carousel-example-generic > .carousel-inner > .item").each((index, item) => {
            var $item = $(item);
            var imgSrc = $item.data(ifSmallSize ? 'image-sm' : 'image-lg');
            $item.css('backgroundImage', "url(" + imgSrc + ")");
            if (ifSmallSize) {
                $item.html('<img src="' + imgSrc + '"/>');
            }
            else {
                $item.html("");
            }
        });

        var totalWidth = 0;
        var $ulList = $(".nav-tabs").children();
        $ulList.each(function (index, element) {
            totalWidth += $(element).width();
        });
        if (totalWidth + 0.01 > window.innerWidth) {
            $(".nav-tabs")
                .css("width", totalWidth + 0.01)
                .parent().css("overflow-x", "scroll");
        }
        else {
            $(".nav-tabs").css("width", "100%");
        }
    };
    $(window).on('resize', resizeing).trigger('resize');
    $('[data-toggle="tooltip"]').tooltip()   //tooltip要用到




    var header = document.getElementById("header");
    var headerTop = header.children[0];
    var headerNav = header.children[1];
    headerNav.dataset.offsetTop = headerTop.clientHeight;

    var $carousel = $(".carousel");
    var zuobiao, distance;
    var offset = 50;
    $carousel.on('touchstart', function (e) {
        zuobiao = e.originalEvent.touches[0].clientX;
    });
    $carousel.on('touchend', function (e) {
        zuobiao = zuobiao - e.originalEvent.changedTouches[0].clientX;
        distance = Math.abs(zuobiao);
        if (distance >= offset) {
            $(this).carousel(zuobiao >= 0 ? 'next' : 'prev');
        }
    });


    // var itemList = document.getElementsByClassName("item");
    // if(windowWidth >= 990)
    // {
    //     alert("大于990");
    //     for(let x = 0;x<itemList.length;x++)
    //     {
    //         itemList[x].style.backgroundImage = "url(./img/slide_0" + (x+1) + "_2000x410.jpg)";
    //     }
    // }
    // else
    // {
    //     alert("小于990");
    //     for(let x = 0;x<itemList.length;x++)
    //     {
    //         itemList[x].style.backgroundImage = "url(./img/slide_0" + (x+1) + "_640x340.jpg)";
    //     }
    // }
});