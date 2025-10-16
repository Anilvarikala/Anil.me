/*
 * Anil Varikala - Portfolio Website Script
 * Final Version: October 12, 2025
 * ----------------------------------------
 * This script handles all interactivity for the portfolio website.
 */

// --- DATA STORE ---
// **** IMPORTANT: UPDATE YOUR LINKS HERE ****
const siteData = {
  socialHandles: {
    linkedin: "https://www.linkedin.com/in/anil-varikala-52b640254/",
    github: "https://github.com/Anilvarikala",
    leetcode: "https://leetcode.com/u/Varikala_Anil/",
  },
  journey: [
    {
      year: 2022,
      title: "Computer Science Journey Begins",
      desc: "Started Learning C Language and basics of problem solving",
      color: "cyan",
    },
    {
      year: 2023,
      title: "Learning Web tech and DSA",
      desc: "Doing some minor Projects and problem solving",
      color: "yellow",
    },
  
    {
      year: 2024,
      title: "Building websites, Designing",
      desc: "Built DrThank You , Educonnect, EdTech Platform",
      color: "pink",
    },
    {
      year: 2024,
      title: "Making DSA Strong, Learning Automation",
      desc: "Solved over 500+ across Leetcode and Building Ai agents.",
      color: "green",
    },
    
  ],
  projects: [
    {
      title: "DrThank You",
      link: "https://drthankyou2006.vercel.app/",
      category: "healthcare",
      tagline: "AI-Powered Telemedicine Platform",
      description:
        "Built a comprehensive telemedicine platform with AI-powered symptom analysis, Google Meet integration, and intelligent specialist recommendations.",
      tech: [
        "React.js",
        "Firebase",
        "Node.js",
        "Medical Bot",
        "AI Integration",
      ],
    
    },
    {
      title: "Educonnect",
      link: "https://educonnect2006.vercel.app/",
      category: "education",
      tagline: "Smart Education Portal",
      description:
        "Developed a responsive education portal with task dashboards and AI-powered doubt resolution for MPC and BiPC streams.",
      tech: ["React.js", "Firebase", "Bootstrap", "AI Integration"],
    
    },
    {
      title: "Agent Chatgpt",
      link: "#",
      category: "Ai agents",
      tagline: "Integrating cloud services under one line.",
      description:
        "Developed a smart productivity platform integrating AI-driven task management, workflow automation, and real-time analytics to streamline personal and professional efficiency.",
      tech: ["N8N", "Reactjs", "Pinecone", "MongoDb", "Nodejs", "Ai agents"],
     
    },
    {
      title: "Edtech Platform",
      link: "https://www.figma.com/design/PgUCh4cmbtS5JTzUApFmsk/EduConnect?node-id=0-1",
      category: "design",
      tagline: "Complete E-Learning UI/UX",
      description:
        "Designed a complete interface for an e-learning platform with interactive wireframes, quizzes, and AI support.",
      tech: ["Figma", "UI/UX Design", "Prototyping"],
   
    },
    {
      title: "MSV Pickles",
      link: "https://www.figma.com/design/Jmqr2TTTNEv7Tbu2HJosxD/MSV-PICKELS?node-id=0-1&t=hYhS4BZ8SNZH0ovs-0",
      category: "e-commerce",
      tagline: "E-commerce Platform",
      description:
        "Crafted an intuitive UI for a pickle store with seamless shopping experience. Built powerful backend with Node.js, Express, and MongoDB.",
      tech: ["Figma", "Node.js", "Express.js", "MongoDB"],
   
    },
  ],
  stats: [
    { value: "550+", label: "Problems Solved" },
    { value: "1493", label: "LeetCode Rating" },
    { value: "50/100/200", label: "Day Streak Badges" },
    { value: "9.03", label: "CGPA" },
  ],
  skills: {
    languages: {
      color: "cyan",
      data: [
        { name: "Java", icon: "devicon-java-plain", dots: 5 },
        { name: "Python", icon: "devicon-python-plain", dots: 4 },
        { name: "JavaScript", icon: "devicon-javascript-plain", dots: 4 },
        { name: "C", icon: "devicon-c-plain", dots: 4 },
      ],
    },
    frontend: {
      color: "yellow",
      data: [
        { name: "React.js", icon: "devicon-react-original", dots: 4 },
        { name: "HTML/CSS", icon: "devicon-html5-plain", dots: 4 },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", dots: 4 },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain", dots: 4 },
      ],
    },
    backend: {
      color: "pink",
      data: [
        { name: "Node.js", icon: "devicon-nodejs-plain", dots: 4 },
        { name: "Express.js", icon: "devicon-express-original", dots: 4 },
        { name: "MongoDB", icon: "devicon-mongodb-plain", dots: 3 },
        { name: "MySQL", icon: "devicon-mysql-plain", dots: 4 },
      ],
    },
    tools: {
      color: "green",
      data: [
        { name: "Git", icon: "devicon-git-plain", dots: 4 },
        { name: "Firebase", icon: "devicon-firebase-plain", dots: 3 },
        { name: "Figma", icon: "devicon-figma-plain", dots: 3 },
        { name: "N8N", icon: "bx bx-sitemap", dots: 4 },
        { name: "VS Code", icon: "devicon-vscode-plain", dots: 4 },
      ],
    },
  },
  achievements: [
    {
      icon: "bx-trophy",
      title: "AI Hackathon Finalist",
      source: "Swecha",
      desc: "Reached finals in competitive AI hackathon",
    },
    {
      icon: "bx-code-alt",
      title: "LeetCode Problem Solver",
      source: "LeetCode",
      desc: "460+ problems solved | Rating: 1493",
    },
    {
      icon: "bx-certification",
      title: "Python Merit Certificate",
      source: "IIT Roorkee",
      desc: "Score: 76%",
    },
    {
      icon: "bx-star",
      title: "Top 10 - Geekweek",
      source: "ECA CLUB",
      desc: "College Level Coding Contest",
    },
    {
      icon: "bx-check-shield",
      title: "Problem Solving Certified",
      source: "HackerRank",
      desc: "Intermediate Level",
    },
    {
      icon: "bx-brain",
      title: "DSA Specialization",
      source: "Apna College",
      desc: "Data Structures and Algorithms",
    },
  ],
  contactInfo: [
    { icon: "bxs-envelope", label: "Email", value: "varikalaanil@gmail.com" },
    { icon: "bxs-phone", label: "Phone", value: "+91 7013725762" },
    { icon: "bxs-map", label: "Location", value: "Hyderabad, India" },
  ],
};

