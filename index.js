
/* Mi ejercicio*/

// let numero = prompt("ingrese un número de su aula");

// if(numero <= 10 ) {
//   alert("Su aula esta en el PRIMER PISO");
// }
// else if (numero <= 20 && numero >= 11) {
//   alert("Su aula esta en el SEGUNDO PISO");
// }
// else if (numero <= 30 && numero >= 21) {
//   alert("Su aula esta en el TERCER PISO");
// }
// else if (numero >= 30) {
//   alert("Ingrese un número de aula correcto");
// }




for(let turno = 1; turno <= 15; turno++){
  let nombre = prompt("Ingrese su nombre y Apellido");
  let mensaje = `Turno #${turno} para: ${nombre}`;
  alert(mensaje);
}
alert("No hay disponibilidad, intente mañana a partir de las 9am");