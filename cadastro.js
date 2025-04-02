let hospedes = [];
const maxCadastros = 15;

function menu() {
    let opcao;
    do {
        opcao = prompt("Selecione uma opção:\n1. Cadastrar\n2. Pesquisar\n3. Sair");

        switch (opcao) {
            case "1":
                cadastrarHospede();
                break;
            case "2":
                pesquisarHospede();
                break;
            case "3":
                alert("Saindo do programa...");
                break;
            default:
                alert("Opção inválida! Tente novamente.");
        }
    } while (opcao !== "3");
}

function cadastrarHospede() {
    if (hospedes.length >= maxCadastros) {
        alert("Máximo de cadastros atingido!");
        return;
    }
    let nome = prompt("Qual o nome do hóspede?");
    if (nome) {
        hospedes.push(nome);
        alert(`Hóspede ${nome} foi cadastrado(a) com sucesso!`);
    } else {
        alert("Nome inválido! Cadastro cancelado.");
    }
}

function pesquisarHospede() {
    let nome = prompt("Qual o nome do hóspede?");
    if (hospedes.includes(nome)) {
        alert(`Hóspede ${nome} foi encontrado(a)!`);
    } else {
        alert(`Hóspede ${nome} não foi encontrado(a)!`);
    }
}

// Código para cadastro de hóspedes com seleção de diária
let diariaSelecionada = prompt(
    "Escolha o serviço desejado:\n" +
    "Básico | Preço (diária): R$ 55,90\n" +
    "Premium | Preço (diária): R$ 105,90\n" +
    "Luxo | Preço (diária): R$ 155,90"
).toLowerCase();

const basico = 55.90;
const premium = 105.90;
const luxo = 155.90;
let diaria = 0;

switch (diariaSelecionada) {
    case "basico":
        diaria = basico;
        alert("O valor da diária escolhida é: R$ " + diaria.toFixed(2));
        break;
    case "premium":
        diaria = premium;
        alert("O valor da diária escolhida é: R$ " + diaria.toFixed(2));
        break;
    case "luxo":
        diaria = luxo;
        alert("O valor da diária escolhida é: R$ " + diaria.toFixed(2));
        break;
    default:
        alert("Opção inválida, recarregue a página e tente novamente.");
        diaria = 0;
}

let gratuito = 0;
let meia = 0;
let inteiro = 0;
let total = 0.0;

if (diaria > 0) { // Só continua se a diária for válida
    do {
        let nome = prompt("Qual seu nome?\nCaso não tenha mais nenhum hóspede digite PARE");
        if (nome.toUpperCase() == "PARE") {
            break; // Encerra o loop se o usuário digitar "PARE"
        }

        let idade = parseInt(prompt('Qual sua idade?')); // Converte para número

        if (idade <= 6) {
            alert(nome + " possui gratuidade.");
            gratuito++;
        }
        else if (idade >= 60) {
            let valor_meia = diaria / 2;
            alert(nome + " tem direito a meia (R$ " + valor_meia.toFixed(2) + ")");
            total += valor_meia;
            meia++;
        }
        else {
            alert(nome + " vai pagar o valor integral (R$ " + diaria.toFixed(2) + ")");
            total += diaria;
            inteiro++;
        }

    } while (true);

    document.write(
        "Resumo: " + "<br>" + "Gratuidades: " + gratuito + "<br>" + "Meias: " + meia + "<br>" + "Inteiras: " + inteiro + "<br>" + "Total arrecadado: R$ " + total.toFixed(2)
    );
}

menu();