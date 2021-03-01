function intervalo(valores){
    let cont1 = 0
    let cont2 = 0
    for(let i = 0; i < valores.length; i++){
        if(valores[i] >= 10 && valores[i] <= 20){
            cont1++
        }
        else{
            cont2++
        }
    }
    return `Exitem ${cont1} numeros no intervalo de [10, 20] e ${cont2} numeros fora dele`
}

console.log(intervalo([1, 2, 3, 4, 5, 10, 11, 14, 20, 21, 23]))