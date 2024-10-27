document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");
  const spinner = document.getElementById("spinner");
  const cancelButton = document.getElementById("cancelButton");

  form.addEventListener("submit", (event) => {
    // Custom validation logic
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const message = form.elements["message"].value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("All fields are required.");
      event.preventDefault();
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
    } else {
      // Show spinner
      spinner.classList.remove("hidden");
      // Simulate form submission delay
      setTimeout(() => {
        // Hide spinner and show success message
        spinner.classList.add("hidden");
        successMessage.classList.remove("hidden");
        form.reset();
      }, 2000); // Simulate a 2-second delay
      event.preventDefault(); // Prevent actual form submission for demo purposes
    }
  });

  cancelButton.addEventListener("click", () => {
    // Hide spinner and reset form
    spinner.classList.add("hidden");
    form.reset();
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
