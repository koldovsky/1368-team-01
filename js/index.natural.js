const naturalTitle = document.getElementById("titleAnim");
const totalTime = 8000;
const changeTime = totalTime / 4;
const holdTime = totalTime / 4;

naturalTitleAnim();

function naturalTitleAnim() {
  setTimeout(() => {
    naturalTitle.style.transition =
      "transform 3s ease-in-out";
    naturalTitle.style.transform = "scale(1.2)";
    setTimeout(() => {
      setTimeout(() => {
        naturalTitle.style.transform = "scale(1)";
      }, holdTime);
    }, changeTime);
  }, holdTime);
}

setInterval(naturalTitleAnim, totalTime);
