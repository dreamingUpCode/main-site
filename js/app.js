$(document).ready(function() {

	$.scrollify({
        section : "section",
        sectionName : "scroll",
        easing: "easeOutExpo",
        scrollSpeed: 2200,
        offset : 0,
        scrollbars: false,
        before:function() {},
        after:function() {},
        afterResize:function() {}
    });

    zoomwall.create(document.getElementById('gallery'), true);


});

