var blurCircle = document.querySelector(".blur-circle");
var circleX = 0;
var circleY = 0;

document.addEventListener("mousemove", function (event) {
  circleX = event.clientX - blurCircle.offsetWidth / 2;
  circleY = event.clientY - blurCircle.offsetHeight / 2;
});

function updateCirclePosition() {
  blurCircle.style.left = circleX + "px";
  blurCircle.style.top = circleY + "px";
  requestAnimationFrame(updateCirclePosition);
}

updateCirclePosition();
