// script.js - Scroll Reveal Animation & Interactivity
document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll fade-in
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections and cards
  const elementsToAnimate = document.querySelectorAll('.card, .seccion, .project-card');
  elementsToAnimate.forEach(el => {
    el.classList.add('reveal-hidden');
    observer.observe(el);
  });
});

// Auto-seguimiento inteligente para Google Analytics (para proyectos actuales y FUTUROS)
document.addEventListener('click', (event) => {
  // 1. Clics en botones de proyectos
  const projectBtn = event.target.closest('.project-card .btn');
  if (projectBtn) {
    const projectTitle = projectBtn.closest('.project-card')?.querySelector('h3')?.innerText || 'Proyecto';
    if (typeof gtag === 'function') {
      gtag('event', 'click_proyecto', {
        'nombre_proyecto': projectTitle,
        'link_url': projectBtn.href
      });
    }
  }

  // 2. Clics en descarga de CV PDF
  const pdfBtn = event.target.closest('a[href$=".pdf"]');
  if (pdfBtn) {
    if (typeof gtag === 'function') {
      gtag('event', 'click_descargar_cv', {
        'archivo': pdfBtn.getAttribute('href')
      });
    }
  }
});
