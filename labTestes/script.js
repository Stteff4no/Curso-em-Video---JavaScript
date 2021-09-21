
function calcular() {
var  numtab = parseFloat(document.getElementById('numtab').value)
//var  numtab2 = parseFloat(document.getElementById('numtab2').value)
var res = document.querySelector('div#res')
var res1 = document.querySelector('div#res1')
var res2 = document.querySelector('div#res2')
var res3 = document.querySelector('div#res3')
var res4 = document.querySelector('div#res4')
var res5 = document.querySelector('div#res5')
var res6 = document.querySelector('div#res6')
var res7 = document.querySelector('div#res7')
var res8 = document.querySelector('div#res8')
var res9 = document.querySelector('div#res9')
var res10 = document.querySelector('div#res10')
var listab = ''

    

       if (document.getElementById('soma').checked){
            listab = parseFloat(soma())
           }else if (document.getElementById('subtracao').checked){
            listab = parseFloat(subtracao(numtab ))
           }else if (document.getElementById('multiplicacao').checked){
                listab = parseFloat(multiplicacao(numtab ))
           }else if (document.getElementById('divisao').checked){
                    listab = parseFloat(divisao(numtab ))
           }
                    
      
        
    //for(var c=0; c<=10 ; c++){    
        
        function soma()
        {
            for(var c=0; c<=10 ; c++){
                //var listatab = new array()
                 //   listatab = 
                
                res.innerHTML =`<strong>  Somar : ${numtab} </strong> <br> 
                ${numtab} + ${c-10} é ${numtab + c-10 } <br>`
                res1.innerHTML =`${numtab} + ${c-9} é ${numtab + c-9 }`
                res2.innerHTML =`${numtab} + ${c-8} é ${numtab + c-8 }`
                res3.innerHTML =`${numtab} + ${c-7} é ${numtab + c-7 }`
                res4.innerHTML =`${numtab} + ${c-6} é ${numtab + c-6 }`
                res5.innerHTML =`${numtab} + ${c-5} é ${numtab + c-5 }`
                res6.innerHTML =`${numtab} + ${c-4} é ${numtab + c-4 }`
                res7.innerHTML =`${numtab} + ${c-3} é ${numtab + c-3 }`
                res8.innerHTML =`${numtab} + ${c-2} é ${numtab + c-2 }`
                res9.innerHTML =`${numtab} + ${c-1} é ${numtab + c-1 }`
                res10.innerHTML =`${numtab} + ${c} é ${numtab + c }`

            }
            
        }
        
        function subtracao(x)
        {
            for(var c=0; c<=10 ; c++){
               
                res.innerHTML =`<strong>  Subtrair : ${numtab} </strong> <br>
                 ${numtab} - ${c-10} é ${numtab - c+10 } <br/>`
                res1.innerHTML  =`${numtab} - ${c-9} é ${c+9 - numtab }`
                res2.innerHTML  =`${numtab} - ${c-8} é ${c+8 - numtab }`
                res3.innerHTML  =`${numtab} - ${c-7} é ${c+7 - numtab }`
                res4.innerHTML  =`${numtab} - ${c-6} é ${c+6 - numtab }`
                res5.innerHTML  =`${numtab} - ${c-5} é ${c+5 - numtab }`
                res6.innerHTML  =`${numtab} - ${c-4} é ${c+4 - numtab }`
                res7.innerHTML  =`${numtab} - ${c-3} é ${c+3 - numtab }`
                res8.innerHTML  =`${numtab} - ${c-2} é ${c+2 - numtab }`
                res9.innerHTML  =`${numtab} - ${c-1} é ${c+1 - numtab }`
                res10.innerHTML =`${numtab} - ${c  } é ${c    - numtab}`
            }
          //return (x - y);
        }
        
        function multiplicacao(x)
        {
            for(var c=0; c<=10 ; c++){
                res.innerHTML =`<strong> Multiplicar : ${numtab} </strong> <br> 
                                ${numtab} x ${nu0 = c-10} é ${parseInt(numtab * nu0) } <br/>`
                res1.innerHTML  =`${numtab} x ${nu1 = c-9} é ${parseInt( numtab * nu1) }`
                res2.innerHTML  =`${numtab} x ${nu2 = c-8} é ${parseInt(numtab * nu2) }`
                res3.innerHTML  =`${numtab} x ${nu3 = c-7} é ${parseInt(numtab * nu3) }`
                res4.innerHTML  =`${numtab} x ${nu4 = c-6} é ${parseInt(numtab * nu4) }`
                res5.innerHTML  =`${numtab} x ${nu5 = c-5} é ${parseInt(numtab * nu5) }`
                res6.innerHTML  =`${numtab} x ${nu6 = c-4} é ${parseInt(numtab * nu6) }`
                res7.innerHTML  =`${numtab} x ${nu7 = c-3} é ${parseInt(numtab * nu7) }`
                res8.innerHTML  =`${numtab} x ${nu8 = c-2} é ${parseInt(numtab * nu8) }`
                res9.innerHTML  =`${numtab} x ${nu9 = c-1} é ${parseInt(numtab * nu9) }`
                res10.innerHTML =`${numtab} x ${nu10 = c } é ${parseInt(numtab * nu10) }`
 
            } parse
          //return (x * y);
        }
        
        function divisao(x)
        {
            for(var c=0; c<=10 ; c++){
                
                res.innerHTML  =`<strong>  Dividir : ${numtab} </strong> <br> 
                                  ${numtab} / ${nu0 = c-10} é ${numtab / nu0 } <br/>`
                res1.innerHTML  =`${numtab} / ${nu1 = c-9} é ${numtab / nu1 }`
                res2.innerHTML  =`${numtab} / ${nu2 = c-8} é ${numtab / nu2 }`
                res3.innerHTML  =`${numtab} / ${nu3 = c-7} é ${numtab / nu3 }`
                res4.innerHTML  =`${numtab} / ${nu4 = c-6} é ${numtab / nu4 }`
                res5.innerHTML  =`${numtab} / ${nu5 = c-5} é ${numtab / nu5 }`
                res6.innerHTML  =`${numtab} / ${nu6 = c-4} é ${numtab / nu6 }`
                res7.innerHTML  =`${numtab} / ${nu7 = c-3} é ${numtab / nu7 }`
                res8.innerHTML  =`${numtab} / ${nu8 = c-2} é ${numtab / nu8 }`
                res9.innerHTML  =`${numtab} / ${nu9 = c-1} é ${numtab / nu9 }`
                res10.innerHTML =`${numtab} / ${nu10 = c } é ${numtab / nu10 }`     

            }
          //return (x / y);
        }
        
          //res.innerHTML =`Tabuada de ${numtab} x ${c} é ${listab.value}`
    //}
    
}   







