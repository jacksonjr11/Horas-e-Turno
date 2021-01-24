var agora = new Date();
var hora = agora.getHours();
var minute = agora.getMinutes();
var texto = document.getElementById('hora');
var img = document.getElementById('img');
texto.innerHTML = `Agora são ${hora}:${minute}`


if(hora>=6 && hora<12) {
    // document.getElementById('img').src = './manha.png'
    img.src ='./manha.png'
    document.body.style.backgroundColor ='#FFCA02'
}
else if (hora<=18){
    // document.getElementById('img').src = './tarde.jfif'
    img.src ='./tarde.jfif'
    document.body.style.backgroundColor ='#F76105'
}
else {
    // document.getElementById('img').src = './noite.jpg'
    img.src ='./noite.jpg'
    document.body.style.backgroundColor ='#0B121F'
}