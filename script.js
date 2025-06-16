// Slideshow logic
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Page navigation logic
function showPage(pageId) {
  document
    .querySelectorAll(".page,.pop")
    .forEach((p) => p.classList.remove("active"));
  if (pageId) {
    document.getElementById(pageId).classList.add("active");
  }
}
// Scrolling tab thing
const originalTitle = "say it 3 times: fairy, fairy, fairy";
let position = 0;

function scrollTitle() {
  document.title =
    originalTitle.slice(position) + originalTitle.slice(0, position);
  position = (position + 1) % originalTitle.length;
}

setInterval(scrollTitle, 200); // Adjust speed here (ms)

// Hover tool tip
(function ($) {
  $(document).ready(function () {
    $("a[title]").style_my_tooltips({
      tip_follows_cursor: true,
      tip_delay_time: 0,
      tip_fade_speed: 40,
      attribute: "title",
    });
  });
})(jQuery);
