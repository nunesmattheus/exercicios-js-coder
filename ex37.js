function pa(n, a1, r){
    let res = []
    let soma = 0
    for(let i = 0; i < n; i++){
    res[i] = a1 
    soma = soma + a1
    a1 = a1 + r        
    }
    return `termos: ${res} e soma: ${soma}`
}

function pg(n, a1, r){
    let res = []
    let soma = 0
    for(let i = 0; i < n; i++){
        res[i] = a1
        soma = soma + a1
        a1 = a1*r
    }
    return `termos: ${res} e soma ${soma}`

}

console.log(pa(5,6,2))
console.log(pg(5,3,3))