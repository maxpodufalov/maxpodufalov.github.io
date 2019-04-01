function topPopup() {
  var x = document.getElementById("panel-top");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function botPopup() {
  var x = document.getElementById("panel-bottom");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}