let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function concatena(vet1, vet2){
    let resultado = []
    for(let i =0; i < arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}

console.log(concatena(vetorPilha, vetorAdiciona))