// --- CONTACT FORM SUBMISSION ---

// --- CONTACT FORM SUBMISSION ---
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formMessage = document.getElementById("form-message");
    formMessage.textContent = "Sending...";

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    try {
      const response = await fetch(
        "http://localhost:5678/webhook/2817182d-4797-4233-8b66-d49afaab6192",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Network response was not OK");

      formMessage.textContent = "Sent successfully!";
      contactForm.reset();
      alert("Sent successfully!");
    } catch (error) {
      console.error("Error sending form:", error);
      formMessage.textContent = "Sent Successfully!!!";
    }
  });
}

// Initialize contact form in DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  // Existing initializations...
  setupParticleBackground();
  setupHeaderScroll();
  setupTypingAnimation();
  setupMobileMenu();
  setupTheme();
  loadDynamicContent();
  initializeProjectFiltering();
  initializeScrollAnimations();
  setupNavScrollHighlight();
  setupScrollUpButton();

  // Contact form
  setupContactForm();
});



// --- CORE FUNCTIONS ---

function setupParticleBackground() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  let particleCount = window.innerWidth > 768 ? 150 : 50;
  const resizeCanvas = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    particleCount = window.innerWidth > 768 ? 150 : 50;
    initParticles();
  };
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = (Math.random() * 1 - 0.5) * 0.5;
      this.speedY = (Math.random() * 1 - 0.5) * 0.5;
      this.color = `rgba(0, 246, 255, ${Math.random() * 0.5 + 0.2})`;
    }
    update() {
      if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
      if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      this.x += this.speedX;
      this.y += this.speedY;
    }
    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  const initParticles = () => {
    particles = [];
    for (let i = 0; i < particleCount; i++) particles.push(new Particle());
  };
  const animateParticles = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateParticles);
  };
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  animateParticles();
}

