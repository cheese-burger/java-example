
var i = 0;
var path2 = new Array();
 
// LIST OF IMAGES
path2[0] = "images/rib1.jpg";
path2[1] = "images/rib2.jpg";
path2[2] = "images/rib3.jpg";
path2[3] = "images/rib4.jpg";
function swapPicture()
{
   document.slide2.src = path2[i];
   if(i < path2.length - 1) i++; else i = 0;
   setTimeout("swapPicture()",3000);
}
window.onload=swapPicture;
