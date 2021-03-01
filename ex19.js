function cardapio(codigo, quantidade){
    switch(codigo){
        case 100:
            return `R$ ${quantidade * 3}`
        case 200:
            return `R$ ${quantidade * 4}`
        case 300:
            return `R$ ${quantidade * 5.5}`
        case 400:
            return `R$ ${quantidade * 7.5}`
        case 500:
            return `R$ ${quantidade * 3.5}`
        case 600:
            return `R$ ${quantidade * 2.8}`
        default:
            return "Produto não existente"
    }
}

console.log(cardapio(100, 2))
console.log(cardapio(200, 2))
console.log(cardapio(300, 2))
console.log(cardapio(400, 2))
console.log(cardapio(500, 2))
console.log(cardapio(600, 2))