function setupTypingAnimation() {
  const subtitleElement = document.getElementById("typing-subtitle");
  if (!subtitleElement) return;
  const texts = ["Building Websites", "Problem Solver", "Making Ai agents"];
  let textIndex = 0,
    charIndex = 0,
    isDeleting = false;
  const type = () => {
    const currentText = texts[textIndex];
    let displayText = isDeleting
      ? currentText.substring(0, charIndex - 1)
      : currentText.substring(0, charIndex + 1);
    subtitleElement.textContent = displayText;
    isDeleting ? charIndex-- : charIndex++;
    let typeSpeed = isDeleting ? 100 : 200;
    if (!isDeleting && charIndex === currentText.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typeSpeed = 500;
    }
    setTimeout(type, typeSpeed);
  };
  type();
}

function setupMobileMenu() {
  const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close"),
    navLinks = document.querySelectorAll(".nav__link");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
      document.body.classList.add("nav-open"); // FIX: Lock scroll
    });
  }

  const closeMenu = () => {
    navMenu.classList.remove("show-menu");
    document.body.classList.remove("nav-open"); // FIX: Unlock scroll
  };

  if (navClose) navClose.addEventListener("click", closeMenu);
  navLinks.forEach((link) => link.addEventListener("click", closeMenu));
}

function setupTheme() {
  const themeButton = document.getElementById("theme-button");
  const lightModeClass = "light-mode";
  const selectedTheme = localStorage.getItem("selected-theme");
  const systemPrefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;
  if (selectedTheme === "light" || (!selectedTheme && systemPrefersLight)) {
    document.body.classList.add(lightModeClass);
  }
  if (themeButton) {
    themeButton.addEventListener("click", () => {
      document.body.classList.toggle(lightModeClass);
      localStorage.setItem(
        "selected-theme",
        document.body.classList.contains(lightModeClass) ? "light" : "dark"
      );
    });
  }
}

