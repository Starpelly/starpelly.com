// window.onload = choosePic;

document.onreadystatechange = function(e)
{
	if (document.readyState === 'interactive')
	{
		choosePic();
	}
}

var myPix = new Array(
	"/assets/pfpcrop.png",
	"/assets/otherpelly.jpg",
	"/assets/randomimages/0.jpg",
	"/assets/randomimages/legacy/9hlskc5c6nc41.gif",
	"/assets/randomimages/legacy/500px-OoOOooer.gif",
	"/assets/randomimages/legacy/2967891_ep_1514387985_2.jpg",
	"/assets/randomimages/legacy/1437033731_OOOOOOOOAAAAAAAAAAAAH.gif",
	"/assets/randomimages/legacy/Apquga.gif",
	"/assets/randomimages/legacy/artworks-000205278199-77zuj6-t500x500.jpg",
	"/assets/randomimages/legacy/d7572276e80bd31449710f6a28c3b6b1.jpg",
	"/assets/randomimages/legacy/hqdefault.jpg",
	"/assets/randomimages/legacy/hqdefault2.jpg",
	"/assets/randomimages/legacy/hsrm38mlf2o41.jpg",
	"/assets/randomimages/legacy/JackBlackStop.png",
	"/assets/randomimages/legacy/maxresdefault.jpg",
	"/assets/randomimages/legacy/OBg0cHi.gif",
	"/assets/randomimages/legacy/tenor.gif",
	"/assets/randomimages/legacy/x0qmi5nO_400x400.jpg",

	// New ones! (12/7/25)

	"/assets/randomimages/tripodfacereveal.PNG",
	"/assets/randomimages/FMjHSomVIAAwPcE.jpg",
	"/assets/randomimages/GqRU1wPXEAAylEk.jpg",
	"/assets/randomimages/GLepXAjWwAIFgrX.jpg",
	"/assets/randomimages/GrG-ApFWEAAsl7F.jpg",
	"/assets/randomimages/Gg06FkgWsAAqve-.jpg",
	"/assets/randomimages/Gxsu8iJWcAA1Gt-.jpg",
	"/assets/randomimages/horrors.png",
	"/assets/randomimages/trolled.gif",
	"/assets/randomimages/groomed.gif",
	); /* i'll add more eventually  */

function downloadImage(url, name) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            let a = document.createElement('a');
            let url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = name;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        })
        .catch(() => console.error('Could not download image: ' + url));
}

function choosePic() {
	/*myPix.forEach((url, index) => {
		let name = 'image' + (index + 1) + url.substring(url.lastIndexOf('.'));
		downloadImage(url, name);
		console.log("downloaded img");
	});*/

	randomNum = Math.floor((Math.random() * (myPix.length - 1)));
	document.getElementById("myPicture").src = myPix[randomNum];
}