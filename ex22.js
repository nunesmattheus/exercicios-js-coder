function calcularValor(num, anuidade){   
    if(num > 0 && num < 13){
        let atraso = num - 1
        let resultado = anuidade * (1 + (5/100))**atraso
        return resultado.toFixed(2)
    }
    else{
        return "Mês invalido"
    }
   
}

console.log(calcularValor(1, 1000))
console.log(calcularValor(2, 1000))
console.log(calcularValor(3, 1000))
console.log(calcularValor(4, 1000))
console.log(calcularValor(5, 1000))
console.log(calcularValor(6, 1000))
console.log(calcularValor(7, 1000))
console.log(calcularValor(8, 1000))
console.log(calcularValor(9, 1000))
console.log(calcularValor(10, 1000))
console.log(calcularValor(11, 1000))
console.log(calcularValor(12, 1000))

