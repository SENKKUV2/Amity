// Get the form element
const form = document.querySelector('form');

// Add an event listener to the form's submit event
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Redirect to ConfirmationP.html
  window.location.href = 'Dashboard.html';
});