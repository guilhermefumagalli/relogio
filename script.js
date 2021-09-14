const ponteiroSegundos = document.querySelector(".relogio__ponteiro__segundo");
const ponteiroMinutos = document.querySelector(".relogio__ponteiro__minuto");
const ponteiroHoras = document.querySelector(".relogio__ponteiro__hora");

function girarRelogio() {
  const data = new Date();
  const segundos = data.getSeconds();
  const minutos = data.getMinutes();
  const horas = data.getHours();

  const segundosEmGraus = (segundos / 60) * 360 + 90;
  const minutosEmGraus = (minutos / 60) * 360 + 90;
  const horasEmGraus = (horas / 12) * 360 + 90;

  ponteiroSegundos.style.transform = `translate(-97%, -50%) rotate(${segundosEmGraus}deg)`;
  ponteiroMinutos.style.transform = `translate(-97%, -50%) rotate(${minutosEmGraus}deg)`;
  ponteiroHoras.style.transform = `translate(-97%, -50%) rotate(${horasEmGraus}deg)`;
}

setInterval(girarRelogio, 1000);
