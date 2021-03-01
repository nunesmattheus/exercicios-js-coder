function fatorial(num){
    fat = 1
    for(let i = 1; i <= num; i++){
        fat = fat * i
    }
    return fat
}

console.log(fatorial(5))