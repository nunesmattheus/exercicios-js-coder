function impares(ini, fim){
    let num = 0    
    if(ini < fim){
        num = fim - ini       
    }
    else{
        num = ini - fim
    }
    
    return imprimir(num)    
}

function imprimir(intervalo){    
    for(let i = 0; i <= intervalo; i++){
        if(i%2 != 0){
            console.log(i)
        }
    }
}

impares(0,100)