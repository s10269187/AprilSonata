document.addEventListener("DOMContentLoaded", function () {
    // --- Registration Form Submission --- 
    const APIKEY = "67a0285d70c1ac5876db566f";
    const form = document.getElementById("register");
  
    form.addEventListener("submit", function (e) {
      // Check if the form is valid using built-in HTML5 validation 
      if (!form.checkValidity()) {
        form.reportValidity();
        e.preventDefault();
        return;
      }
  
      e.preventDefault();
  
      let username = document.getElementById("username").value.trim();
      let phonenumber = document.getElementById("phonenumber").value.trim();
      let email = document.getElementById("email").value.trim();
      let password = document.getElementById("password").value.trim();
      let points = document.getElementById("points").value || 0;
  
      let jsondata = {
        username: username,
        email: email,
        phonenumber: phonenumber,
        password: password,
        points: points
      };
  
      let settings = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-apikey": APIKEY,
          "Cache-Control": "no-cache"
        },
        body: JSON.stringify(jsondata)
      };
  
      fetch("https://aprilsonata-d713.restdb.io/rest/customer", settings)
        .then(response => response.json())
        .then(data => {
          console.log(data);
  
          // Save data to local storage 
          localStorage.setItem("user", JSON.stringify(data));
  
          // Redirect upon successful registration 
          window.location.href = "index.html";
        })
        .catch(error => {
          console.error("Error:", error);
          alert("There was an error processing your request.");
        });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const APIKEY = "67a0285d70c1ac5876db566f";
  
    document.getElementById("login").addEventListener("submit", function (e) {
      e.preventDefault();
  
      let username = document.getElementById("username").value.trim(); // Trimming whitespace
      let password = document.getElementById("password").value.trim(); // Trimming whitespace
  
      // Fetch user data from RestDB
      fetch(`https://aprilsonata-d713.restdb.io/rest/customer?q={"username":"${username}"}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-apikey": APIKEY,
          "Cache-Control": "no-cache"
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          if (data.length === 0) {
            alert("Account does not exist. Please sign up.");
            return;
          }
  
          let user = data[0];
  
          // Check if the password matches (be sure the property name matches the one returned by the API)
          if (user.password === password) {  // Ensure the case is correct here (password)
            alert("Login successful!");
  
            // Save user session in sessionStorage
            sessionStorage.setItem("user", JSON.stringify(user));
  
            // Redirect after login
            window.location.href = "index.html";
          } else {
            alert("Incorrect password. Please try again.");
          }
        })
        .catch(error => {
          console.error("Error:", error);
          alert("An error occurred while logging in. Please try again.");
        });
    });
  });
  
  function updatePointsDisplay() {
    // Retrieve the user object from session storage
    let user = JSON.parse(sessionStorage.getItem("user"));
  
    if (user && user.points !== undefined) {
      // Update the points display
      document.getElementById("rewardspts").textContent = "Your Rewards Points: " + user.points;
    } else {
      // If points are not found, default to 0
      document.getElementById("rewardspts").textContent = "Your Rewards Points: 0";
    }
  }
  
  
  // Example: After a user earns points
  function earnPoints(amount) {
    let user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      user.points += amount; // Add the earned points
      sessionStorage.setItem("user", JSON.stringify(user)); // Update sessionStorage
      updatePointsDisplay(); // Update the displayed points
    }
  }
  
  // Example: After a user spends points
  function spendPoints(amount) {
    let user = JSON.parse(sessionStorage.getItem("user"));
    if (user && user.points >= amount) {
      user.points -= amount; // Deduct the spent points
      sessionStorage.setItem("user", JSON.stringify(user)); // Update sessionStorage
      updatePointsDisplay(); // Update the displayed points
    } else {
      alert("You don't have enough points.");
    }
  }
  
  
  document.addEventListener("DOMContentLoaded", function () {
    updatePointsDisplay(); // Update points when the page is loaded
  });
  