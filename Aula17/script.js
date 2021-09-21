function add() {
    let num = document.getElementById('txta')
    let tab = document.getElementById('seltab')
    let final = document.getElementById('txtfin')
    let res = document.getElementById ('res')
    //let soma = []
    //let soma = soma.push(num.value)

    if (num.value.length == 0 ) {
        window.alert('Por favor, digite um Número!')
    } else if (num.value > 100) {
        window.alert('Digite um Número válido 0 a 100!')
    }else {
        
    
        let valores = [num.value]

        for (let pos in valores) {
            //soma.push(num.value)
            //valores.push([num.value])
            //let soma = (num.value++)
            
            let item = document.createElement('option') // cria  o option dinanicamente
            item.text = `Valor ${valores}`
            item.value = `Valor tab${valores}`
            tab.appendChild(item)
            
        }
       

      
        
       
    }
    
  
}

function finalizar() {
    let num = document.getElementById('txta')
    let tab = document.getElementById('seltab')
    let final = document.getElementById('txtfin')
    let res = document.getElementById ('res')
    let res1 = document.getElementById ('res1')

    if (num.value.length == 0) {
        window.alert('Antes de Finalizar prencha o número')
    }else {
       // let soma = [num.value]
        
        res.innerHTML = `Número é ${soma}`
       res1.innerHTML = `Número na posiçào 2 é  ${soma.indexOf(3)}`
       
    }
    num.value = ''
    //return (x)


}


