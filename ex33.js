let vetorInteiro = [1, 2, 5, 7]
let vetorString = ['oi', 'hi', 'o', 'aa']
let vetorDouble = [1.1, 1.5, 1.7, 1.8]

function concatenar(vet1, vet2){
    resultado = []
    for(let i = 0; i < arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))