function troca(vetA, vetB){
    if(vetA.length == vetB.length){
        for(let i = 0; i < vetA.length; i++){
            vetA[i] = vetA[i] + vetB[i]
            vetB[i] = vetA[i] - vetB[i]
            vetA[i] = vetA[i] - vetB[i]
        }
    }
    else{
        return "Vetores diferente"
    }
    console.log(`Novo vetor A: ${vetA}`)
    console.log(`Novo vetor B: ${vetB}`)
}

troca([1,2,3], [7,8,9])