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

var latestslideIndex = 1;
showlatestSlides(latestslideIndex);

// Next/previous controls
function pluslatestSlides(n) {
  showlatestSlides(latestslideIndex += n);
}

// Thumbnail image controls
function currentlatestSlide(n) {
  showlatestSlides(latestslideIndex = n);
}

function showlatestSlides(n) {
  var i;
  var latestslides = document.getElementsByClassName("latestSlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > latestslides.length) {latestslideIndex = 1}
  if (n < 1) {latestslideIndex = latestslides.length}
  for (i = 0; i < latestslides.length; i++) {
    latestslides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  latestslides[latestslideIndex-1].style.display = "block";
  dots[latestslideIndex-1].className += " active";
  captionText.innerHTML = dots[latestslideIndex-1].alt;
}
