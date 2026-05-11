const skills = document.querySelectorAll('.skill-fill');

function animateSkills() {
  skills.forEach(skill => {
    const percent = skill.getAttribute('data-percent');
    skill.style.width = percent;
  });
}

/* Disparar animação ao scroll */
window.addEventListener('scroll', () => {
  const section = document.querySelector('#skills');
  const sectionTop = section.getBoundingClientRect().top;
  const trigger = window.innerHeight * 0.8;

  if(sectionTop < trigger){
    animateSkills();
  }
});

/* Disparar animação ao scroll */
window.addEventListener('scroll', () => {
  const section = document.querySelector('#projects');
  const sectionTop = section.getBoundingClientRect().top;
  const trigger = window.innerHeight * 0.8;

  if(sectionTop < trigger){
    animateSkills();
  }
});

/* Disparar animação ao scroll */
window.addEventListener('scroll', () => {
  const section = document.querySelector('#sobre');
  const sectionTop = section.getBoundingClientRect().top;
  const trigger = window.innerHeight * 0.8;

  if(sectionTop < trigger){
    animateSkills();
  }
});

const bars = document.querySelectorAll(".progress-bar");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      const bar = entry.target;
      const width = bar.getAttribute("data-width");

      bar.style.width = width;
    }
  });

}, { threshold: 0.5 });

bars.forEach((bar) => {
  observer.observe(bar);
});