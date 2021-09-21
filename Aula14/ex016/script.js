function contar1() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 ||fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = ' <p> Impossível Contar! </p>'
        //window.alert('[ERRO] Faltam dados')
    }else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        
        if (i < f) {
            // Contagem Crescente
            for(let c = i; c <= f ; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            
        }else {
            // Contagem regressiva
            for(let c = i; c >= f ; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`

    }


}


/*function contar(){
var ini = window.document.querySelector('input#inicio').value
var fim = window.document.querySelector('input#fim').value
var passo = window.document.querySelector('input#passo').value
var res = window.document.querySelector('div#res')

if (ini >= 0 && fim >= 0 &&  ini != '' && fim != '' && passo !='' ){
    
    passonatela = fim /passo
    xvezes =  fim / passonatela 
    
    
    //res.innerHTML =`${ini} + ${fim} é ${passo }`

    window.alert('passo na tela é = ' + passonatela)
    window.alert('xvezes é = ' + xvezes)


}else if (passo == 0 ){

}else {
    window.alert('Nao é possível Contar !!Preencha as 3 Entradas Requeridas..')
   
}


}*/
