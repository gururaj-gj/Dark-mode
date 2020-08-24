alert("Use either dark mode or Normal mode");
function dark_mode() {
  var a = document.getElementById("click");
  var b = document.getElementsByTagName("body")[0];

  // If the checkbox is checked, display the output text
 if (a.checked == true) {
    b.style.background = "#000000c9";
    a.style.border="2px solid #FFCC21";
    document.getElementsByClassName("blog")[0].style.borderColor="#FFCC21";
    document.getElementsByClassName("youtube")[0].style.borderColor="#FFCC21";
  } else {
    b.style.background = "white";
    a.style.border="2px solid black";
    document.getElementsByClassName("blog")[0].style.borderColor="black";
    document.getElementsByClassName("youtube")[0].style.borderColor="black";
  }
}
