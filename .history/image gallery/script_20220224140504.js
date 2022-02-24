
const baseURL = 'images/';
const nxt = document.querySelector('.nxt');
const prev = document.querySelector('.prev');
const slide = document.querySelector('.pic');
const image = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
let index = 0;

nxt.onclick = function(e) {
  if(i >= image.length-1) i = -1;
	i++;
	return setImg();		

  //write a conditional so that the images wrap back to the beginning image.
}

//Add a previous button event listener
prev.onclick = function(e) {
  if(i <= 0) i = image.length;	
	i--;
	return setImg();		
}