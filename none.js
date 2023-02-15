function carregar(){
    var msg = window.document.getElementById('msg')
    var photo = window.document.getElementById('photo')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //bom dia //
        photo.src = 'foto.manha.jpg'
        document.body.style.background = '#FEC184'

    } else if (hora >= 0 && hora < 18){
        // Boa tarde //
        photo.src = 'imagens2.png'
        document.body.style.background = '#D9B0CE'

    } else {
        //boa noite//
        photo.src = 'noite-foto.jpg'
        document.body.style.background = '#2c094a'
    }

}

