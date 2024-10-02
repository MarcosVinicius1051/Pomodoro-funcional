const btnPcStart = document.querySelector(".btn");
const btnPcAllOptions = [
  ...document.querySelectorAll(".buttonsPosStart button"),
];
const btnPcContinue = document.querySelector(".btnContinue");
const btnPcPause = document.querySelector(".btnPause");
const btnPcVoltar = document.querySelector(".btnVoltar");
let elementoTexto = document.querySelector(".cronometro p")

btnPcStart.addEventListener("mouseenter", (evt) => {
  btnPcStart.classList.add("hoverButtomPc");
});

btnPcStart.addEventListener("mouseleave", (evt) => {
  btnPcStart.classList.remove("hoverButtomPc");
  btnPcStart.classList.add("btn");
});

btnPcStart.addEventListener("click", (evt) => {
  btnPcStart.classList.add("displayNone");
  btnPcAllOptions.map((el) => {
    el.classList.remove("displayNone");
  });
  btnPcContinue.classList.add("displayNone");
  btnPcVoltar.classList.add("displayNone");
});

btnPcAllOptions.map((el) => {
  el.addEventListener("mouseenter", (evt) => {
    el.classList.add("hoverButtomPc");
  });
});

btnPcAllOptions.map((el) => {
  el.addEventListener("mouseleave", (evt) => {
    el.classList.remove("hoverButtomPc");
    el.classList.add("btnOptions");
  });
});

btnPcPause.addEventListener("click", (evt) => {
  btnPcPause.classList.add("displayNone");
  btnPcContinue.classList.remove("displayNone");
  btnPcVoltar.classList.remove("displayNone");
});

btnPcContinue.addEventListener("click", (evt) => {
  btnPcPause.classList.remove("displayNone");
  btnPcContinue.classList.add("displayNone");
  btnPcVoltar.classList.add("displayNone");
});

btnPcVoltar.addEventListener("click",((evt)=>{
  btnPcAllOptions.map((el)=>{
    el.classList.add("displayNone");
  })
  btnPcStart.classList.remove("displayNone");
  
}));


