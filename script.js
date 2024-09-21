document.addEventListener('DOMContentLoaded', () => {
    const loading = document.querySelector('.loading');
    const container = document.querySelector('.container');

    setTimeout(() => {
        loading.style.display = 'none'; // Esconde a tela de carregamento
        container.style.display = 'block'; // Mostra o conteúdo
    }, 2000); // Altere para o tempo que preferir
});

document.addEventListener('DOMContentLoaded', function() {
    var enviarNomeButton = document.getElementById('enviarNome');
    var enviarSobrenomeButton = document.getElementById('enviarSobrenome');
    var enviarIdadeButton = document.getElementById('enviarIdade');
    var nomeInput = document.getElementById('nomeUsuario');
    var sobrenomeInput = document.getElementById('sobrenomeUsuario');
    var idadeInput = document.getElementById('idadeUsuario');
    var saudacao = document.getElementById('saudacao');
    var perguntaNome = document.getElementById('perguntaNome');
    var perguntaSobrenome = document.getElementById('perguntaSobrenome');

    // Limpa os campos ao carregar a página
    nomeInput.value = '';
    sobrenomeInput.value = '';
    idadeInput.value = '';

    var nome = '';
    var sobrenome = '';

    function isNomeValido(nome) {
        return /^[A-Za-zÀ-ÿ\s]+$/.test(nome); // Aceita apenas letras e espaços
    }

    function isSobrenomeValido(sobrenome) {
        return /^[A-Za-zÀ-ÿ\s]+$/.test(sobrenome); // Aceita apenas letras e espaços
    }

    enviarNomeButton.addEventListener('click', function() {
        nome = nomeInput.value.trim();
        if (nome === "" || !isNomeValido(nome)) {
            saudacao.textContent = "Please enter a valid name."; 
            return;
        }
        saudacao.textContent = "Olá, " + nome + "!";
        perguntaNome.style.display = "none"; // Esconde a pergunta de nome
        perguntaSobrenome.style.display = "block"; // Mostra a pergunta de sobrenome
        sobrenomeInput.parentElement.style.display = "block"; // Mostra o campo de sobrenome
        enviarSobrenomeButton.style.display = "inline-block"; // Mostra o botão de sobrenome
    });

    enviarSobrenomeButton.addEventListener('click', function() {
        sobrenome = sobrenomeInput.value.trim();
        if (sobrenome === "" || !isSobrenomeValido(sobrenome)) {
            saudacao.textContent = "Please enter a valid last name."; 
            return;
        }
        perguntaSobrenome.style.display = "none"; // Esconde a pergunta de sobrenome
        idadeInput.parentElement.style.display = "block"; // Mostra o campo de idade
        enviarIdadeButton.style.display = "inline-block"; // Mostra o botão de idade
        saudacao.textContent = `Olá, ${nome} ${sobrenome}! How old are you?`; // Atualiza saudação
    });

    enviarIdadeButton.addEventListener('click', function() {
        var idade = parseInt(idadeInput.value.trim(), 10);
        if (!isNaN(idade) && idade >= 13 && idade <= 100) {
            saudacao.textContent = `Hello, ${nome} ${sobrenome}, your age is ${idade}.`;
            // Desativa os campos após enviar os dados
            nomeInput.disabled = true;
            sobrenomeInput.disabled = true;
            idadeInput.disabled = true;
            enviarNomeButton.disabled = true;
            enviarSobrenomeButton.disabled = true;
            enviarIdadeButton.disabled = true;
        } else {
            saudacao.textContent = "Please enter a valid age.";
        }
    });
});




