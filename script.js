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
    
    let faixaPorcao = '';
    let recomendacoes = '';

    if (porte) {
        switch (porte) {
            case 'mini':
                faixaPorcao = '60g a 90g por dia';
                recomendacoes = 'Divisão recomendada: 40% ossos carnudos, 25% carnes, 20% víscera muscular, 5% víscera secretora, 10% vegetais.';
                break;
            case 'pequeno':
                faixaPorcao = '300 a 450g por dia';
                recomendacoes = 'Divisão recomendada: 40% ossos carnudos, 25% carnes, 20% víscera muscular, 5% víscera secretora, 10% vegetais.';
                break;
            case 'medio':
                faixaPorcao = '450 a 600g por dia';
                recomendacoes = 'Divisão recomendada: 40% ossos carnudos, 25% carnes, 20% víscera muscular, 5% víscera secretora, 10% vegetais.';
                break;
            case 'grande':
                faixaPorcao = '600 a 900g por dia';
                recomendacoes = 'Divisão recomendada: 40% ossos carnudos, 25% carnes, 20% víscera muscular, 5% víscera secretora, 10% vegetais.';
                break;
        }
    } else if (idadeFilhote && pesoFilhote) {
        let porcentagem = 0;

        switch (idadeFilhote) {
            case 'ate-3':
                porcentagem = 0.10;
                break;
            case '3-5':
                porcentagem = 0.08;
                break;
            case '5-7':
                porcentagem = 0.075;
                break;
            case '7-9':
                porcentagem = 0.06;
                break;
            case '9-12':
                porcentagem = 0.05;
                break;
            default:
                faixaPorcao = '';
        }

        if (porcentagem > 0) {
            const quantidadeEmGramas = Math.round(pesoFilhote * porcentagem * 1000); // Conversão para gramas
            faixaPorcao = `${quantidadeEmGramas}g por dia`;
            recomendacoes = 'Divisão recomendada: 40% ossos carnudos, 25% carnes, 20% víscera muscular, 5% víscera secretora, 10% vegetais.';
        }
    }

    // Exibir resultados
    document.getElementById('faixa-porcao').innerText = faixaPorcao;
    document.getElementById('recomendacoes').innerText = recomendacoes;
    document.getElementById('resultado').style.display = 'block';
}


