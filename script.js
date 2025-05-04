// Keypress Detection
document.getElementById("nameInput").addEventListener("keypress", function (e) {
    console.log(`Key pressed: ${e.key}`);
  });
  
  // Button Click for Text Change
  const button = document.getElementById("submitButton");
  button.addEventListener("click", function () {
    button.innerText = "Clicked! Thank you.";
  });
  
  // Double Click for Secret Action
  button.addEventListener("dblclick", function () {
    alert("You discovered the secret action!");
  });
  
  // Hover Effect on Button (CSS already handles this)
  button.addEventListener("mouseover", function () {
    console.log("Hovered over the button!");
  });
  
  // Tabs functionality
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", function () {
      const contentId = this.getAttribute("data-target");
      document.querySelectorAll(".tab-content").forEach(content => {
        content.style.display = "none";
      });
      document.getElementById(contentId).style.display = "block";
    });
  });
  
  // Password Validation
  const passwordField = document.getElementById("password");
  const passwordFeedback = document.getElementById("passwordFeedback");
  
  passwordField.addEventListener("input", function () {
    const password = passwordField.value;
    if (password.length >= 8) {
      passwordFeedback.style.display = "none";
    } else {
      passwordFeedback.style.display = "block";
      passwordFeedback.innerText = "Password must be at least 8 characters long.";
    }
  });
  
  // Image Gallery
  const images = document.querySelectorAll(".gallery img");
  let currentImageIndex = 0;
  
  function showImage(index) {
    images.forEach((image, i) => {
      image.style.display = i === index ? "block" : "none";
    });
  }
  
  document.getElementById("nextImage").addEventListener("click", function () {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  });
  
  document.getElementById("prevImage").addEventListener("click", function () {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
  });
  
  showImage(currentImageIndex); // Show the first image by default
  