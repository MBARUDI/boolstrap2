
// Função para rolar suavemente até o topo da página
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Adicionando um event listener ao botão de rolar para o topo
const scrollToTopButton = document.getElementById('scrollToTopButton');
if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', (event) => {
        event.preventDefault();
        scrollToTop();
    });
}

// Função para alternar o tema do site
function toggleTheme() {
    const theme = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
}

const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownToggle.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Adicionando um event listener ao botão de alternar o tema
const themeSwitcher = document.getElementById('themeSwitcher');
if (themeSwitcher) {
    themeSwitcher.addEventListener('click', () => {
        toggleTheme();
    });
}
