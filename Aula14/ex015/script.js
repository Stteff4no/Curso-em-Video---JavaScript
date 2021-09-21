function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique o Dados, formato aceito Data ano com 4 Dígitos')
        
    }else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano -  Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')

        if (fsex[0].checked){
            gênero = 'Sexo Masculino'
            
            if (idade => 0 & idade <= 10) {
                //criança
                
                img.setAttribute('src','menino.png')

            } else if (idade >10 & idade <= 21){
                // jovem
                img.setAttribute('src','rapaz.png')
                
            }else if (idade >= 21 & idade < 50){
                //adulto
                img.setAttribute('src','homem adulto.png')   
            }else if ( idade >= 50) {
                // idoso
                img.setAttribute('src','idoso.png')
            }

        }else if (fsex[1].checked){
                gênero = 'Sexo Feminino '

                if (idade => 0 & idade <= 10) {
                    //criança
                    img.setAttribute('src','menina.png')
                } else if (idade > 10 & idade <= 21){
                    // jovem
                    img.setAttribute('src','garota.png')
                }else if (idade >= 21 & idade < 50){
                    //adulto
                    img.setAttribute('src','mulher adulta.png')
                }else if ( idade >= 50) {
                    // idoso
                    img.src = 'idosa.png'
                    img.setAttribute('src','idosa.png')
                }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com até ${idade} anos`
        res.appendChild(img)       
    
    }
}