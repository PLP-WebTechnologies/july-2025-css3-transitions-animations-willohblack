// -----------------------------
// Dark/Light Mode Toggle
// -----------------------------
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// -----------------------------
// Animate Box on Button Click
// -----------------------------
const animateBoxBtn = document.getElementById("animateBoxBtn");
const animatedBox = document.getElementById("animatedBox");

// Function to toggle box animation
function toggleBoxAnimation(box) {
    box.classList.toggle("animate");
}
animateBoxBtn.addEventListener("click", () => toggleBoxAnimation(animatedBox));

// -----------------------------
// Form Validation
// -----------------------------
const sampleForm = document.getElementById("sampleForm");
const formMessage = document.getElementById("formMessage");

sampleForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        formMessage.textContent = "Please fill in all fields!";
        formMessage.style.color = "red";
    } else if (password.length < 6) {
        formMessage.textContent = "Password must be at least 6 characters!";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = `Welcome, ${username}! Form submitted successfully.`;
        formMessage.style.color = "green";
    }
});

// -----------------------------
// Reusable Function Example
// -----------------------------
function changeButtonText(button, text) {
    button.textContent = text;
}
changeButtonText(animateBoxBtn, "Click to Animate Box");

// -----------------------------
// Loop Example: Color Cycle
// -----------------------------
const colors = ["crimson", "teal", "orange", "purple"];
let colorIndex = 0;

function cycleBoxColor() {
    animatedBox.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}
setInterval(cycleBoxColor, 2000); // Changes color every 2 seconds
