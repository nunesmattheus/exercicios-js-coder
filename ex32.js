function media(valores){
     let soma = 0

    for(let i = 0; i < valores.length; i++){
        soma += valores[i]
    }
    
    return `A media é ${soma / valores.length}`
}

console.log(media([1, 2, 3, 4, 17]))
