function selectDogType(tipo) {
    document.getElementById('adulto-options').style.display = 'none';
    document.getElementById('filhote-options').style.display = 'none';
    document.getElementById('resultado').style.display = 'none';

    if (tipo === 'adulto') {
        document.getElementById('adulto-options').style.display = 'block';
    } else if (tipo === 'filhote') {
        document.getElementById('filhote-options').style.display = 'block';
    }
}

function voltar() {
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('adulto-options').style.display = 'none';
    document.getElementById('filhote-options').style.display = 'none';
    location.reload(); // Atualiza a página, limpando os parâmetros e valores
}

function calculate() {
    const porte = document.getElementById('porte')?.value;
    const idadeFilhote = document.getElementById('idade-filhote')?.value;
    const pesoFilhote = parseFloat(document.getElementById('peso')?.value);
    const pesoAdulto = parseFloat(document.getElementById('peso-adulto')?.value);
    
    let faixaPorcao = '';
    let recomendacoes = '';

    // Cálculo para cães adultos
    if (porte && pesoAdulto) {
        let porcentagem = 0;

        switch (porte) {
            case 'mini':
                porcentagem = (3.5 + 5) / 2 / 100; // Média de 3,5 a 5%
                break;
            case 'pequeno':
                porcentagem = (3 + 4.5) / 2 / 100; // Média de 3 a 4,5%
                break;
            case 'medio':
                porcentagem = (2.5 + 4) / 2 / 100; // Média de 2,5 a 4%
                break;
            case 'grande':
                porcentagem = (2 + 3.5) / 2 / 100; // Média de 2 a 3,5%
                break;
        }

        const porcaoDiaria = pesoAdulto * porcentagem * 1000; // Convertendo para gramas
        faixaPorcao = `O seu cão adulto de ${pesoAdulto} kg deve receber aproximadamente ${porcaoDiaria.toFixed(0)} g por dia.`; // Resultado em gramas
        
        // Cálculo das recomendações de alimentos
        const ossosCarnudos = porcaoDiaria * 0.4;
        const carnes = porcaoDiaria * 0.25;
        const viscMuscular = porcaoDiaria * 0.2;
        const viscSecretora = porcaoDiaria * 0.05;
        const vegetais = porcaoDiaria * 0.1;

        recomendacoes = `Recomendações de separação dos alimentos:
            __________________________________________
            - Carnes: ${carnes.toFixed(0)} g
            - Vegetais: ${vegetais.toFixed(0)} g
            - Ossos carnudos: ${ossosCarnudos.toFixed(0)} g            
            - Víscera muscular: ${viscMuscular.toFixed(0)} g
            - Víscera secretora: ${viscSecretora.toFixed(0)} g
            __________________________________________`;
    }

    // Cálculo para filhotes
    if (idadeFilhote && pesoFilhote) {
        let porcentagemFilhote = 0;

        switch (idadeFilhote) {
            case 'ate-3':
                porcentagemFilhote = 0.10; // 10%
                break;
            case '3-5':
                porcentagemFilhote = 0.08; // 8%
                break;
            case '5-7':
                porcentagemFilhote = 0.075; // 7,5%
                break;
            case '7-9':
                porcentagemFilhote = 0.06; // 6%
                break;
            case '9-12':
                porcentagemFilhote = 0.05; // 5%
                break;
        }

        const porcaoFilhote = pesoFilhote * porcentagemFilhote * 1000; // Convertendo para gramas
        faixaPorcao = `O seu filhote de ${pesoFilhote} kg deve receber aproximadamente ${porcaoFilhote.toFixed(0)} g por dia.`; // Resultado em gramas

        // Cálculo das recomendações de alimentos
        const ossosCarnudos = porcaoFilhote * 0.4;
        const carnes = porcaoFilhote * 0.25;
        const viscMuscular = porcaoFilhote * 0.2;
        const viscSecretora = porcaoFilhote * 0.05;
        const vegetais = porcaoFilhote * 0.1;

        recomendacoes = `Recomendações de separação dos alimentos:
            - Ossos carnudos: ${ossosCarnudos.toFixed(0)} g
            - Carnes: ${carnes.toFixed(0)} g
            - Víscera muscular: ${viscMuscular.toFixed(0)} g
            - Víscera secretora: ${viscSecretora.toFixed(0)} g
            - Vegetais: ${vegetais.toFixed(0)} g`;
    }

    // Exibição do resultado
    document.getElementById('faixa-porcao').innerText = faixaPorcao;
    document.getElementById('recomendacoes').innerText = recomendacoes;
    document.getElementById('resultado').style.display = 'block';
}

function toggleTexto() {
    const texto = document.getElementById('texto-instrucao');
    const botao = document.getElementById('ver-mais');

    if (texto.style.display === 'none') {
        texto.style.display = 'block';
        botao.textContent = 'Ver Menos';
    } else {
        texto.style.display = 'none';
        botao.textContent = 'Ver Mais';
    }
}

