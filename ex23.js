function aluno(codAluno, nota1, nota2, nota3){
    let media = (nota1*3 + nota2*3 + nota3*4)/10
    let mensagem = ''

    if(media >= 5){
        mensagem = "APROVADO"
        return `codigo: ${codAluno}, nota1: ${nota1}, nota2: ${nota2}, nota3: ${nota3}, media: ${media}, ${mensagem}`
    }
    else{
        mensagem = "REPROVADO"
        return `codigo: ${codAluno}, nota1: ${nota1}, nota2: ${nota2}, nota3: ${nota3}, media: ${media}, ${mensagem}`
    }

}

console.log(aluno(123, 5, 6, 5))
