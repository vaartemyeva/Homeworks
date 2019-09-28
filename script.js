//------МОДАЛЬНОЕ ОКНО-----
var buttonShow = document.querySelector("#mainWindow__button_access");
var box = document.querySelector(".modalWindow");
buttonShow.onclick = function(){
    box.style.display = "flex" ;
}

var close = document.querySelector("#modalWindow__button_close");

close.onclick = function (){
    box.style.display = "none";
}
var eye = document.querySelector("#modalWindow__form_password_eye");

eye.onmousedown = function () {
    var psw = document.querySelector("#modalWindow__form_password");
    psw.setAttribute('type', 'text');
}

eye.onmouseup = function () {
    var psw = document.querySelector("#modalWindow__form_password");
    psw.setAttribute('type', 'password');
}

