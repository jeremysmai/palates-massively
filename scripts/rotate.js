window.onload = choosePic;

var myPix = new Array("images/rotate/PP1-1.jpg","images/rotate/PP1-2.jpg","images/rotate/PP1-3.jpg");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("rotate").src = myPix[randomNum];
