// Content Data for EN and PY modes with respective categories & mode-specific socials
const contentData = {
    en: {
        logo: "EnglishHub",
        heroBadge: '<i class="fa-solid fa-sparkles"></i> Master the Language',
        heroTitle: "Elevate Your English Speaking & Writing Skills",
        heroDesc: "Discover daily lessons, grammar hacks, vocabulary builders, and expert content creation tips to fluent communication.",
        btnExplore: "Explore Categories",
        btnSubscribe: "Contact Me",
        cardIcon: "fa-solid fa-book-open-reader",
        cardTitle: "Daily English Challenge",
        cardDesc: "Learn 5 new advanced words everyday and level up your fluency.",
        categoriesHeading: "English Learning Categories",
        socialHeading: "Connect With English Creator",
        socialDesc: "Want to collaborate or follow my daily English reels? Reach out via my profiles below!",
        footerText: "&copy; 2026 EnglishHub. All rights reserved.",
        socials: [
            { name: "YouTube", url: "https://youtube.com/@your_english_channel", bg: "#ff0000", icon: "fa-brands fa-youtube" },
            { name: "Instagram", url: "https://instagram.com/@your_english_insta", bg: "#e1306c", icon: "fa-brands fa-instagram" },
            { name: "Facebook", url: "https://facebook.com/@your_english_fb", bg: "#1877f2", icon: "fa-brands fa-facebook" }
        ],
        categories: [
            { title: "MCQ Quiz", desc: "Test your skills with interactive multiple-choice questions.", link: "content/en-mcq.html" },
            { title: "Fill in the Blanks", desc: "Improve grammar by filling missing words.", link: "content/en-fill-blanks.html" },
            { title: "Daily Use English", desc: "Master sentences used in everyday conversations.", link: "content/en-daily-sentences.html" },
            { title: "Common Mistakes", desc: "Learn 'Don't Say vs Say' and correct common errors.", link: "content/en-mistakes.html" },
            { title: "Vocabulary Power", desc: "Expand your word bank with advanced idioms and synonyms.", link: "content/en-vocabulary.html" },
            { title: "Grammar Rules", desc: "Deep dive into tenses, prepositions, and active/passive voice.", link: "content/en-grammar.html" },
            { title: "Speaking Practice", desc: "Hindi to English translation and conversation drills.", link: "content/en-speaking.html" },
            { title: "Idioms & Phrasal Verbs", desc: "Sound like a native speaker with smart expressions.", link: "content/en-idioms.html" },
            { title: "Viral Challenges", desc: "5-second quizzes and 99% fail challenges for creators.", link: "content/en-viral.html" }
        ]
    },
    py: {
        logo: "PythonCraft",
        heroBadge: '<i class="fa-solid fa-terminal"></i> Code Your Future',
        heroTitle: "Master Python Programming from Scratch to Pro",
        heroDesc: "Learn clean coding, data structures, automation scripts, and build real-world projects with Python effortlessly.",
        btnExplore: "Start Coding",
        btnSubscribe: "Contact Me",
        cardIcon: "fa-solid fa-laptop-code",
        cardTitle: "Daily Python Snippet",
        cardDesc: "Solve 1 quick algorithmic problem everyday and sharpen your logic.",
        categoriesHeading: "Python Learning Categories",
        socialHeading: "Connect With Python Creator",
        socialDesc: "Want to connect or check out my coding reels? Visit my social profiles below!",
        footerText: "&copy; 2026 PythonCraft. All rights reserved.",
        socials: [
            { name: "YouTube", url: "https://youtube.com/@your_python_channel", bg: "#ff0000", icon: "fa-brands fa-youtube" },
            { name: "Instagram", url: "https://instagram.com/@your_python_insta", bg: "#e1306c", icon: "fa-brands fa-instagram" },
            { name: "Facebook", url: "https://facebook.com/@your_python_fb", bg: "#1877f2", icon: "fa-brands fa-facebook" }
        ],
        categories: [
            { title: "MCQ Quiz", desc: "Test your Python knowledge with tricky multiple-choice questions.", link: "content/py-mcq.html" },
            { title: "Guess the Output", desc: "Analyze code snippets and predict the exact output.", link: "content/py-output.html" },
            { title: "Spot the Bug", desc: "Find errors and debug buggy Python code quickly.", link: "content/py-debug.html" },
            { title: "Beginner vs Pro", desc: "Learn clean code practices and smart shortcuts.", link: "content/py-comparison.html" },
            { title: "Python Tips & Tricks", desc: "Discover hidden features and time-saving shortcuts.", link: "content/py-tips.html" },
            { title: "Day 1 to 30 Challenge", desc: "Step-by-step coding challenges to master Python.", link: "content/py-challenge.html" },
            { title: "Mini Project Showcase", desc: "Build real-world apps and automation scripts in seconds.", link: "content/py-projects.html" },
            { title: "Interview Questions", desc: "Expectation vs Reality and coding interview prep.", link: "content/py-interview.html" },
            { title: "Satisfying Coding Videos", desc: "Visual problem-solving and clean syntax formats.", link: "content/py-viral.html" }
        ]
    }
};

