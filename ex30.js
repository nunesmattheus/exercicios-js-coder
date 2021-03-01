function maiorOuMenor(valores){
    let maior = valores[0]
    let menor = valores[0]

    for(let i = 0; i<= valores.length; i++){
        if(valores[i] > maior){
            maior = valores[i]
        }
        else if(valores[i] < menor){
            menor = valores[i]
        }
    }
    return `O maior valor é ${maior} e o menor é ${menor}`
}

console.log(maiorOuMenor([1, 2, 3, 4, 5, 6, 7]))