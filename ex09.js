function aprovaOuReprova(nota){
    let notaCorrigida = arredondar(nota)
    if(notaCorrigida >= 40){
        console.log(`Aprovado com nota ${notaCorrigida}`)
    }
    else{
        console.log(`Reprovado com nota ${notaCorrigida}`)
    }
    
}

function arredondar(nota){
    if(nota % 5 > 2){
        return nota + (5 - (nota % 5))
    }
    else{
        return nota
    }
}

aprovaOuReprova(90)
aprovaOuReprova(30)
aprovaOuReprova(38)
aprovaOuReprova(88)
aprovaOuReprova(61)

