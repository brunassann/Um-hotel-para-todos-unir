
let nome = prompt("Qual seu nome?")
let menor_valor = Infinity
let empresa_menorValor = ""

while(true){
    let empresa = prompt("Qual o nome da empresa?")
    let valor = parseFloat(prompt("Qual o valor por aparelho?"))
    let quantidade = parseInt(prompt("Qual a quantidade de aparelhos?"))
    let desconto = parseFloat(prompt("Qual a porcetagem de desconto?"))
    let quantidade_minima = parseInt(prompt("Qual a quantidade mínima de aparelhos para obter desconto?"))

    let total = valor * quantidade

    if(quantidade >= quantidade_minima){
        total -= total * (desconto / 100)
    }

    alert("O serviço de " + empresa + " custará R$ " + total.toFixed(2))

    if(total < menor_valor){
        menor_valor = total
        empresa_menorValor = empresa
    }

    let prosseguir = prompt("Deseja informar novos dados, " + nome + "?" + "(S/N)")
    if(prosseguir !== "S"){
        break
    } 
}

alert(nome + " o orçamento de menor valor é o de " + empresa_menorValor + " por R$ " + menor_valor.toFixed(2))