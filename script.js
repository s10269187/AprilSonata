let slideIndex = 1;

document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});

// Function to move to the next/previous slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to go to a specific slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to show slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (slides.length === 0) return; // Prevents errors if no slides are found

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Auto-play functionality
setInterval(() => {
  plusSlides(1);
}, 4000); // Change slide every 3 seconds


function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  const overlay = document.getElementById('overlay');
  const closeButton = document.querySelector('.close-btn');
  navLinks.classList.toggle('nav-active');
  overlay.classList.toggle('active');
  closeButton.style.display = closeButton.style.display === 'none' ? 'block' : 'none'; // Toggle close button
}

gsap.registerPlugin(ScrollTrigger);

// GSAP Timeline for the fullScene reveal effect
gsap.timeline({
  scrollTrigger: {
    trigger: "#fullScene",
    start: "top top",
    end: "+=1500", // Adjust the scroll distance as needed
    scrub: true,
    pin: true
  }
})
  // Expand the circular hole in the cover (by animating --holeRadius)
  .to("#cover", {
    duration: 1,
    "--holeRadius": "2000px",
    ease: "power1.inOut"
  })
  // Fade in the centered text content as the background is revealed
  .to(
    ".sceneryContent",
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut"
    },
    "-=0.5" // Overlap slightly with the cover animation
  );
