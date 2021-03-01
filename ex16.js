function calcular(num1, operacao, num2){
    switch(operacao){
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return "Operação invalida"
    }
}

console.log(calcular(2, '+', 3))
console.log(calcular(7, '-', 1))
console.log(calcular(2, '*', 4))
console.log(calcular(14, '/', 7))