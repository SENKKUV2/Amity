// Get the form element
const form = document.querySelector('form');

// Add an event listener to the form submission
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();
  console.log("Form submitted");

  // Redirect to ChangeP.html
  window.location.href = 'ConfirmationE.html';
});