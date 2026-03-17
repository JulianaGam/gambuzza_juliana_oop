export function ScrollAnimation() {
    navLinks.forEach(addNavScrollEvent);
}

const navLinks = document.querySelectorAll(".main-nav a");

function handleNavClick(event) {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: targetSection,
                offsetY: 20
            },
            ease: "power2.out"
        });
    }
}

function addNavScrollEvent(link) {
    link.addEventListener("click", handleNavClick);
}