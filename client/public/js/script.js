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
  const section = document.querySelector('#sobre');
  const sectionTop = section.getBoundingClientRect().top;
  const trigger = window.innerHeight * 0.8;

  if(sectionTop < trigger){
    animateSkills();
  }
});