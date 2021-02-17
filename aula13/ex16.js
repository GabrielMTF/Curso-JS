function carregar () {


var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var hora = 22
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12) {
    img.src = 'imagensedit/manha-medio.jpg'
    document.body.style.background = '#e2cd9f'
    //Bom dia
} else if (hora >= 12 && hora < 18){
    img.src = 'imagensedit/tarde-medio.jpg'
    document.body.style.background = '#b9846f'
    //Boa tarde
} else {
    img.src = 'imagensedit/noite-medio.jpg'
    document.body.style.background = '#515154'
    //Boa noite
}
}