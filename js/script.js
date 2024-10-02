let valorElemento = document.querySelector(".cronometro p");
const btn = document.querySelector(".btn");
const btnPause = document.querySelector(".btnPause");
const btnContinue = document.querySelector(".btnContinue");
const btnVoltar = document.querySelector(".btnVoltar");
const audio = document.querySelector(".alarm");
let timeOut = 1000;
let valorMinuto = 25;
let valorSegundo = 0;
let isPaused = false;



btn.addEventListener("click", (evt) => {
  valorMinuto =24;
  valorSegundo = 59;
  continua()
  pararAlarm()
  contador();
});

function contador() {
    if(!isPaused){
        if (valorMinuto > -1) {
            setTimeout(() => {
            tratamentoDados();

            contador();
            }, timeOut);
        } else {
            tocarAlarm()
            tirarBotao()
            parou();
        }
    }
}

function tratamentoDados() {
  if (valorSegundo == -1) {
    return resetTime();
  }
  if (valorSegundo > -1) {
    if (valorMinuto.toString().length == 1) {
      return tratamentoDadosMinutos();
    }
    return tratamentoDadosSegundos();
  }
}

function tratamentoDadosSegundos() {
  switch (valorSegundo.toString().length) {
    case 2:
      valorElemento.innerHTML = `${valorMinuto}:${valorSegundo}`;
      return valorSegundo--;
    case 1:
      valorElemento.innerHTML = `${valorMinuto}:0${valorSegundo}`;
      return valorSegundo--;
  }
}

function tratamentoDadosMinutos() {
  switch (valorSegundo.toString().length) {
    case 2:
      valorElemento.innerHTML = `0${valorMinuto}:${valorSegundo}`;
      return valorSegundo--;
    case 1:
      valorElemento.innerHTML = `0${valorMinuto}:0${valorSegundo}`;
      return valorSegundo--;
  }
}

function resetTime() {
  valorMinuto = valorMinuto - 1;
  valorSegundo = 59;
  return valorMinuto, valorSegundo;
}


function parou() {
  isPaused = true;
}

function continua(){
    isPaused = false;
}


btnPause.addEventListener("click",((evt)=>{
    parou()

}))
btnContinue.addEventListener("click",((evt)=>{
    continueTimer(valorMinuto, valorSegundo);
}))
btnVoltar.addEventListener("click",((evt)=>{
    voltarTimer()
}))
function voltarTimer(){
    
    valorMinuto = 25;
    valorSegundo = 0;
    valorElemento.innerHTML = `${valorMinuto}:0${valorSegundo}`
    contador();

}


function continueTimer(valMin,ValSec){
    continua();
    valorMinuto = valMin;
    valorSegundo = ValSec
    contador();
}

function tocarAlarm(){
  audio.play()
}
function pararAlarm(){
  audio.pause();
}

function tirarBotao(){
  //função para deixar apenas o botão de voltar na tela.
  btnPause.classList.add("displayNone");
  btnContinue.classList.add("displayNone");
  btnVoltar.classList.remove("displayNone");
  
}