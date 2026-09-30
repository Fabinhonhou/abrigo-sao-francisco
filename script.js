document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os botões com a classe .ajudar-button (seu botão da navbar)
    const botoesAbrir = document.querySelectorAll('.ajudar-button');
    const modal = document.getElementById('modal-ajuda');
    const botaoFechar = document.getElementById('fechar-modal');

    // Função para abrir o modal
    function abrirModal(event) {
        event.preventDefault(); // Evita que o link salte a página se for uma tag <a>
        modal.classList.add('mostrar');
        document.body.style.overflow = 'hidden'; // Impede o scroll da página de fundo
    }

    // Função para fechar o modal
    function fecharModal() {
        modal.classList.remove('mostrar');
        document.body.style.overflow = ''; // Restaura o scroll
    }

    // Adiciona o evento de clique a todos os botões "Quero ajudar"
    botoesAbrir.forEach(botao => {
        botao.addEventListener('click', abrirModal);
    });

    // Fecha ao clicar no botão 'X'
    if(botaoFechar) {
        botaoFechar.addEventListener('click', fecharModal);
    }

    // Fecha ao clicar fora do conteúdo do modal (na área escura)
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            fecharModal();
        }
    });
});