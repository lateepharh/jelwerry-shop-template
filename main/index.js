const search = document.getElementById("search");
const input = document.querySelector(".input");
const button = document.querySelector(".button");
button.addEventListener("click", ()=>{
   input.classList.toggle("active");
   search.focus();
})
//slideshow 
let slideIndex =1;
showSlides(slideIndex);
function plusSlides(n) {
   showSlides(slideIndex += n);
}
function showSlides(n) {
   let i;
   let slides = document.getElementsByClassName("myslides")
   let dots = document.getElementsByClassName("dots");
   if (n > slides.length) {
      slideIndex = 1
   }
  if (n < 1) {
     slideIndex = slides.length
   }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display ="none";
   }
  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", " ");      
  }
   slides[slideIndex - 1].style.display ="block";
   dots[slideIndex- 1].className += "active";
}