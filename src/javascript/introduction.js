// Import Images
import "../images/calm_image.png";
import "../images/calm_image_md.jpg";
import "../images/calm_image_sm.png";

// Import html Elements
const intro = document.querySelector(".intro");
const navbar = document.querySelector("header");
const anchors = document.querySelectorAll("a");
const me = document.querySelector(".me");
const block = document.querySelector(".block"); // cursor after name

intro.style.background = "url('images/calm_image.png')";

const e = (() => {
  let previousPos = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentPos = window.scrollY;
    if (previousPos < currentPos) {
      navbar.classList.add("active");
    } else {
      navbar.classList.remove("active");
    }

    for (let i = 0; i < 3; i += 1) {
      anchors[i].classList.remove("active");
    }

    previousPos = currentPos;

    for (let i = 0; i < 3; i += 1) {
      if (currentPos < (i + 1) * 900) {
        anchors[i].classList.add("active");
        break;
      }
    }
  });

  let charIndex = 0;
  let direction = 1;
  let text = "SAI VIKAS";

  // Animate with typing animation
  const animateText = () => {
    if (charIndex < 0) {
      if (text.length <= 9) {
        text = "FRONTEND DEVELOPER";
      } else {
        text = "SAI VIKAS";
      }
      direction = 1; // Switch direction to typing forward
      charIndex = 0;
      setTimeout(animateText, 100);
    } else if (charIndex > text.length) {
      direction = -1; // Switch direction to erasing backward
      charIndex = text.length;

      let blinkCount = 0;

      const blinkInterval = setInterval(() => {
        e.blinkOnce();

        setTimeout(() => {
          e.blinkOnce();

          blinkCount += 1;

          if (blinkCount === 2) {
            clearInterval(blinkInterval);
            animateText();
          }
        }, 500);
      }, 1000);
    } else {
      me.textContent = text.substring(0, charIndex);

      if (direction === 1) {
        charIndex += 1;
      } else if (direction === -1) {
        charIndex -= 1;
      }
      setTimeout(animateText, 100);
    }
  };

  const blinkOnce = () => {
    if (block.textContent === "|") {
      block.textContent = "";
    } else {
      block.textContent = "|";
    }
  };

  // Check the current screen size and apply appropriate styles
  const checkScreenSize = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      intro.style.background = "url('images/calm_image_sm.png') no-repeat";
    } else if (window.matchMedia("(max-width: 1023px)").matches) {
      intro.style.background = "url('images/calm_image_md.jpg') no-repeat";
    } else {
      intro.style.background = "url('images/calm_image.png')";
    }
  };

  return { animateText, blinkOnce, checkScreenSize };
})();

export default e;
