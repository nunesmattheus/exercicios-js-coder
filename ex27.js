function calcularAltura(alt1, t1, alt2, t2){
    if(alt1 == alt2){
        if(t1 > t2){
            return "A criança 1 ultrapassará a criança 2 em 1 ano"
        }
        else if(t2 > t1){
            return "A crinça 2 ultrapassará a criança 1 em um ano"
        }
        else{
            return "As crianças tem igual altura e crescimento"
        }
    }
    else if((alt1 > alt2 && t1 >= t2) || (alt2 > alt1 && t2 >= t1)){
        return "A criança menor não ultrapassará a maior"                   
    }
    else{
        return calcularTempo(alt1, t1, alt2, t2)
    }    
}

function calcularTempo(altura1, taxa1, altura2, taxa2){
    let cont1 = 0
    let cont2 = 0

    if(altura1 > altura2 && taxa2 > taxa1){
        while(altura1 >= altura2){
            altura1 += taxa1
            altura2 += taxa2
            cont1++
        }
        return `A criança menor ultrapassará a maior em ${cont1} anos`
    }
    else if(altura2 > altura1 && taxa1 > taxa2){
        while(altura2 >= altura1){
            altura1 += taxa1
            altura2 += taxa2
            cont2++
        }
        return `A criança menor ultrapassará a maior em ${cont2} anos`
    }
}

console.log(calcularAltura(100, 2, 100, 1))
console.log(calcularAltura(100, 1, 100, 2))
console.log(calcularAltura(100, 1, 100, 1))
console.log(calcularAltura(105, 2, 100, 1))
console.log(calcularAltura(100, 1, 105, 1))
console.log(calcularAltura(105, 1, 100, 2))
console.log(calcularAltura(100, 2, 105, 1))

