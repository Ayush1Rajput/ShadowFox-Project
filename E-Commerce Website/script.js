let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}


// Discount Slideshow
let discountSlideIndex = 0;
showDiscountSlides();

function showDiscountSlides() {
  let i;
  let slides = document.getElementsByClassName("discount-slide");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  discountSlideIndex++;
  if (discountSlideIndex > slides.length) {
    discountSlideIndex = 1;
  }

  slides[discountSlideIndex - 1].style.display = "block";
  setTimeout(showDiscountSlides, 3000); // Change slide every 3 seconds
}