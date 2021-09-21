
function tabuada() {
    let num = document.getElementById('txtn')
    let res = document.querySelector('div#res')
    let res1 = document.querySelector('div#res1')
    res.innerHTML =''
    if (num.value.length == 0) {
        window.alert('Por favor, digite um Número!!')
    } else {
        //window.alert('tesxte')
        if (document.getElementById('soma').checked) {
            let nu1 = Number(num.value)
            c = 0
            res1.innerHTML =''

            while (c <= 10) {

                res.innerHTML = `<strong>  Somar : ${nu1} </strong> <br>`
                res1.innerHTML += `${nu1} + ${(c)} é ${nu1 + c}<br>`

                c++

            }


        } else if (document.getElementById('subtracao').checked) {
            let nu1 = Number(num.value)
            c = 0
            res1.innerHTML =''

            while (c <= 10) {

                res.innerHTML = `<strong>  Somar : ${nu1} </strong> <br>`
                res1.innerHTML += `${nu1} - ${(c)} é ${c - nu1}<br>`

                c++
            }

        } else if (document.getElementById('multiplicacao').checked) {
            let nu1 = Number(num.value)
            c = 0
            res1.innerHTML =''

            while (c <= 10) {

                res.innerHTML = `<strong>  Somar : ${nu1} </strong> <br>`
                res1.innerHTML += `${nu1} * ${(c)} é ${nu1 * c}<br>`

                c++
            }


        } else if (document.getElementById('divisao').checked) {
            let nu1 = Number(num.value)
            c = 0
            res1.innerHTML =''

            while (c <= 10) {

                res.innerHTML = `<strong>  Somar : ${nu1} </strong> <br>`
                res1.innerHTML += `${nu1} / ${(c)} é ${nu1 / c}<br>`

                c++
            }


        }


    }
}

/* let n = Number(num.value)
    let c= 1
    tab.innerHTML = ''
    while ( c <= 10) {
    
        let item = document.createElement('option') // cria  o option dinanicamente
        item.text = `${n}+ ${c} = ${n+c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
    }    */



function soma(x) {
    let nu1 = Number(numtab.value)
    while (c <= 10) {

        res.innerHTML = `<strong>  Somar : ${nu1} </strong> <br>`
        res1.innerHTML += `${nu1} + ${(c)} é ${nu1 + c}<br>`
        // return (x);
        c++
    }
}

function subtracao(x) {
    for (var c = 0; c <= 10; c++) {

        res.innerHTML = `<strong>  Subtrair : ${numtab} </strong> <br>`
        res1.innerHTML = `${numtab} - ${c - 9} é ${c + 9 - numtab}`

    }
    //return (x - y);
}

function multiplicacao(x) {
    for (var c = 0; c <= 10; c++) {
        var nu1 = 0
        var cont = c -=
            res.innerHTML = `<strong> Multiplicar : ${numtab} </strong> <br> `
        res1.innerHTML += `${numtab} x ${cont} é ${numtab * c}<br>`

    }
    //return (x * y);
}

function divisao(x) {
    for (var c = 0; c <= 10; c++) {
        let p = c -=
            res.innerHTML = `<strong> Dividir : ${numtab} </strong> <br>`
        res1.innerHTML += `${numtab} / ${nu1 = p} é ${numtab / nu1} <br> `
    }
    //return (x / y);
}







