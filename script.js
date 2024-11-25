// Função simples para exibir um alerta quando alguém clicar nos links do menu de navegação
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        alert('Você está navegando por dicas de segurança na internet!');
    });
});