function loadDynamicContent() {
  const {
    socialHandles,
    journey,
    projects,
    stats,
    skills,
    achievements,
    contactInfo,
  } = siteData;
  const getEl = (selector) => document.querySelector(selector);
  const timeline = getEl(".timeline"),
    projectFiltersContainer = getEl(".project__filters"),
    projectGrid = getEl(".project__grid"),
    statsGrid = getEl(".stats__grid"),
    skillsGrid = getEl(".skills__grid"),
    achievementsGrid = getEl(".achievements__grid"),
    contactList = getEl(".contact__details-list"),
    contactSocials = getEl(".contact__socials"),
    footerSocials = getEl(".footer__socials");
  if (timeline)
    timeline.innerHTML = journey
      .map(
        (item) =>
          `<div class="timeline__item fade-in-up color-${item.color}"><div class="timeline__content"><h3 class="timeline__year">${item.year}</h3><h4 class="timeline__title">${item.title}</h4><p class="timeline__desc">${item.desc}</p></div></div>`
      )
      .join("");
  if (projectFiltersContainer) {
    const categories = ["All", ...new Set(projects.map((p) => p.category))];
    projectFiltersContainer.innerHTML = categories
      .map(
        (cat) =>
          `<button class="project__filter-btn ${
            cat === "All" ? "active" : ""
          }" data-filter="${cat}">${cat}</button>`
      )
      .join("");
  }
  if (projectGrid)
    projectGrid.innerHTML = projects
      .map(
        (p) =>
          `<a href="${
            p.link
          }" target="_blank" rel="noopener noreferrer" class="project-card-link"><div class="project__card fade-in-up" data-category="${
            p.category
          }"><div class="project__card-header"><span class="project__card-tag tag-${
            p.category
          }">${p.category}</span>${
            p.featured
              ? `<span class="project__card-featured">FEATURED</span>`
              : ""
          }</div><h3>${p.title}</h3><p class="tagline">${
            p.tagline
          }</p><p class="description">${
            p.description
          }</p><div class="project__tech-list">${p.tech
            .map((t) => `<span class="project__tech-item">${t}</span>`)
            .join("")}</div></div></a>`
      )
      .join("");
  if (statsGrid)
    statsGrid.innerHTML = stats
      .map(
        (s) =>
          `<div class="stats__card fade-in-up"><h4>${s.value}</h4><p>${s.label}</p></div>`
      )
      .join("");
  if (skillsGrid) {
    const skillCategories = [
      { title: "Languages", icon: "bx-code", data: skills.languages },
      { title: "Frontend", icon: "bxl-react", data: skills.frontend },
      { title: "Backend", icon: "bx-data", data: skills.backend },
      { title: "Tools", icon: "bx-wrench", data: skills.tools },
    ];
    skillsGrid.innerHTML = skillCategories
      .map(
        (cat) =>
          `<div class="skill__card fade-in-up"><div class="skill__card-title"><i class='bx ${
            cat.icon
          }'></i><h3>${cat.title}</h3></div>${cat.data.data
            .map(
              (skill) =>
                `<div class="skill__item"><div class="skill__item-name"><i class="${
                  skill.icon
                }"></i><span>${
                  skill.name
                }</span></div><div class="skill__item-dots dots-${
                  cat.data.color
                }">${Array.from(
                  { length: 5 },
                  (_, i) =>
                    `<span class="${i < skill.dots ? "filled" : ""}"></span>`
                ).join("")}</div></div>`
            )
            .join("")}</div>`
      )
      .join("");
  }
  if (achievementsGrid)
    achievementsGrid.innerHTML = achievements
      .map(
        (a) =>
          `<div class="achievement__card fade-in-up"><i class='bx ${a.icon}'></i><div><h4>${a.title}</h4><p class="source">${a.source}</p><p class="desc">${a.desc}</p></div></div>`
      )
      .join("");
  if (contactList)
    contactList.innerHTML = contactInfo
      .map((c) => {
        let valueHtml =
          c.label === "Email"
            ? `<a href="mailto:${c.value}" class="contact-link">${c.value}</a>`
            : c.label === "Phone"
            ? `<a href="tel:${c.value.replace(
                /[^0-9+]/g,
                ""
              )}" class="contact-link">${c.value}</a>`
            : `<p>${c.value}</p>`;
        return `<div class="contact__detail-item fade-in-up"><i class='bx ${c.icon}'></i><div><span>${c.label}</span>${valueHtml}</div></div>`;
      })
      .join("");
  const socialLinksHtml = `<a href="${socialHandles.linkedin}" target="_blank" aria-label="LinkedIn"><i class='bx bxl-linkedin'></i></a><a href="${socialHandles.github}" target="_blank" aria-label="GitHub"><i class='bx bxl-github'></i></a><a href="${socialHandles.leetcode}" target="_blank" aria-label="LeetCode"><i class='bx bx-code-alt'></i></a>`;
  if (contactSocials) contactSocials.innerHTML = socialLinksHtml;
  if (footerSocials) footerSocials.innerHTML = socialLinksHtml;
}

function initializeProjectFiltering() {
  const filterBtns = document.querySelectorAll(".project__filter-btn");
  const projectCardLinks = document.querySelectorAll(".project-card-link");
  if (!filterBtns.length) return;
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      projectCardLinks.forEach((link) => {
        const card = link.querySelector(".project__card");
        link.style.display =
          filter === "all" || card.dataset.category === filter
            ? "block"
            : "none";
      });
    });
  });
}

function initializeScrollAnimations() {
  const elementsToAnimate = document.querySelectorAll(".fade-in-up");
  if (!elementsToAnimate.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  elementsToAnimate.forEach((el) => observer.observe(el));
}

function setupHeaderScroll() {
  const header = document.getElementById("header");
  if (!header) return;
  window.addEventListener("scroll", () =>
    header.classList.toggle("scrolled", window.scrollY >= 50)
  );
}

function setupNavScrollHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav__menu a.nav__link");
  if (!sections.length || !navLinks.length) return;
  const headerHeightValue = getComputedStyle(document.documentElement)
    .getPropertyValue("--header-height")
    .trim();
  const headerHeight =
    parseFloat(headerHeightValue) *
    parseFloat(getComputedStyle(document.documentElement).fontSize);
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    let currentSectionId = "";
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - headerHeight * 1.5;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = current.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("active-link");
      if (link.getAttribute("href").includes(currentSectionId)) {
        link.classList.add("active-link");
      }
    });
  });
}

function setupScrollUpButton() {
  const scrollUpBtn = document.getElementById("scroll-up");
  if (!scrollUpBtn) return;
  window.addEventListener("scroll", () =>
    scrollUpBtn.classList.toggle("show-scroll", window.scrollY >= 400)
  );
}
