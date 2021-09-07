// >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<
// >>>>>>>>>>> TOGGLING NAVBAR <<<<<<<<<<
// >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<

function toggle() {
  $(".navbar").toggleClass("responsive-nav");
}

// >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<
// >>>>>>>>> TESTIMONIAL SLIDER <<<<<<<<<
// >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<

var $slickEl = $(".testimoninal-slider");

$slickEl.slick({
  slidesToShow: 1,
  dots: false,
  infinite: true,
  prevArrow:
    '<img class="prev-feedback" src="./images/svg/prev.svg" onerror="this.onerror=null;this.src="../images/svg/prev.svg" alt="Previous Feedback" />',
  nextArrow:
    '<img class="next-feedback" src="./images/svg/next.svg" alt="Next Feedback" />',
  autoplay: true,
  autoplaySpeed: 2000,
});

// >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<
// >>>>>>>>>>> SERVICES SLIDER <<<<<<<<<<
// >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<

/* Slider will only work at 768px */
/* as the width get small for each component */
if (window.matchMedia("(max-width: 768px)").matches) {
  var $slickEl = $(".services-slider");

  $slickEl.slick({
    slidesToShow: 1,
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 800,
  });
}

// >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<
// >>>>>>>>>>> IMAGE GALLERY <<<<<<<<<<<<
// >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
