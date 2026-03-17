const zoomImages = document.querySelectorAll(".scroll-zoom");

window.addEventListener("scroll", () => {

zoomImages.forEach(img => {

const rect = img.getBoundingClientRect();
const windowHeight = window.innerHeight;

/* start zoom only when image is inside viewport */
if(rect.top < windowHeight && rect.bottom > 0){

let progress = (windowHeight - rect.top) / windowHeight;

/* delay zoom start */
progress = progress - 0.3;

if(progress < 0) progress = 0;

let scale = 1 + progress * 0.08;

if(scale > 1.08) scale = 1.08;

img.style.transform = `scale(${scale})`;

}

});

});

const heroBg = document.querySelector(".hero-bg");
const aboutHeroBg = document.querySelector(".about-hero-bg");
const productsHeroBg = document.querySelector(".products-hero-bg");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  if(heroBg){
    heroBg.style.transform = `scale(${1 + scroll * 0.00015})`;
  }

  if(aboutHeroBg){
    aboutHeroBg.style.transform = `scale(${1 + scroll * 0.00015})`;
  }

  if(productsHeroBg){
    productsHeroBg.style.transform = `scale(${1 + scroll * 0.00015})`;
  }
});