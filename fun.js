const form = document.getElementById("registration-form");

        // Handle form submission
        form.addEventListener("submit", function(event) {
            event.preventDefault();  // Prevent the default form submission behavior

            // Get form data
            const formData = new FormData(form);

            // Prepare the data to send (this can be an AJAX request or a regular POST)
            const data = new URLSearchParams(formData).toString();

            // You can use fetch or XMLHttpRequest to send the form data to your server
            fetch('/register', {  // Assuming you want to send the data to a "/register" endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: data
            })
            .then(response => {
                if (response.ok) {
                    // Display a success message or redirect after successful registration
                    document.getElementById("status-message").innerText = "Registration successful! Redirecting...";
                    setTimeout(function() {
                        // Optionally, redirect the user or update the UI
                        window.location.href = "/welcome";  // Change this to the page you want to redirect to
                    }, 2000); // 2 seconds delay before redirecting
                } else {
                    // Handle any errors that might occur
                    document.getElementById("status-message").innerText = "There was an error with your registration. Please try again.";
                }
            })
            .catch(error => {
                // Handle network or other errors
                document.getElementById("status-message").innerText = "Network error. Please try again later.";
            });
        });