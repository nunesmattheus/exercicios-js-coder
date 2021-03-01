function planoDeSaude(idade){
    let valor = 100
    if(idade < 10){
        valor += 80
    }
    else if(idade >= 10 && idade <= 30){
        valor += 50
    }
    else if(idade > 30 && idade <= 60){
        valor += 95
    }
    else{
        valor += 130
    }
    return `R$ ${valor}`
}

console.log(planoDeSaude(5))
console.log(planoDeSaude(17))
console.log(planoDeSaude(38))
console.log(planoDeSaude(62))