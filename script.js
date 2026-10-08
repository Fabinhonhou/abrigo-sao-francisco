document.addEventListener("DOMContentLoaded", function() {

    // 1. MODAL "QUERO AJUDAR"
    const botoesAbrir = document.querySelectorAll('.ajudar-button');
    const modal = document.getElementById('modal-ajuda');
    const botaoFechar = document.getElementById('fechar-modal');

    function abrirModal(event) {
        event.preventDefault();
        if (modal) {
            modal.classList.add('mostrar');
            document.body.style.overflow = 'hidden'; 
        }
    }

    function fecharModal() {
        if (modal) {
            modal.classList.remove('mostrar');
            document.body.style.overflow = ''; 
        }
    }

    botoesAbrir.forEach(botao => botao.addEventListener('click', abrirModal));
    if (botaoFechar) botaoFechar.addEventListener('click', fecharModal);

    window.addEventListener('click', function(event) {
        if (event.target === modal) fecharModal();
    });

    // 2. FAQ (PERGUNTAS FREQUENTES)
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const pergunta = item.querySelector('.faq-pergunta');
        if (pergunta) {
            pergunta.addEventListener('click', () => {
                const estaAberto = item.classList.contains('aberto');
                faqItems.forEach(faq => faq.classList.remove('aberto'));
                if (!estaAberto) item.classList.add('aberto');
            });
        }
    });

    // 3. FORMULÁRIO DE DOAÇÕES
    const botoesValor = document.querySelectorAll('.btn-valor');
    botoesValor.forEach(botao => {
        botao.addEventListener('click', function(e) {
            e.preventDefault(); 
            botoesValor.forEach(b => b.classList.remove('ativo'));
            this.classList.add('ativo');
        });
    });

    const radioBoxes = document.querySelectorAll('.radio-box');
    radioBoxes.forEach(box => {
        box.addEventListener('click', function() {
            radioBoxes.forEach(b => b.classList.remove('ativo'));
            this.classList.add('ativo');
            const input = this.querySelector('input[type="radio"]');
            if (input) input.checked = true;
        });
    });
});