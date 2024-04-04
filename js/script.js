$(document).ready(function() {
    // Ativação do carrossel de depoimentos
    $('#carouselTestimonials').carousel();
  
    // Envio do formulário de reservas
    $('form').submit(function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário
  
        // Validar campos obrigatórios
        var name = $('#inputName').val();
        var email = $('#inputEmail').val();
        
        if (!name || !email) {
            $('#reservationMessage').html('<div class="alert alert-danger" role="alert">Por favor, preencha todos os campos obrigatórios.</div>');
            return;
        }
  
        // Validar formato de e-mail
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            $('#reservationMessage').html('<div class="alert alert-danger" role="alert">Por favor, insira um endereço de e-mail válido.</div>');
            return;
        }
  
        // Exibir mensagem de envio
        $('#reservationMessage').html('<div class="alert alert-info" role="alert">Enviando reserva...</div>');
  
        // Aqui você pode adicionar o código para enviar os dados do formulário para o servidor
        // Simulação de erro no envio do formulário
        // No seu código real, você deve substituir isso por chamadas AJAX ou outras operações assíncronas
        var erroNoEnvio = false; // Defina como true para simular um erro
        if (erroNoEnvio) {
            // Exibir mensagem de erro
            $('#reservationMessage').html('<div class="alert alert-danger" role="alert">Ocorreu um erro ao enviar a reserva. Por favor, tente novamente mais tarde.</div>');
        } else {
            // Exibir mensagem de sucesso
            $('#reservationMessage').html('<div class="alert alert-success" role="alert">Sua reserva foi enviada com sucesso! Entraremos em contato em breve.</div>');
  
            // Limpa os campos do formulário após o envio
            $(this).trigger("reset");
  
            // Esconder a mensagem de sucesso após 5 segundos
            setTimeout(function() {
                $('#reservationMessage').html('');
            }, 5000);
        }
    });
  
    // Abrir nova aba ao clicar na notícia
    $('.noticia').click(function() {
        // Obtém o ID do elemento clicado
        var id = $(this).attr('id');
        
        // Verifica qual elemento foi clicado e abre a página correspondente
        if (id === 'noticia-tech') {
            window.open('tech.html', '_blank');
        } else if (id === 'noticia-angelo') {
            window.open('angelo.html', '_blank');
        }
    });

    // Função para mostrar ou ocultar o conteúdo sobre Ângelo Silvano
    function mostrarConteudoAngelo() {
        var conteudoAngelo = document.getElementById('angelo-conteudo');
        var botaoVejaMais = document.querySelector('#angelo-noticia button');

        if (conteudoAngelo.style.display === 'none' || conteudoAngelo.style.display === '') {
            conteudoAngelo.style.display = 'block';
            botaoVejaMais.innerText = 'Veja Menos';
        } else {
            conteudoAngelo.style.display = 'none';
            botaoVejaMais.innerText = 'Veja Mais';
        }
    }

    // Adiciona o evento de clique ao botão "Veja Mais" na notícia sobre Ângelo Silvano
    document.getElementById('angelo-noticia').addEventListener('click', mostrarConteudoAngelo);
});
