document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. DARK MODE MODAL POP-UP LOGIC (New Focus) ---
    const settingsTrigger = document.getElementById("settingsTrigger");
    const darkModeModalBackdrop = document.getElementById("darkModeModalBackdrop");
    const closeModalBtn = document.getElementById("closeModalBtn");
    
    // Function to open/close the Dark Mode Modal
    function toggleDarkModeModal(show) {
        if (show) {
            darkModeModalBackdrop.classList.add("show");
            document.body.style.overflow = 'hidden'; // Prevent scrolling main content
        } else {
            darkModeModalBackdrop.classList.remove("show");
            document.body.style.overflow = '';
        }
    }

    // Event listeners for the Dark Mode Modal
    settingsTrigger.addEventListener("click", () => toggleDarkModeModal(true));
    closeModalBtn.addEventListener("click", () => toggleDarkModeModal(false));
    darkModeModalBackdrop.addEventListener("click", (e) => {
        // Close when clicking the backdrop, but not the modal itself
        if (e.target.id === "darkModeModalBackdrop") {
            toggleDarkModeModal(false);
        }
    });

    // --- 2. Dark Mode Functionality (Now inside the Modal) ---
    const themeCheckbox = document.getElementById("themeCheckbox");
    const modeLabel = document.getElementById("modeLabel");
    const body = document.body;

    // Load saved preference or default to dark
    // The checkbox state is set here based on the saved theme
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeCheckbox.checked = true; 
        modeLabel.textContent = "Light Mode Active";
    }

    themeCheckbox.addEventListener("change", () => {
        if (themeCheckbox.checked) {
            body.classList.add("light-mode");
            localStorage.setItem("theme", "light");
            modeLabel.textContent = "Light Mode Active";
        } else {
            body.classList.remove("light-mode");
            localStorage.setItem("theme", "dark");
            modeLabel.textContent = "Dark Mode Active";
        }
    });

    // --- 3. Dynamic Time Greeting ---
    const timeGreeting = document.getElementById("timeGreeting");
    const hour = new Date().getHours();
    let text = "";

    if (hour < 12) text = "Good Morning!";
    else if (hour < 18) text = "Good Afternoon!";
    else text = "Good Evening!";
    
    timeGreeting.textContent = text;


    // --- 4. Edit Job Title ---
    const editBtn = document.getElementById("editJobBtn");
    const jobTitle = document.getElementById("jobTitle");

    editBtn.addEventListener("click", () => {
        const newTitle = prompt("Update your job title:", jobTitle.textContent);
        if (newTitle && newTitle.trim() !== "") {
            jobTitle.textContent = newTitle;
        }
    });


    // --- 5. Toggle Skills ---
    const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
    const skillsList = document.getElementById("skillsList");

    toggleSkillsBtn.addEventListener("click", () => {
        if (skillsList.classList.contains("hidden")) {
            skillsList.classList.remove("hidden");
            toggleSkillsBtn.textContent = "Hide";
        } else {
            skillsList.classList.add("hidden");
            toggleSkillsBtn.textContent = "Show";
        }
    });


    // --- 6. Quote Generator ---
    const quoteBtn = document.getElementById("quoteBtn");
    const quoteDisplay = document.getElementById("quoteDisplay");
    const quotes = [
        "First, solve the problem. Then, write the code.",
        "Talk is cheap. Show me the code.",
        "In order to understand recursion, one must first understand recursion.",
        "Software is a great combination between artistry and engineering."
    ];

    quoteBtn.addEventListener("click", () => {
        const random = Math.floor(Math.random() * quotes.length);
        quoteDisplay.textContent = `"${quotes[random]}"`;
    });


    // --- 7. Form Validation ---
    const contactForm = document.getElementById("contactForm");
    const nameInput = document.getElementById("nameField");
    const emailInput = document.getElementById("emailField");
    const msgBox = document.getElementById("msgBox");
    const counter = document.getElementById("counter");

    // Character Counter
    msgBox.addEventListener("input", () => {
        const remaining = 200 - msgBox.value.length;
        counter.textContent = remaining;
    });

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let valid = true;
        
        // Clear errors
        document.querySelectorAll('.error-msg').forEach(el => el.style.display = 'none');
        document.querySelectorAll('input, textarea').forEach(el => el.style.borderColor = 'var(--border)');

        if(!nameInput.value.trim()) {
            showError("nameError", "Please enter your name.", nameInput);
            valid = false;
        }

        if(!emailInput.value.includes("@")) {
            showError("emailError", "Please enter a valid email.", emailInput);
            valid = false;
        }

        if(!msgBox.value.trim()) {
            showError("msgError", "Please write a message.", msgBox);
            valid = false;
        }

        if(valid) {
            alert("Message sent successfully!");
            contactForm.reset();
            counter.textContent = "200";
        }
    });

    function showError(id, msg, input) {
        const err = document.getElementById(id);
        err.textContent = msg;
        err.style.display = "block";
        input.style.borderColor = "#ef4444";
    }

    // Date Footer
    const dateDisplay = document.getElementById("dateDisplay");
    const today = new Date();
    dateDisplay.textContent = today.toLocaleDateString();
});