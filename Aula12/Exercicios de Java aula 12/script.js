function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 0 //data.getHours()
    c = 0
    for (c = 1; c <= 4; c++){ 

        msg.innerHTML = `Agora são ${hora} horas.`
        if ( hora >= 0 && hora < 12) {
            
            continuar.innerHTML = ("BOM DIA!")
            img.src = 'manha.png'
            document.body.style.background = '#e2cd9f'
            

        }else if ( hora >= 12 && hora < 18) {
            continuar.innerHTML =("BOA TARDE!") 
            img.src = 'tarde.png'
            document.body.style.background = '#b9846f'
            
        }else {
            continuar.innerHTML = ("BOA NOITE!")// BOA NOITE!
            img.src = 'noite.png'
            document.body.style.background = '#515154 '
                 
       
        }
        hora = hora + 4
        /*
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
          }
        
        async function delayedGreeting() {
            esperar.innerHTML =("Espere...");
            await sleep(100000);
            esperar.innerHTML =document.white("Ai vamos");
        }*/
          
    }

}



     

