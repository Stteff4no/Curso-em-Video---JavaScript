var agora = new Date()
var hora= agora.getHours()
console.log(`Agora sao exatamente ${hora}.`)
 if ( hora <= 12){
    console.log('Bom dia')

 }else if ( hora <= 12){
    console.log('Boa tarde')

 }else if ( hora <= 18){
    console.log('Boa Noite')

 }