
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