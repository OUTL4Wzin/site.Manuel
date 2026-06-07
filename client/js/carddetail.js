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
    pt: {
      title: "HTML",
      text: "Experiência sólida em HTML5, criação de estruturas semânticas e páginas responsivas."
    },
    en: {
      title: "HTML",
      text: "Solid experience in HTML5, creating semantic structures and responsive pages."
    },
    es: {
      title: "HTML",
      text: "Experiencia sólida en HTML5, creación de estructuras semánticas y páginas responsivas."
    }
  },

  css: {
    pt: {
      title: "CSS",
      text: "Experiência com Flexbox, Grid, animações, responsividade e design moderno."
    },
    en: {
      title: "CSS",
      text: "Experience with Flexbox, Grid, animations, responsiveness and modern design."
    },
    es: {
      title: "CSS",
      text: "Experiencia con Flexbox, Grid, animaciones, responsividad y diseño moderno."
    }
  },

  javascript: {
    pt: {
      title: "JavaScript",
      text: "Conhecimentos em manipulação DOM, APIs, eventos e desenvolvimento frontend moderno."
    },
    en: {
      title: "JavaScript",
      text: "Knowledge in DOM manipulation, APIs, events and modern frontend development."
    },
    es: {
      title: "JavaScript",
      text: "Conocimientos en manipulación del DOM, APIs, eventos y desarrollo frontend moderno."
    }
  },

  react: {
    pt: {
      title: "React",
      text: "Criação de interfaces componentizadas e aplicações SPA modernas."
    },
    en: {
      title: "React",
      text: "Creating componentized interfaces and modern SPA applications."
    },
    es: {
      title: "React",
      text: "Creación de interfaces componentizadas y aplicaciones SPA modernas."
    }
  },

  nodejs: {
    pt: {
      title: "Node.js",
      text: "Experiência com desenvolvimento backend, APIs RESTful e integração com bancos de dados."
    },
    en: {
      title: "Node.js",
      text: "Experience with backend development, RESTful APIs and database integration."
    },
    es: {
      title: "Node.js",
      text: "Experiencia con desarrollo backend, APIs RESTful e integración con bases de datos."
    }
  },

  mongodb: {
    pt: {
      title: "MongoDB",
      text: "Experiência com modelagem de dados, consultas e integração com Node.js."
    },
    en: {
      title: "MongoDB",
      text: "Experience with data modeling, queries and integration with Node.js."
    },
    es: {
      title: "MongoDB",
      text: "Experiencia con modelado de datos, consultas e integración con Node.js."
    }
  },

  c: {
    pt: {
      title: "C++",
      text: "Conhecimentos em programação orientada a objetos, estruturas de dados e algoritmos."
    },
    en: {
      title: "C++",
      text: "Knowledge in object-oriented programming, data structures and algorithms."
    },
    es: {
      title: "C++",
      text: "Conocimientos en programación orientada a objetos, estructuras de datos y algoritmos."
    }
  },

  sql: {
    pt: {
      title: "SQL",
      text: "Experiência com modelagem de dados, consultas complexas e integração com aplicações backend."
    },
    en: {
      title: "SQL",
      text: "Experience with data modeling, complex queries and integration with backend applications."
    },
    es: {
      title: "SQL",
      text: "Experiencia con modelado de datos, consultas complejas e integración con aplicaciones backend."
    }
  },

  python: {
    pt: {
      title: "Python",
      text: "Experiência com desenvolvimento backend, automação de tarefas e análise de dados."
    },
    en: {
      title: "Python",
      text: "Experience with backend development, task automation and data analysis."
    },
    es: {
      title: "Python",
      text: "Experiencia con desarrollo backend, automatización de tareas y análisis de datos."
    }
  },

  php: {
    pt: {
      title: "PHP",
      text: "Experiência com desenvolvimento backend, APIs RESTful e integração com bancos de dados."
    },
    en: {
      title: "PHP",
      text: "Experience with backend development, RESTful APIs and database integration."
    },
    es: {
      title: "PHP",
      text: "Experiencia con desarrollo backend, APIs RESTful e integración con bases de datos."
    }
  },

};

