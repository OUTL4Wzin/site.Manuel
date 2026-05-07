const cards = document.querySelectorAll('.card');
const infoCards = document.querySelectorAll('.info-card');

const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');

const closeModal = document.querySelector('.close-modal');

/* =========================
   CONTEÚDO DAS SKILLS
========================= */

const skillDetails = {

  html: {
    title: "HTML",
    text: "Experiência sólida em HTML5, criação de estruturas semânticas e páginas responsivas."
  },

  css: {
    title: "CSS",
    text: "Experiência com Flexbox, Grid, animações, responsividade e design moderno."
  },

  javascript: {
    title: "JavaScript",
    text: "Conhecimentos em manipulação DOM, APIs, eventos e desenvolvimento frontend moderno."
  },

  react: {
    title: "React",
    text: "Criação de interfaces componentizadas e aplicações SPA modernas."
  },

  nodejs: {
    title: "Node.js",
    text: "Experiência com desenvolvimento backend, APIs RESTful e integração com bancos de dados."
  },

  mongodb: {
    title: "MongoDB",
    text: "Experiência com modelagem de dados, consultas e integração com Node.js."
  },

  c: {
    title: "C++",
    text: "Conhecimentos em programação orientada a objetos, estruturas de dados e algoritmos."
  },

  sql: {
    title: "SQL",
    text: "Experiência com modelagem de dados, consultas complexas e integração com aplicações backend."
  },

  python: {
    title: "Python",
    text: "Experiência com desenvolvimento backend, automação de tarefas e análise de dados."
  },

  php: {
    title: "PHP",
    text: "Experiência com desenvolvimento backend, APIs RESTful e integração com bancos de dados."
  },

};

/* =========================
   CONTEÚDO DOS INFO CARDS
========================= */

const infoDetails = {

  educacao: {
    title: "Educação",
    text: "Tirei o curso Técnico de Redes e Sistemas Informáticos na Universidade da Madeira e atualmente estou a cursar Engenharia Informática no Instituto Politécnico de Bragança."
  },

  experiencia: {
    title: "Experiência",
    text: "Projetos pessoais, assim como os projetos lecionados pela faculdade, freelancing e participação em estágios na área tecnológica. Experiência prática em desenvolvimento web e design de interfaces na empresa ACIN - iCloud Solutions e resolução de problemas técnicos na empresa Grupo Sousa, Investimentos SGPS, Lda."
  },

  stack: {
    title: "Stack Principal",
    text: "HTML, CSS, JavaScript, React e Node.js. Tenho experiência com outras tecnologias como Python, SQL e Git, mas a minha stack principal é focada no desenvolvimento frontend moderno."
  },

  objetivo: {
    title: "Objetivo",
    text: "Tenho como objetivo masterizar o meu conhecimento em frontend e construir aplicações modernas, escaláveis e eficientes."
  },

  linguas: {
    title: "Línguas",
    text: "Português(Nativo), Inglês(B2), Espanhol(B1) e Francês(A1)."
  }

};

/* =========================
   FUNÇÃO GLOBAL MODAL
========================= */

function openModal(title, text){

  modalTitle.textContent = title;
  modalText.textContent = text;

  modalOverlay.classList.add('active');

}

/* =========================
   SKILLS
========================= */

cards.forEach(card => {

  card.addEventListener('click', () => {

    const skill = card.dataset.skill;

    /* Proteção contra erros */
    if(skillDetails[skill]){

      openModal(
        skillDetails[skill].title,
        skillDetails[skill].text
      );

    }

  });

});

/* =========================
   INFO CARDS
========================= */

infoCards.forEach(card => {

  card.addEventListener('click', () => {

    const info = card.dataset.info;

    if(infoDetails[info]){

      openModal(
        infoDetails[info].title,
        infoDetails[info].text
      );

    }

  });

});

/* =========================
   FECHAR MODAL
========================= */

closeModal.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
});

/* Fechar clicando fora */

modalOverlay.addEventListener('click', (e) => {

  if(e.target === modalOverlay){
    modalOverlay.classList.remove('active');
  }

});

/* Fechar com ESC */

document.addEventListener('keydown', (e) => {

  if(e.key === 'Escape'){
    modalOverlay.classList.remove('active');
  }

});