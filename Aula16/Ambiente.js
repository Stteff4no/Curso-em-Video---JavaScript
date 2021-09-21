let num = [5,8,2,9,3]

num.sort() // ! ordena conteudo do vetor
num.push(1) // ^ Insere outro valor no vetor automaticamente no final

console.log(` o nosso vetor é o ${num.length}`)
console.log(`o primeiro valor do vetor é ${num[1]}`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log('o valor não foi encontrado')
}else{
    console.log(`o valor 8 está na posição ${pos}`)
}


