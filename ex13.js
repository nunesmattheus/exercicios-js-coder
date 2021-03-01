function diaUtil(num){
    switch(num){
        case 1:
            return "Fim de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Dia útil"
        case 7:
            return "Fim de semana"
        default:
            return "Dia invalido"          
    }
}

console.log(diaUtil(7))