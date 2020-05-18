"use strict";
$(document).ready(function() {
    $('[href]').click(function(evt2) {
        evt2.preventDefault();
        var url = $(this).attr('href');      // gets the src attribute
        $('aside img').attr("src", url);
    });

    $('h2').click(function(evt2) {
        evt2.preventDefault();
        $('aside img').attr("src", "");
    });


    $("h2").click(function(evt) {
        $(this).toggleClass("minus");
        if ($(this).attr("class") !== "minus") {
            $(this).next().hide();
        }
        else {
            $(this).next().show();
        }
        evt.preventDefault();
    });

});