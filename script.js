// === script.js ===

// Wait for DOM to load
window.addEventListener("DOMContentLoaded", () => {
    // Form Validation
    const form = document.querySelector("form");
    const nameInput = document.querySelector("input[type='text']");
    const emailInput = document.querySelector("input[type='email']");
    const feedbacks = document.querySelectorAll(".feedback");
  
    function showFeedback(input, message) {
      const feedback = input.nextElementSibling;
      feedback.textContent = message;
      feedback.style.display = "block";
    }
  
    function clearFeedback() {
      feedbacks.forEach(fb => (fb.style.display = "none"));
    }
  
    form.addEventListener("submit", function (e) {
      clearFeedback();
      let valid = true;
  
      if (nameInput.value.trim() === "") {
        showFeedback(nameInput, "Name is required.");
        valid = false;
      }
  
      if (emailInput.value.trim() === "" || !emailInput.value.includes("@")) {
        showFeedback(emailInput, "Enter a valid email address.");
        valid = false;
      }
  
      if (!valid) e.preventDefault();
    });
  
    // Slider Interaction
    const slider = document.querySelector(".slider");
    if (slider) {
      slider.addEventListener("input", () => {
        document.body.style.opacity = slider.value / 100;
      });
    }
  
    // Button Modal Interaction
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector(".close");
    const openModalBtn = document.querySelector("button");
  
    if (modal && closeBtn && openModalBtn) {
      openModalBtn.addEventListener("click", () => {
        modal.style.display = "flex";
      });
  
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });
  
      window.addEventListener("click", e => {
        if (e.target === modal) modal.style.display = "none";
      });
    }
  
    // OnMouseOver example
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
      section.addEventListener("mouseover", () => {
        section.style.backgroundColor = "#f0f8ff";
      });
      section.addEventListener("mouseout", () => {
        section.style.backgroundColor = "#fff";
      });
    });
  
    // OnChange example (if any dropdowns or inputs need tracking)
    document.querySelectorAll("input, select").forEach(input => {
      input.addEventListener("change", () => {
        console.log(`${input.name || input.type} changed to:`, input.value);
      });
    });
  });
  