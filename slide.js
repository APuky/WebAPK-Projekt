var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "url('https://www.formula1.com/content/dam/fom-website/manual/Misc/POTY_2017/_R3I9623.JPG.transform/9col/image.JPG')";
images[1] = "url('https://phantom-marca.unidadeditorial.es/1b354fbafd69dc30d64025d557cbfaed/crop/0x0/1200x800/resize/1320/f/jpg/assets/multimedia/imagenes/2021/09/05/16308362826751.jpg')";
images[2] = "url('https://cdn.vox-cdn.com/thumbor/xp5CnzPLoVWxKdy5-98FHe4G8Mw=/0x0:3804x2536/1200x800/filters:focal(1598x964:2206x1572)/cdn.vox-cdn.com/uploads/chorus_image/image/69990479/1235804305.0.jpg')";

// Change Image
function changeImg(){
	document.getElementById("myHeader").style.backgroundImage = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;