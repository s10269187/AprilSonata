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
  const APIKEY = "67a0285d70c1ac5876db566f";
  const form = document.getElementById("register");

  form.addEventListener("submit", function (e) {
    // Check if the form is valid using built-in HTML5 validation
    if (!form.checkValidity()) {
      // This will display the browser's validation messages
      form.reportValidity();
      e.preventDefault();
      return;
    }
    
    // Prevent default form submission
    e.preventDefault();

    // Retrieve and trim form data
    let username = document.getElementById("username").value.trim();
    let phonenumber = document.getElementById("phonenumber").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let points = document.getElementById("points").value;

    // Prepare data to be sent
    let jsondata = {
      username: username,
      email: email,
      phonenumber: phonenumber,
      password: password,
      points: points
    };

    // AJAX settings with API key
    let settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-apikey": APIKEY,
        "Cache-Control": "no-cache"
      },
      body: JSON.stringify(jsondata)
    };

    // Send AJAX request to the RESTdb API
    fetch("https://aprilsonata-d713.restdb.io/rest/customer", settings)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Redirect upon successful registration
        window.location.href = "index.html";
      })
      .catch(error => {
        console.error("Error:", error);
        alert("There was an error processing your request.");
      });
  });
});

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