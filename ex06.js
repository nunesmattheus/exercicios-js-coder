function jurosSimples(capital, taxa, tempo){
    let montante = capital + (capital * (taxa/100) * tempo)
    return `O montante em juros simples é R$ ${montante}`
}

function jurosCompostos(capital, taxa, tempo){
    let montante = capital*(1 + (taxa/100))**tempo
    return `O montante em juros compostos é R$ ${montante}`
}

console.log(jurosSimples(100, 1, 12))

console.log(jurosCompostos(100, 1, 12))