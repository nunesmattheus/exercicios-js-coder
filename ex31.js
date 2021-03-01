function negativo(valores){
    let cont = 0
    for(let i = 0; i < valores.length; i++){
        if(valores[i] < 0){
            cont++
        }
    }
    return `A quantidade de numeros negativos é ${cont}`
}

console.log(negativo([-1, -2, 1, 4, 5]))