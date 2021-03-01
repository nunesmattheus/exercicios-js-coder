function bhaskara(a, b, c){
    let delta = b**2 -4*a*c
    let d = Math.sqrt(delta)
    if(delta < 0){
        return "Delta é negativo"
    }
    else{
        let x1 = (-b + d)/2*a
        let x2 = (-b - d)/2*a
        if(delta == 0){
            x1 = x2
            return x1
        }
        else{
            let res = [x1, x2]
            return res
        }        
    }
}

console.log(bhaskara(1, -1, -12))