// Function to switch modes dynamically
function switchMode(mode) {
    const body = document.body;
    const enBtn = document.getElementById("enBtn");
    const pyBtn = document.getElementById("pyBtn");

    if (mode === 'en') {
        body.classList.remove('py-mode');
        body.classList.add('en-mode');
        enBtn.classList.add('active');
        pyBtn.classList.remove('active');
        updateContent('en');
    } else {
        body.classList.remove('en-mode');
        body.classList.add('py-mode');
        pyBtn.classList.add('active');
        enBtn.classList.remove('active');
        updateContent('py');
    }
}

// Function to update webpage content and render categories & socials
function updateContent(lang) {
    const data = contentData[lang];

    document.getElementById("logo-text").innerText = data.logo;
    document.getElementById("hero-badge").innerHTML = data.heroBadge;
    document.getElementById("hero-title").innerText = data.heroTitle;
    document.getElementById("hero-desc").innerText = data.heroDesc;
    document.getElementById("btn-explore").innerText = data.btnExplore;
    document.getElementById("btn-subscribe").innerText = data.btnSubscribe;

    document.getElementById("card-icon").className = data.cardIcon + " floating-icon";
    document.getElementById("card-title").innerText = data.cardTitle;
    document.getElementById("card-desc").innerText = data.cardDesc;

    document.getElementById("categories-heading").innerText = data.categoriesHeading;
    document.getElementById("social-heading").innerText = data.socialHeading;
    document.getElementById("social-desc").innerText = data.socialDesc;
    document.getElementById("footer-text").innerHTML = data.footerText;

    // Render Category Cards linking to content/ folder
    const grid = document.getElementById("categoriesGrid");
    grid.innerHTML = "";
    data.categories.forEach(cat => {
        const card = document.createElement("a");
        card.href = cat.link;
        card.className = "category-card";
        card.innerHTML = `
            <div>
                <h3>${cat.title}</h3>
                <p>${cat.desc}</p>
            </div>
            <span style="margin-top: 1rem; font-size: 0.85rem; font-weight: 600; color: var(--primary);">Explore &rarr;</span>
        `;
        grid.appendChild(card);
    });

    // Render Mode-Specific Social Links in Contact Section
    const socialGrid = document.getElementById("socialLinksGrid");
    socialGrid.innerHTML = "";
    data.socials.forEach(soc => {
        const sBtn = document.createElement("a");
        sBtn.href = soc.url;
        sBtn.target = "_blank";
        sBtn.className = "social-btn";
        sBtn.style.background = soc.bg;
        sBtn.innerHTML = `<i class="${soc.icon}"></i> ${soc.name}`;
        socialGrid.appendChild(sBtn);
    });
}

// Mobile Menu Toggle Logic
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close mobile menu on click link
document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Initial load for default English mode
updateContent('en');