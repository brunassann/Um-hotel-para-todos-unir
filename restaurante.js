let dia = prompt("Qual o dia do seu evento?\n(Dias da semana apenas)")

if((dia.toUpperCase() == "SEGUNDA" || dia.toUpperCase() == "TERÇA" || dia.toUpperCase() == "QUARTA" || dia.toUpperCase() == "QUINTA" || dia.toUpperCase() == "SEXTA")){

    let horario1 = prompt("Qual o horário do seu evento? (7hs às 23hs)")

    if(horario1 < 7 || horario1 > 23 ){
    alert("Restaurante indisponível, tente novamente!")}
    else{
        let empresa = prompt("Qual o nome da empresa?")
        alert("Restaurante reservado para " + empresa +"." + " Para " + dia + " às " + horario1 + "hs.")   
    }
}
else if (dia.toUpperCase() == "SABADO" || dia.toUpperCase() == "DOMINGO"){
    let horario2 = prompt("Qual o horário do seu evento? (7hs às 15hs)")

    if(horario2 < 7 || horario2 > 15 ){
    alert("Restaurante indisponível, tente novamente!")}
    else{
        let empresa = prompt("Qual o nome da empresa?")
        alert("Restaurante reservado para " + empresa +"." + " Para " + dia + " às " + horario2 + "hs.")
        
    }

}