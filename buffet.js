let convidados = parseInt(prompt("Quantas pessoas vão ter no seu evento?"))
    
        if (convidados > 350) {
            alert("Quantidade de convidados superior à capacidade máxima.")
        } 
        else {
            let nome = prompt("Qual o seu nome?")
    
            let cafe = convidados * 0.2 
            let agua = convidados * 0.5
            let salgado = convidados * 7
    
            let custoCafe = cafe * 0.80
            let custoAgua = agua * 0.40
            let custoSalgado = (salgado / 100) * 34
    
            let total = custoCafe + custoAgua + custoSalgado
    
            alert(
                "Você vai precisar de: \n" +
                cafe.toFixed(1) + " litros de café \n" +
                agua.toFixed(1) + " litros de água\n" +
                salgado + " salgados.\n" +
                "O custo total do buffet do evento será de: R$ " + total.toFixed(2)
            )
    
            let confirmar = prompt("Gostaria de fazer a reserva? \n(Digite SIM para prosseguir ou NÃO para cancelar)")
    
            if (confirmar.toUpperCase() == "SIM") {
                alert(nome + ", reserva feita com sucesso!")
            } else {
                alert(nome + ", reserva cancelada!")
            }
        }