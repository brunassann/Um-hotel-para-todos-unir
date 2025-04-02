
let nome = prompt("Qual seu nome?")
let hora = parseInt(prompt("Quantas horas vai durar o seu evento?"))
let garcom = parseInt(prompt("Quantos garçons seu evento vai precisar?"))
const valor_garcom = hora * (garcom * 10.50) 

alert("R$ " + valor_garcom.toFixed(2) + " o valor total para o seu evento fica")


let confirmacao = prompt("Digite SIM se você concorda com o valor e deseja seguir com a reserva, caso contrário digite NÃO")

if(confirmacao.toUpperCase() == "SIM"){
    alert(nome + " sua reserva foi feita! Obrigado(a) por nos escolher para o seu evento!")
}
else{
    alert(nome + " sua reserva foi cancelada!")
}