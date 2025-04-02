
let nome = prompt("Qual o seu nome?")       
let convidados = parseInt(prompt("Quantas pessoas vão ter no seu evento?"));

if (convidados > 350) {
    alert("Quantidade de convidados superior à capacidade máxima.")    
    
} 
else if (convidados <= 0) {
    alert("Número de convidados inválido.")
    
}

else{
    if(convidados <= 150){
    alert(nome + " use o auditório Laranja!")
}
else if(convidados <= 220){
    let cadeira_extra = convidados - 150
    alert(nome + ` use o auditório Laranja! \n(Inclua mais ${cadeira_extra} cadeira(s))`)
}
else{
    alert(nome + " use o auditório Colorado!")
}

let confirmar = prompt("Gostaria de fazer a reserva? \n(Digite SIM para prosseguir ou NÃO para cancelar)")

 if (confirmar.toUpperCase() == "SIM") {
    alert(nome + ", reserva feita com sucesso!")
} 
else {
    alert(nome + ", reserva cancelada!")
}

}