// Animação suave de rolagem apenas para links âncora (#)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
      // Verifica se o link é para uma âncora na mesma página
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
          }
      }
      // Se não for âncora, deixa o link funcionar normalmente
  });
});