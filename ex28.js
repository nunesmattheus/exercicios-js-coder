function lerVet(valores){
    let cont1 =0 
    let cont2 = 0
    for(let i = 0; i < valores.length; i++){
        if(valores[i] % 2 == 0){
            cont1++
        }
        else{
            cont2++
        }
    }
    return `O vetor tem ${cont1} numeros pares e ${cont2} numeros impares`
}

console.log(lerVet([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))