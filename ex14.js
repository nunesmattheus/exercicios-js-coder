function fruta(nome){
    switch(nome){
        case 'maca':
            return "Não vendemos esta fruta aqui"
        case 'kiwi':
            return "Estamos com escassez de kiwis"
        case 'melancia':
            return "Aqui esta, são 3 reais o quilo"
        default:
            return "Dado invalido"
    }
}

console.log(fruta('maca'))
console.log(fruta('melancia'))
console.log(fruta('kiwi'))