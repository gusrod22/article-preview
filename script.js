const shareButton = document.getElementById("share-button");
const bottomCard = document.getElementById("bottom-card");
const userSection = document.querySelector(".user-section");
const shareInfo = document.querySelector(".share-info");

const originalBackgroundColor = bottomCard.style.backgroundColor;

shareInfo.classList.add("hidden");

shareButton.addEventListener("click", () => {
  if (window.innerWidth >= 1440) {
    // viewport width is 1440px or greater, so only change the design for shareButton and shareInfo
    shareInfo.classList.toggle("hidden");
    shareButton.classList.toggle("active");

    if (shareButton.classList.contains("active")) {
      shareButton.style.backgroundColor = "hsl(214, 17%, 51%)";
      document
        .querySelector(".svg-container svg path")
        .setAttribute("fill", "#fff");
      shareInfo.style.backgroundColor = "hsl(217, 19%, 35%)"
    } else {
      shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";
      document
        .querySelector(".svg-container svg path")
        .setAttribute("fill", "#6E8098");
    }
  } else {
    // viewport width is less than 1440px, so change the design for both userSection and shareInfo
    userSection.classList.toggle("hidden");
    shareInfo.classList.toggle("hidden");
    shareButton.style.backgroundColor = "hsl(214, 17%, 51%)"
    document
    .querySelector(".svg-container svg path")
    .setAttribute("fill", "#fff");



    if (userSection.classList.contains("hidden")) {
      bottomCard.style.backgroundColor = "hsl(217, 19%, 35%)";
    } else {
      bottomCard.style.backgroundColor = originalBackgroundColor;
    }
  }
});

// This code listens for window resize events and resets the layout by hiding/showing elements and updating styles when the viewport width is less than 1440 pixels.

window.addEventListener("resize", () => {
  if (window.innerWidth < 1440) {
    shareInfo.classList.add("hidden");
    userSection.classList.remove("hidden");
    shareButton.classList.remove("active");
    shareButton.style.backgroundColor = "hsl(210, 46%, 95%)"
    document
    .querySelector(".svg-container svg path")
    .setAttribute("fill", "#6E8098");
    bottomCard.style.backgroundColor = originalBackgroundColor;
  }
});