/* =========================
   CONTEÚDO DOS INFO CARDS
========================= */

const infoDetails = {

  educacao: {
    pt: {
      title: "Educação",
      text: "Tirei o curso Técnico de Redes e Sistemas Informáticos na Universidade da Madeira e atualmente estou a cursar Engenharia Informática no Instituto Politécnico de Bragança."
    },
    en: {
      title: "Education",
      text: "I completed the Technical Course in Computer Networks and Systems at the University of Madeira and am currently pursuing a degree in Computer Engineering at the Polytechnic Institute of Bragança."
    },
    es: {
      title: "Educación",
      text: "He completado el Curso Técnico en Redes y Sistemas Informáticos en la Universidad de Madeira y actualmente estoy cursando Ingeniería Informática en el Instituto Politécnico de Bragança."
    }
  },

  experiencia: {
    pt: {
      title: "Experiência",
      text: "Projetos pessoais, assim como os projetos lecionados pela faculdade, freelancing e participação em estágios na área tecnológica. Experiência prática em desenvolvimento web e design de interfaces na empresa ACIN - iCloud Solutions e resolução de problemas técnicos na empresa Grupo Sousa, Investimentos SGPS, Lda."
    },
    en: {
      title: "Experience",
      text: "Personal projects, as well as projects taught at the university, freelancing, and participation in internships in the technological field. Practical experience in web development and interface design at ACIN - iCloud Solutions and technical problem-solving at Grupo Sousa, Investimentos SGPS, Lda."
    },
    es: {
      title: "Experiencia",
      text: "Proyectos personales, así como los proyectos impartidos por la universidad, freelancing y participación en pasantías en el campo tecnológico. Experiencia práctica en desarrollo web y diseño de interfaces en ACIN - iCloud Solutions y resolución de problemas técnicos en Grupo Sousa, Investimentos SGPS, Lda."
    }
  },

  stack: {
    pt: {
      title: "Stack Principal",
      text: "HTML, CSS, JavaScript, React e Node.js. Tenho experiência com outras tecnologias como Python, SQL e Git, mas a minha stack principal é focada no desenvolvimento frontend moderno."
    },
    en: {
      title: "Main Stack",
      text: "HTML, CSS, JavaScript, React and Node.js. I have experience with other technologies like Python, SQL and Git, but my main stack is focused on modern frontend development."
    },
    es: {
      title: "Pila Principal",
      text: "HTML, CSS, JavaScript, React y Node.js. Tengo experiencia con otras tecnologías como Python, SQL y Git, pero mi pila principal se enfoca en el desarrollo frontend moderno."
    }
  },

  objetivo: {
    pt: {
      title: "Objetivo",
      text: "Tenho como objetivo masterizar o meu conhecimento em frontend e construir aplicações modernas, escaláveis e eficientes."
    },
    en: {
      title: "Goal",
      text: "My goal is to master my knowledge in frontend development and build modern, scalable, and efficient applications."
    },
    es: {
      title: "Objetivo",
      text: "Mi objetivo es dominar mi conocimiento en el desarrollo frontend y construir aplicaciones modernas, escalables y eficientes."
    }
  },

  linguas: {
    pt: {
      title: "Línguas",
      text: "Português(Nativo), Inglês(B2), Espanhol(B1) e Francês(A1)."
    },
    en: {
      title: "Languages",
      text: "Portuguese(Native), English(B2), Spanish(B1) and French(A1)."
    },
    es: {
      title: "Idiomas",
      text: "Portugués(Nativo), Inglés(B2), Español(B1) y Francés(A1)."
    }
  }
};

function getCurrentLanguage() {
  return localStorage.getItem("language") || "pt";
}

/* =========================
   FUNÇÃO GLOBAL MODAL
========================= */

