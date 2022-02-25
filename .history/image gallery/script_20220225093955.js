
const baseURL = 'images/';
const nxt = document.querySelector('.nxt');
const prev = document.querySelector('.prev');
const slide = document.querySelector('.pic');
const image = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
let index = 0;

nxt.onclick = function(e) {
  e.preventDefault();
  index = index + 1;
  slide.src = baseURL + image[index];
  console.log(slide.src);

  //write a conditional so that the images wrap back to the beginning image.
  if (index > 3) {
    index = 0;
    slide.src = baseURL + image[index];
  } 



//Add a previous button event listener
prev.onclick = function(e) {
  e.preventDefault();
  index = index - 1;
  slide.src = baseURL + image[index];
  console.log(slide.src);

  if (index < 0){
    index = 3
    slide.src = baseURL + image[index];
  }
}
}