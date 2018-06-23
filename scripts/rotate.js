window.onload = choosePic;

var myPix = new Array("images/rotate/PP1-1.JPG","images/rotate/PP1-2.JPG","images/rotate/PP1-3.JPG","images/rotate/PP1-4.JPG","images/rotate/PP1-5.JPG","images/rotate/PP2-1.JPG","images/rotate/PP2-2.JPG","images/rotate/PP2-3.JPG","images/rotate/PP2-4.JPG","images/rotate/PP2-5.JPG","images/rotate/PP2-6.JPG","images/rotate/PP2-7.JPG","images/rotate/PP2-8.JPG","images/rotate/PP2-9.JPG");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("rotate").src = myPix[randomNum];
   }
