const winWidth = window.innerWidth;

function colorChange() {
  if (winWidth > "600") {
    body.style.borderColor = "blue";
  }
}

window.addEventListener("resize", colorChange);
