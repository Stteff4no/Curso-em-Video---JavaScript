
function calcular() {
var  numtab = parseFloat(document.getElementById('numtab').value)
var  numtab2 = parseFloat(document.getElementById('numtab').value)
var res = document.querySelector('div#res')
var listab = ''

    for(var c=0; c<=10 ; c++){

       if (document.getElementById('soma').checked){
            listab = parseFloat(soma(numtab , numtab2))
           }else if (document.getElementById('subtracao').checked){
            listab = parseFloat(subtracao(numtab , numtab2))
           }else if (document.getElementById('multiplicacao').checked){
                listab = parseFloat(multiplicacao(numtab , numtab2))
           }else if (document.getElementById('divisao').checked){
                    listab = parseFloat(divisao(numtab , numtab2))
           }
                    
                    
        res.style.textAlign = 'Center'
        res.innerHTML = listab
        
        function soma(x, y)
        {
          
          return (x + y);
        }
        
        function subtracao(x, y)
        {
          
          return (x - y);
        }
        
        function multiplicacao(x, y)
        {
          
          return (x * y);
        }
        
        function divisao(x, y)
        {
          
          return (x / y);
        }

    //res.innerHTML =`tabuada de ${numtab} x ${c} é ${listab.value}`
   }
    
}   







