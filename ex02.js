function triangulo(lado1, lado2, lado3){
    if(lado1 == lado2 && lado1 == lado3){
        return "Equilátero"
    }
    else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        return "Isósceles"
    }
    else{
        return "Escaleno"
    }
}

console.log(triangulo(2,2,2))
console.log(triangulo(2,2,3))
console.log(triangulo(1, 2, 3))