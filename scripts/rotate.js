window.onload = choosePic;

var myPix = new Array("images/rotate/PP1-1.JPG",
                      "images/rotate/PP1-2.JPG",
                      "images/rotate/PP1-3.JPG",
                      "images/rotate/PP1-4.JPG",
                      "images/rotate/PP1-5.JPG",
                      "images/rotate/PP2-1.JPG",
                      "images/rotate/PP2-2.JPG",
                      "images/rotate/PP2-3.JPG",
                      "images/rotate/PP2-4.JPG",
                      "images/rotate/PP2-5.JPG",
                      "images/rotate/PP2-6.JPG",
                      "images/rotate/PP2-7.JPG",
                      "images/rotate/PP2-8.JPG",
                      "images/rotate/PP2-9.JPG",
                      "images/rotate/PP3-1.JPG",
                      "images/rotate/PP3-2.JPG",
                      "images/rotate/PP3-3.JPG",
                      "images/rotate/PP3-4.JPG",
                      "images/rotate/PP01.jpg",
                      "images/rotate/PP02.jpg",
                      "images/rotate/PP03.jpg",
                      "images/rotate/PP04.jpg",
                      "images/rotate/PP05.jpg",
                      "images/rotate/PP06.jpg",
                      "images/rotate/PP07.jpg",
                      "images/rotate/PP08.jpg",
                      "images/rotate/PP01-1.jpg",
                      "images/rotate/PP01-2.jpg",
                      "images/rotate/PP01-3.jpg",
                      "images/rotate/PP01-4.jpg",
                      );

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("rotate").src = myPix[randomNum];
   }
