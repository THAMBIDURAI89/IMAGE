const imageSources = ['1.jpg', '2.jpg', '3.jpg' , '4.jpg' , '5.jpg' , '6.jpg'];
function changeBackgroundImage() {	
const randomIndex = Math.floor(Math.random() * imageSources.length);	
document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;	
}	
// Change the background image every 1 seconds (1000 milliseconds)	
setInterval(changeBackgroundImage, 1000);	
	
	