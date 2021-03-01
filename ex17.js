function aumentoDeSalario(plano, salario){
    switch(plano){
        case 'A':
            return `R$ ${salario * 1.1}`
        case 'B':
            return `R$ ${salario * 1.15}`
        case 'C':
            return `R$ ${salario * 1.2}`
        default:
            return "Plano inválido"
    }
}

console.log(aumentoDeSalario('A', 2000))
console.log(aumentoDeSalario('B', 2000))
console.log(aumentoDeSalario('C', 2000))
