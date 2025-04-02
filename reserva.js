let dias = parseInt(prompt('Quantos dias você pretende ficar hospedado? (1 a 30 dias)'))
let diaria = prompt("Escolha o serviço desejado:" + "\n" + "Básico | Preço (diária): R$ 55,90"+  "\n" + "Premium | Preço (diária): R$ 105,90" + "\n" + "Luxo | Preço (diária): R$ 155,90")


const basico = Number(55.90)
const premium = Number(105.90)
const luxo = Number(155.90)

switch (diaria) {
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
    }

let usuario = prompt("Por favor, nos informe seu nome: ")

let confirmacao = prompt("Por favor, digite SIM se dejesa confirmar a reserva e NÃO para cancelar")

if (confirmacao.toUpperCase() == "SIM"){
    alert("Sua reserva foi confirmada!")
} else if (confirmacao.toUpperCase() =="NÃO") {
    alert("Sua reserva foi cancelada!")
} else {
    alert("Valor inválido!")
}
