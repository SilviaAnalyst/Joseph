const scriptURL = 'https://script.google.com/macros/s/AKfycbzhz_iKxNVQ3M91qCXmPoZvaZr8hy4hSMlmHlJkTypK-tlpt8dbH5zCkF5jnRSNQbe4/exec'

const form = document.forms['contact-form']

const partySelect = document.getElementById('party');
const optInBtn = document.getElementById('optInBtn');
const forme= document.getElementById('contact-form');
const popup = document.getElementById('popup');
const idType = document.getElementById("id");
const idInput = document.getElementById("idInput");
const inputLabel = document.getElementById("inputLabel");


idType.addEventListener("change", function () {
  if (this.value === "passport") {
    inputLabel.textContent = "Enter Passport:";
    idInput.placeholder = "Enter Passport";
  } else {
    inputLabel.textContent = "Enter ID:";
    idInput.placeholder = "Enter ID";
  }
});


idType.addEventListener("change", function () {
  const selected = this.value;

  // Reset input
  idInput.value = "";
  idInput.placeholder = "Enter ID";

  if (selected === "national") {
    idInput.placeholder = "e.g. 12345678";
    idInput.setAttribute("maxlength", "8");
    idInput.setAttribute("pattern", "\\d{8}");
  } else if (selected === "passport") {
    idInput.placeholder = "e.g. A1234567";
    idInput.setAttribute("maxlength", "9");
    idInput.setAttribute("pattern", "[A-Z]{1}\\d{7,8}");
  } else {
    idInput.removeAttribute("maxlength");
    idInput.removeAttribute("pattern");
  }
});


    function showPopup(message) {
      popup.textContent = message;
      popup.style.display = 'block';

      // Automatically hide after 4 seconds
      setTimeout(() => {
        popup.style.display = 'none';
      }, 4000);
    }
    

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

 // Enable/Disable Opt In button based on party selection
 partySelect.addEventListener('change', () => {
  const selectedParty = partySelect.value;

  if (selectedParty) {
    optInBtn.disabled = false;
    optInBtn.classList.add('enabled');
    // optInBtn.textContent = "Opt In to " + selectedParty;
   // NEW popup when party is selected
   showPopup(`🎉 You selected ${selectedParty}! You can now opt in.`);
  } else {
    optInBtn.disabled = true;
    optInBtn.classList.remove('enabled');
    optInBtn.textContent = "Opt In";
  }})

// Show popup alert with party name upon Opt In button click
optInBtn.addEventListener('click', () => {
  const party = partySelect.value;
  if (party) {
    showPopup(`🎉 Congratulations! You are now a member of ${party}`);
  }
});

// Prevent form submission if no party is selected
forme.addEventListener('submit', (e) => {
  const party = partySelect.value;
  if (!party) {
    e.preventDefault();
    showPopup("Please select a political party before submitting.");
  }
});