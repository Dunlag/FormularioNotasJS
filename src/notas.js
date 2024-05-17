let boton = document.querySelector("#enviar");
let borrar = document.querySelector('#borrar');
let resultado = document.querySelector("#resultado");
let resultadostyle = resultado.style;

function notafinal() {
  let nombre = document.querySelector("#nombre").value;
  let ejercicios = document.querySelector("#ejercicios").value;
  let teorico = document.querySelector("#teorico").value;
  let practico = document.querySelector("#practico").value;
  let proyecto = document.querySelector("#proyecto").value;

  // Calcula la nota
  let notaFinal =
    ejercicios * 0.2 + teorico * 0.2 + practico * 0.3 + proyecto * 0.3;
  if (notaFinal >= 5) {
    resultadostyle.background ="green";
    resultado.textContent =
      "Has aprobado " +
      nombre +
      " con una nota final de: " +
      notaFinal.toFixed(2); // Redondea la nota a 2 decimales
  } else {
    resultadostyle.background ="red"
    resultado.textContent =
      "Has suspendido " +
      nombre +
      " con una nota final de: " +
      notaFinal.toFixed(2); // Redondea la nota a 2 decimales
  }
}
function reset() {
  resultado.textContent = ""; // Limpiar el contenido del mensaje
}

boton.addEventListener("click", notafinal);
borrar.addEventListener("click", reset);
