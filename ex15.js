function carro(modelo){
    switch(modelo){
        case 'hatch':
            return "Compra efetuada com sucesso"
        case 'sedam':
        case 'motocicleta':
        case 'caminhonete':
            return "Tem certeza que não prefere este modelo?"
        default:
            return "Não trabalhamos com este tipo de automóvel aqui"
    }
}

console.log(carro('hatch'))
console.log(carro('sedam'))
console.log(carro('motocicleta'))
console.log(carro('caminhonete'))
console.log(carro('sport'))