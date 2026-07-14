// =============================
// Portfolio JavaScript
// =============================

console.log("Portfolio JS Loaded Successfully");

// =============================
// Smooth Scroll
// =============================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (targetId.startsWith("#")) {

            e.preventDefault();

            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        }

    });
});


// =============================
// Active Navbar
// =============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// =============================
// Scroll Reveal
// =============================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

hiddenElements.forEach(el => observer.observe(el));


// =============================
// Resume Button
// =============================

const resumeBtn = document.querySelector(".download");

if (resumeBtn) {

    resumeBtn.addEventListener("click", () => {

        alert("Resume Download Started!");

    });

}


// =============================
// Contact Form
// =============================

 


// =============================
// Social Icons Hover Animation
// =============================

const socialIcons = document.querySelectorAll(".social-icons i");

socialIcons.forEach(icon => {

    icon.addEventListener("mouseenter", () => {

        icon.style.transform = "scale(1.2)";

    });

    icon.addEventListener("mouseleave", () => {

        icon.style.transform = "scale(1)";

    });

});


// =============================
// Scroll To Top Button (Optional)
// =============================

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        console.log("Scrolling...");

    }

});


console.log("All JavaScript Loaded Successfully ✅");
const words = [
    "Web Developer",
    "Frontend Developer",
    "Python Learner",
    "Freelancer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typing.textContent = currentWord.substring(0, charIndex++);
        
        if (charIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();
window.addEventListener("scroll",()=>{

    const scrollTop=document.documentElement.scrollTop;

    const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

    const progress=(scrollTop/scrollHeight)*100;

    document.getElementById("progress-bar").style.width=progress+"%";

});
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    loader.classList.add("loader-hidden");

});
emailjs.init("weqS2pRGm3bqpBHEJ");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_aii9joh",
        "template_8y4fkva",
        this
    )
    .then(() => {

        alert("Message Sent Successfully ✅");

        form.reset();

    })
    .catch((error) => {

        alert("Failed to send message ❌");

        console.log(error);

    });

});