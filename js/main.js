//Variables
const resultadoHTML = document.querySelector("#time");
const fechaActualizadaHTML = document.querySelector("#date");
const body = document.querySelector("body");

const tiempoRepeticion = 1000;

//Funciones
function forzarNumeros(numero) {
  console.log(numero);
  if (numero <= 9) {
    return `0${numero}`;
  } else {
    return numero;
  }
}

function obtenerHoraActual() {
  const miDate = new Date();
  const horaActual = forzarNumeros(miDate.getHours());
  const minutosActuales = forzarNumeros(miDate.getMinutes());
  const segundosAcuales = forzarNumeros(miDate.getSeconds());
  const formateo = `${horaActual}:${minutosActuales}:${segundosAcuales}`;
  return formateo;
}

function refrescarHora() {
  const hora = obtenerHoraActual();
  resultadoHTML.textContent = hora;
}

function obtenerFechaActual() {
  //Obtener fecha actual
  const fechaActual = new Date();
  //Obtener el número del día(del 1 al 31)
  const numeroDeDia = fechaActual.getDate();
  //Obtener el día de la semana (del 0 al 6, donde 0 es domingo)
  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const diaSemana = diasSemana[fechaActual.getDay()];
  //Obtener el mes (del 0 al 11, donde 0 es Enero)
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const mes = meses[fechaActual.getMonth()];
  const year = fechaActual.getFullYear();
  const mostrarFecha = `${diaSemana} ${numeroDeDia} ${mes} ${year}`;
  return mostrarFecha;
}

function mostrarFechaActual() {
  const fecha = obtenerFechaActual();
  fechaActualizadaHTML.textContent = fecha;
}
//Eventos

//Inicio

refrescarHora();
setInterval(refrescarHora, tiempoRepeticion);

mostrarFechaActual();
