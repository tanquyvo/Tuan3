
$(function() {

    // Step 2: Fade In
    $("#btnFadeIn").click(function() {

        $("figure").fadeIn(1000);

    });

    // Step 3: Fade Out
    $("#btnFadeOut").click(function() {

        $("figure").fadeOut(1000);

    });

    // Step 4: Toggle Fade
    $("#btnFade").click(function() {

        $("figure").fadeToggle(500);

    });

    // Step 5: Slide Down
    $("#btnSlideDown").click(function() {

        $("figure").slideDown("slow");

    });

    // Step 5: Slide Up
    $("#btnSlideUp").click(function() {

        $("figure").slideUp("slow");

    });

    // Step 5: Toggle Slide
    $("#btnSlide").click(function() {

        $("figure").slideToggle(2000);

    });

});
