function multiplica(vet, num){
    let resultado = []
    for(let i = 0; i < vet.length; i++){
        resultado[i] = vet[i] * num
    }
    return resultado
}

console.log(multiplica([1,2,3,4], 2))