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


document.addEventListener("DOMContentLoaded", function () {
  // What kind of interface we want at the start 
  const APIKEY = "67a0285d70c1ac5876db566f";

  //[STEP 1]: Create our submit form listener
  document.getElementById("submit").addEventListener("click", function (e) {
    // Prevent default action of the button 
    e.preventDefault();

    //[STEP 2]: Let's retrieve form data
    // For now, we assume all information is valid
    // You are to do your own data validation
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    //[STEP 3]: Get form values when the user clicks on send
    // Adapted from restdb API
    let jsondata = {
      "email": email,
      "password": password
    };

    //[STEP 4]: Create our AJAX settings. Take note of API key
    let settings = {
      method: "POST", //[cher] we will use post to send info
      headers: {
        "Content-Type": "application/json",
        "x-apikey": APIKEY,
        "Cache-Control": "no-cache"
      },
      body: JSON.stringify(jsondata),
    }

    //[STEP 5]: Send our AJAX request over to the DB and print response of the RESTDB storage to console.
    fetch("https://aprilsonata-d713.restdb.io/rest/customer", settings)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  });//end click 
});

gsap.registerPlugin(ScrollTrigger);

// (Optional) Stub for toggleMenu functionality
function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
}

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