document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => navMenu.classList.toggle("open"));
    }

    const testimonials = [
        {text:"The training helped me improve my technical knowledge and interview skills.",name:"Student 1",course:"Java Full Stack"},
        {text:"The practical examples made it easier for me to understand programming concepts.",name:"Student 2",course:"Python Full Stack"},
        {text:"The mock interview and project practice were useful for my preparation.",name:"Student 3",course:"Software Testing"}
    ];

    let current = 0;
    const text = document.getElementById("testimonialText");
    const name = document.getElementById("testimonialName");
    const course = document.getElementById("testimonialCourse");

    function renderTestimonial() {
        if (!text) return;
        text.textContent = '"' + testimonials[current].text + '"';
        name.textContent = testimonials[current].name;
        course.textContent = testimonials[current].course;
    }

    renderTestimonial();

    const next = document.getElementById("nextBtn");
    const prev = document.getElementById("prevBtn");

    if (next) next.addEventListener("click", () => {
        current = (current + 1) % testimonials.length;
        renderTestimonial();
    });

    if (prev) prev.addEventListener("click", () => {
        current = (current - 1 + testimonials.length) % testimonials.length;
        renderTestimonial();
    });

    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nameInput = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const courseInput = document.getElementById("course").value;
            const message = document.getElementById("formMessage");

            if (!nameInput || !email || !phone || !courseInput) {
                message.textContent = "Please fill in all required fields.";
                message.className = "form-message error";
                return;
            }

            message.textContent = "Thank you! Your enquiry has been submitted successfully.";
            message.className = "form-message success";
            form.reset();
        });
    }
});

function showCourse(course) {
    const modal = document.getElementById("courseModal");
    const title = document.getElementById("modalTitle");
    const text = document.getElementById("modalText");

    if (!modal) return;

    const syllabus = {
        "Java Full Stack":"Core Java, OOP, Collections, Exception Handling, SQL, HTML, CSS, JavaScript and backend development.",
        "Python Full Stack":"Python fundamentals, OOP, SQL, frontend development, APIs and backend concepts.",
        "Software Testing":"Testing fundamentals, test cases, defect life cycle, automation concepts and Selenium.",
        "Data Science":"Python, statistics, data analysis, visualization and machine learning fundamentals.",
        "Web Development":"HTML, CSS, JavaScript, responsive design, DOM manipulation and frontend projects.",
        "Cloud & AWS":"Cloud fundamentals, AWS services, deployment concepts and basic cloud architecture."
    };

    title.textContent = course;
    text.textContent = syllabus[course] || "Course information will be updated soon.";
    modal.style.display = "flex";
}

function closeCourse() {
    const modal = document.getElementById("courseModal");
    if (modal) modal.style.display = "none";
}

window.addEventListener("click", function(e) {
    const modal = document.getElementById("courseModal");
    if (modal && e.target === modal) closeCourse();
});
