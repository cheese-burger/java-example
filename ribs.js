
adImages = new Array("images/rib1.jpg","images/rib2.jpg","images/rib3.jpg","images/rib4.jpg" )
thisAd = 0
imgCt = adImages.length
function rotate() {
if (document.images) {
thisAd++
if (thisAd == imgCt) {
thisAd = 0
}
document.adBanner.src=adImages[thisAd]
setTimeout("rotate()", 3 * 1000)
}
}
// End hide script from old browsers -->
