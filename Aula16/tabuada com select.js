function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um Número!!')
    } else {
        if (document.getElementById('soma').checked) {
            let n = Number(num.value)
            let c = 1
            tab.innerHTML = ''
            while (c <= 10) {

                let item = document.createElement('option') // cria  o option dinanicamente
                item.text = `${n}+ ${c} = ${n + c}`
                item.value = `tab${c}`
                tab.appendChild(item)
                c++
            }

            //listab = parseFloat(soma())
        } else if (document.getElementById('subtracao').checked) {
            let n = Number(num.value)
            let c = 1
            tab.innerHTML = ''
            while (c <= 10) {

                let item = document.createElement('option') // cria  o option dinanicamente
                item.text = `${n}- ${c} = ${c - n}`
                item.value = `tab${c}`
                tab.appendChild(item)
                c++
            }

        } else if (document.getElementById('multiplicacao').checked) {
            let n = Number(num.value)
            let c = 1
            tab.innerHTML = ''
            while (c <= 10) {

                let item = document.createElement('option') // cria  o option dinanicamente
                item.text = `${n} x ${c} = ${n * c}`
                item.value = `tab${c}`
                tab.appendChild(item)
                c++
            }

        } else if (document.getElementById('divisao').checked) {
            let n = Number(num.value)
            let c = 1
            tab.innerHTML = ''
            while (c <= 10) {

                let item = document.createElement('option') // cria  o option dinanicamente
                item.text = `${n}/${c} = ${n / c}`
                item.value = `tab${c}`
                tab.appendChild(item)
                c++
            }

        }



    }



}
