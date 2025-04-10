const scriptURL = 'https://script.google.com/macros/s/AKfycbzhz_iKxNVQ3M91qCXmPoZvaZr8hy4hSMlmHlJkTypK-tlpt8dbH5zCkF5jnRSNQbe4/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})