document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.outer-circle');
    skillBars.forEach(skillBar => {
        const percentage = parseInt(skillBar.querySelector('.percent').innerText, 10);
        skillBar.style.background = `conic-gradient(blueviolet 0%, blueviolet ${percentage}%, black ${percentage}%)`;
    });
});
const projectCards = document.querySelectorAll('.project-card');
let currentSlide = 0;

function showSlide(index) {
    projectCards.forEach((card, i) => {
        card.style.display = i === index ? 'block' : 'none';
    });
}

/*document.getElementById('prevBtn').addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? projectCards.length - 1 : currentSlide - 1;
    showSlide(currentSlide);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentSlide = (currentSlide === projectCards.length - 1) ? 0 : currentSlide + 1;
    showSlide(currentSlide);
});*/

// Initialize the first slide
showSlide(currentSlide);


    const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');


