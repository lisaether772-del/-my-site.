document.addEventListener("DOMContentLoaded", () => {
    
   
    const settingsTrigger = document.getElementById("settingsTrigger");
    const darkModeModalBackdrop = document.getElementById("darkModeModalBackdrop");
    const closeModalBtn = document.getElementById("closeModalBtn");
    
    
    function toggleDarkModeModal(show) {
        if (show) {
            darkModeModalBackdrop.classList.add("show");
            document.body.style.overflow = 'hidden'; 
        } else {
            darkModeModalBackdrop.classList.remove("show");
            document.body.style.overflow = '';
        }
    }

    
    settingsTrigger.addEventListener("click", () => toggleDarkModeModal(true));
    closeModalBtn.addEventListener("click", () => toggleDarkModeModal(false));
    darkModeModalBackdrop.addEventListener("click", (e) => {
        
        if (e.target.id === "darkModeModalBackdrop") {
            toggleDarkModeModal(false);
        }
    });

    
    const themeCheckbox = document.getElementById("themeCheckbox");
    const modeLabel = document.getElementById("modeLabel");
    const body = document.body;

    
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

    
    const timeGreeting = document.getElementById("timeGreeting");
    const hour = new Date().getHours();
    let text = "";

    if (hour < 12) text = "Good Morning!";
    else if (hour < 18) text = "Good Afternoon!";
    else text = "Good Evening!";
    
    timeGreeting.textContent = text;


    
    const editBtn = document.getElementById("editJobBtn");
    const jobTitle = document.getElementById("jobTitle");

    editBtn.addEventListener("click", () => {
        const newTitle = prompt("Update your job title:", jobTitle.textContent);
        if (newTitle && newTitle.trim() !== "") {
            jobTitle.textContent = newTitle;
        }
    });


    
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


    
    const contactForm = document.getElementById("contactForm");
    const nameInput = document.getElementById("nameField");
    const emailInput = document.getElementById("emailField");
    const msgBox = document.getElementById("msgBox");
    const counter = document.getElementById("counter");

    
    msgBox.addEventListener("input", () => {
        const remaining = 200 - msgBox.value.length;
        counter.textContent = remaining;
    });

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let valid = true;
        
        
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

    
    const dateDisplay = document.getElementById("dateDisplay");
    const today = new Date();
    dateDisplay.textContent = today.toLocaleDateString();

});

