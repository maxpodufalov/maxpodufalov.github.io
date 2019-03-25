$(function () {
    $(".item")
        .slice(0, 4)
        .show();
    $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".item:hidden")
            .slice(4, 11)
            .slideDown();

        if ($("item:hidden").length == 0) {
            $("#loadMore").fadeOut("slow");
        }
    });

});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}