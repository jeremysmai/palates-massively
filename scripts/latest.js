/* Phantom Inc 2018
Latest Serving Gallery Script Below, borrowed and modified from W3schools.com
Modified in attempts to speed up resource time, possiblé
*/

// Open the Latest
function openLatest() {
  document.getElementById('myLatest').style.display = "block";
}

// Close the Latest
function closeLatest() {
  document.getElementById('myLatest').style.display = "none";
}

var slideIndex = 1;
showlatestSlides(slideIndex);

// Next/previous controls
function pluslatestSlides(n) {
  showlatestSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showlatestSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("latestSlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
