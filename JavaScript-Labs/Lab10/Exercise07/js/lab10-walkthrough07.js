
/* Exercise 10.7 - More jQuery Animation */

$(function () {

    // Step 2: Create preview on mouseover
    $('figure img').on('mouseover', function (e) {

        // Construct preview filename based on existing image
        var alt = $(this).attr('alt');
        var src = $(this).attr('src');
        var newsrc = src.replace("small", "medium");

        // Create dynamic preview element
        var preview = $('<div id="preview"></div>');
        var image = $('<img src="' + newsrc + '">');
        var caption = $('<p>' + alt + '</p>');

        preview.append(image);
        preview.append(caption);

        $('body').append(preview);

        // Make small image gray
        $(this).addClass("gray");

        // Fade preview in
        $("#preview").fadeIn(1000);

    });

    // Step 4: Remove preview when mouse leaves image
    $("figure img").on("mouseleave", removePreview);
    $("figure img").on("mousemove", movePreview);

});


// Step 3: Remove preview and restore thumbnail
function removePreview() {

    $(this).removeClass("gray");

    $("#preview").remove();

}

function movePreview(e) {

    $("#preview")

        .css("top", (e.pageY - 10) + "px")

        .css("left", (e.pageX + 30) + "px");

}