function openModal(title, text) {

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
    if (skillDetails[skill]) {

      const lang = getCurrentLanguage();

      openModal(
        skillDetails[skill][lang].title,
        skillDetails[skill][lang].text
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

    if (infoDetails[info]) {

      const lang = getCurrentLanguage();

      openModal(
        infoDetails[info][lang].title,
        infoDetails[info][lang].text
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

  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('active');
  }

});

/* Fechar com ESC */

document.addEventListener('keydown', (e) => {

  if (e.key === 'Escape') {
    modalOverlay.classList.remove('active');
  }

});

/* Imagem de perfil com função */
const profileImage = document.getElementById('profileImage');

const socialModal = document.getElementById('socialModal');
const closeSocial = document.getElementById('closeSocial');

/* abrir */
profileImage.addEventListener('click', () => {
  socialModal.classList.add('active');
});

/* fechar */
closeSocial.addEventListener('click', () => {
  socialModal.classList.remove('active');
});

/* fechar ao clicar fora */
socialModal.addEventListener('click', (e) => {
  if (e.target === socialModal) {
    socialModal.classList.remove('active');
  }
});


const projectCards = document.querySelectorAll('.project-card');

const projectModal = document.getElementById('projectModal');

const projectModalTitle = document.getElementById('projectModalTitle');
const projectModalText = document.getElementById('projectModalText');

const closeProjectModal = document.getElementById('closeProjectModal');

/* =========================
   PROJECT DETAILS
========================= */

const projectDetails = {

  project1: {
    pt: {
      title: "Aplicação de Gestão de Tarefas",
      text: "Aplicação moderna para gestão de tarefas com autenticação, organização por estados e sincronização em tempo real."
    },
    en: {
      title: "Task Management App",
      text: "Modern task management application with authentication, state-based organization, and real-time synchronization."
    },
    es: {
      title: "Aplicación de Gestión de Tareas",
      text: "Aplicación moderna para gestión de tareas con autenticación, organización por estados y sincronización en tiempo real."
    }
  },

  project2: {
    pt: {
      title: "Plataforma E-Commerce",
      text: "Loja online fullstack com sistema de pagamentos, carrinho, autenticação e dashboard administrativo."
    },
    en: {
      title: "E-Commerce Platform",
      text: "Fullstack online store with payment system, shopping cart, authentication and admin dashboard."
    },
    es: {
      title: "Plataforma E-Commerce",
      text: "Tienda online fullstack con sistema de pagamientos, carrito, autenticación y dashboard administrativo."
    }
  },

  project3: {
    pt: {
      title: "Website de Portfólio",
      text: "Website pessoal desenvolvido com foco em design moderno, performance e experiência do utilizador."
    },
    en: {
      title: "Portfolio Website",
      text: "Personal website developed with a focus on modern design, performance, and user experience."
    },
    es: {
      title: "Sitio Web de Portafolio",
      text: "Sitio web personal desarrollado con un enfoque en diseño moderno, rendimiento y experiencia del usuario."
    }
  },

  project4: {
    pt: {
      title: "Dashboard Administrativo",
      text: "Dashboard administrativo com métricas, gráficos interativos e visualização de dados."
    },
    en: {
      title: "Admin Dashboard",
      text: "Administrative dashboard with metrics, interactive charts, and data visualization."
    },
    es: {
      title: "Dashboard Administrativo",
      text: "Dashboard administrativo con métricas, gráficos interactivos y visualización de datos."
    }
  }

};

/* =========================
   OPEN MODAL
========================= */

projectCards.forEach(card => {

  card.addEventListener('click', () => {

    const project = card.dataset.project;

    if (projectDetails[project]) {

      const lang = getCurrentLanguage();

      projectModalTitle.textContent =
        projectDetails[project][lang].title;

      projectModalText.textContent =
        projectDetails[project][lang].text;

      projectModal.classList.add('active');

    }

  });

});

/* =========================
   CLOSE MODAL
========================= */

closeProjectModal.addEventListener('click', () => {
  projectModal.classList.remove('active');
});

/* click outside */

projectModal.addEventListener('click', (e) => {

  if (e.target === projectModal) {
    projectModal.classList.remove('active');
  }

});

/* ESC */

document.addEventListener('keydown', (e) => {

  if (e.key === 'Escape') {
    projectModal.classList.remove('active');
  }

});