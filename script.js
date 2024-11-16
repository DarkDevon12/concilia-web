const btnMobile = document.getElementById('btn-mobile');
const menuLinks = document.querySelectorAll('#menu a'); // Seleciona todos os links dentro do menu

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

// Fecha o menu ao clicar em um link
function closeMenu() {
  const nav = document.getElementById('nav');
  nav.classList.remove('active'); // Remove a classe 'active' para fechar o menu
  btnMobile.setAttribute('aria-expanded', 'false'); // Atualiza o estado do botão
  btnMobile.setAttribute('aria-label', 'Abrir Menu'); // Altera o rótulo do botão
}

// Adiciona o evento de clique ao botão de menu
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Adiciona o evento de clique aos links para fechar o menu
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});
