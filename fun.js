


        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('registration-form');
          
            // Restore saved values
            const savedData = JSON.parse(localStorage.getItem('registrationFormData'));
            if (savedData) {
              for (const [key, value] of Object.entries(savedData)) {
                const input = form.elements[key];
                if (input) input.value = value;
              }
            }
          
            // Save on every input change
            form.addEventListener('input', () => {
              const formData = new FormData(form);
              const dataToSave = {};
              formData.forEach((value, key) => {
                dataToSave[key] = value;
              });
              localStorage.setItem('registrationFormData', JSON.stringify(dataToSave));
            });
          
            // Clear storage on submit (optional)
            form.addEventListener('submit', () => {
              localStorage.removeItem('registrationFormData');
            });
          });
          