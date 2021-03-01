function basquete(valores){
    let maior = valores[0]
    let menor = valores[0]
    let pior = 0
    let cont = 0
    for(let i = 0; i < valores.length; i++){
        if(valores[i] > maior){
            maior = valores[i]
            cont++
        }
        else if(valores[i] < menor){
            menor = valores[i]
            pior = i + 1            
        }
    }
    return [cont, pior]
}

console.log(basquete([10, 20, 20, 8, 25, 3, 0, 30, 1]))