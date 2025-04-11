const scriptURL = 'https://script.google.com/macros/s/AKfycbzhz_iKxNVQ3M91qCXmPoZvaZr8hy4hSMlmHlJkTypK-tlpt8dbH5zCkF5jnRSNQbe4/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
  .then(response => {
    // Show the custom alert
    const alertBox = document.getElementById('custom-alert');
    alertBox.style.display = 'block';
    
    // Close the alert after clicking the button
    document.getElementById('close-alert').addEventListener('click', () => {
      alertBox.style.display = 'none';
      window.location.reload();
    });
  })
  .catch(error => console.error('Error!', error.message));
})