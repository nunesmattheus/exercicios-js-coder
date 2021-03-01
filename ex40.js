function nota(vet){
    for(let i = 0; i < vet.length; i++){
        if(vet[i] <= 4.9){
            vet[i] = vet[i] + ': D'
        }
        else if(vet[i] >= 5 && vet[i] <= 6.9){
            vet[i] = vet[i] + ': C'
        }
        else if(vet[i] >= 7 && vet[i] <= 8.9){
            vet[i] = vet[i] + ': B'
        }
        else{
            vet[i] = vet[i] + ': A'             
        }
    }
    return vet
}

console.log(nota([2,6,8,9]))