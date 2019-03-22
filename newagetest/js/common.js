$(function () {
    $(".item")
        .slice(0, 4)
        .show();
    $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".item:hidden")
            .slice(0, "item:hidden".length)
            .slideDown();

        if ($("item:hidden").length == 0) {
            $("#loadMore").fadeOut("slow");
        }

        $("html,body").animate({
                scrollTop: $(this).offset().top
            },
            1500
        );
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


