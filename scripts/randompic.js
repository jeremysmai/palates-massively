<script>
//Add your images, we'll set the path in the next step
    var images = ['PP1-1.jpg', 'PP1-2.jpg', 'PP1-13.jpg', 'PP1-4.jpg', 'PP1-5.jpg', 'PP2-1.jpg', 'PP2-2.jpg', 'PP2-3.jpg', 'PP2-4.jpg', 'PP2-5.jpg', 'PP2-6.jpg', 'PP2-7.jpg', 'PP2-8.jpg', 'PP2-9.jpg'];

//Build the img, then do a bit of maths to randomize load and append to a div. Add a touch off css to fade them badboys in all sexy like.
    $('<img src="images/rotate/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#banner-load');
</script>

<noscript><img src="images/main.jpg"></noscript>


<!-- Second Attempt  -->

<script src="/scripts/rotate.js"></script>
<img id="rotate" alt="RotatingImages">
window.onload = choosePic;

var myPix = new Array("images/rotate/PP1-1.jpg","images/rotate/PP1-2.jpg","images/rotate/PP1-3.jpg");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("rotate").src = myPix[randomNum];
