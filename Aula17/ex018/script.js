let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}




function adicionar() {
    res.innerHTML = ''
    if (isNumero(num.value) && !inLista(num.value, valores)) { // ^ ! InLista checa dentro do vetor se existe o numero
        //window.alert('tudo Ok.')
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        res.innerHTML += `<p> <strong> Valor inválido ou já encontrado na Lista! </strong> </p> '`
        // * window.alert('Valor inválido ou já encontrado na Lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        res.innerHTML += `<p> <strong> 'Adicione valores antes de Finalizar!'</strong>  </P>`
        // * window.alert('Adicione valores antes de Finalizar!')
    } else {
        let tot = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let média = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        média = soma / tot
        res.innerHTML = ""
        res.innerHTML += `<p> Ao Todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p> maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> menor valor informado foi ${menor}.</p.`
        res.innerHTML += `<p> Somado todos os valores, temos  ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores digitados é ${média}. </P>`
    }
   
   

}