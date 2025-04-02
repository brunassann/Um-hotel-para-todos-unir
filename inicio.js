
let nome_hotel = prompt("Qual o nome do hotel?")
alert("O nome do hotel é " + nome_hotel)

let nome_usuario = prompt("Qual seu nome?")
let senha = Number(prompt("Digite sua senha:"))

if(senha != 2678){
    alert("Senha incorreta, tente novamente!")
}
else{
    alert("Bem vindo ao hotel " +  nome_hotel  + "!\n" + nome_usuario + " é um imenso prazer ter você por aqui!")
}