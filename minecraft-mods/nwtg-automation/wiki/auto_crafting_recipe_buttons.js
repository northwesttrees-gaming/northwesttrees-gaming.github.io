function recipesHidePlanks() {
  var x = document.getElementById("spoilerGroup");
    if (x.style.display == "block") {
      x.style.display = "none";
      } else {
      x.style.display = "block";
	};
  var a = document.getElementById("showbutton");
    if (a.style.display == "none") {
      a.style.display = "block";
      } else {
      a.style.display = "none";
    };
  var b = document.getElementById("hidebutton");
    if (b.style.display == "block") {
      b.style.display = "none";
      } else {
      b.style.display = "block";
    }
}
function recipesShowPlanks() {
  var x = document.getElementById("spoilerGroup");
    if (x.style.display == "none") {
      x.style.display = "block";
      } else {
      x.style.display = "none";
	};
  var a = document.getElementById("showbutton");
    if (a.style.display == "block") {
      a.style.display = "none";
      } else {
      a.style.display = "block";
    };
  var b = document.getElementById("hidebutton");
    if (b.style.display == "none") {
      b.style.display = "block";
      } else {
      b.style.display = "none";
    }
}