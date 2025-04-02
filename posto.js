
let nome = prompt("Qual o seu nome?")

let gasolina1 = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?"))
let alcool1 = parseFloat (prompt("Qual o valor do álcool no posto Wayne Oil?"))

let gasolina2 = parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol?"))
let alcool2 = parseFloat (prompt("Qual o valor do álcool no posto Stark Petrol?"))

let limitePrecoAlcoolW = gasolina1 * 0.7
let limitePrecoAlcoolS = gasolina2 * 0.7

let combustivelWayne = (alcool1 <= limitePrecoAlcoolW) ? "álcool" : "gasolina"
let combustivelStark = (alcool2 <= limitePrecoAlcoolS) ? "álcool" : "gasolina"

let custoWayne = (combustivelWayne === "álcool") ? alcool1 * 42 : gasolina1 * 42
let custoStark = (combustivelStark === "álcool") ? alcool2 * 42 : gasolina2 * 42

let postoMaisBarato = (custoWayne < custoStark) ? "Wayne Oil" : "Stark Petrol"
let combustivelMaisBarato = (custoWayne < custoStark) ? combustivelWayne : combustivelStark

alert(`${nome}, é mais barato abastecer com ${combustivelMaisBarato} no posto ${postoMaisBarato}.`)
