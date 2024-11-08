import "./style.css";

// Creo función principal
function randomCard() {
  // Asigno variables
  let centerNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let icon = ["♦", "♥", "♠", "♣"];

  // Asigno tamaño de las cartas para que se reinicie a su posicion inicial una vez generada
  let card = document.querySelector(".full-card");
  card.style.width = "280px";
  card.style.height = "400px";

  // Randomizo variables
  let randomCenterNumber =
    centerNumber[Math.floor(Math.random() * centerNumber.length)];
  let randomIcon = icon[Math.floor(Math.random() * icon.length)];

  // Coloco variables randomizadas en el DOM
  document.querySelector(".center-number").innerHTML = randomCenterNumber;
  document.querySelector(".top-icon").innerHTML = randomIcon;
  document.querySelector(".bottom-icon").innerHTML = randomIcon;

  // Pongo estilo en iconos
  if (randomIcon === "♥" || randomIcon === "♦") {
    document.querySelector(".top-icon").style.color = "red";
    document.querySelector(".bottom-icon").style.color = "red";
  } else {
    document.querySelector(".top-icon").style.color = "black";
    document.querySelector(".bottom-icon").style.color = "black";
  }

  // Pongo estilos al AS, y lo devuelvo a negro si no cumple condicion
  if (randomCenterNumber === "A") {
    document.querySelector(".center-number").style.color = "red";
  } else {
    document.querySelector(".center-number").style.color = "black";
  }
}

// Función para cambiar el tamaño de la carta basado en los inputs
function resizeCard() {
  let width = document.getElementById("width").value || 280; // Valor por defecto 280 si no se ingresa nada
  let height = document.getElementById("height").value || 400; // Valor por defecto 400 si no se ingresa nada

  let card = document.querySelector(".full-card");
  card.style.width = `${width}px`;
  card.style.height = `${height}px`;
}

// Temporizador que cambia la carta cada 10 segundos (10000ms)
function generadorAutomaticoCartas() {
  setInterval(randomCard, 10000);
}

// Hacer que todo salga una vez cargado
window.onload = function() {
  randomCard();
  document.getElementById("btn").addEventListener("click", randomCard);
  document.getElementById("width").addEventListener("input", resizeCard);
  document.getElementById("height").addEventListener("input", resizeCard);
  generadorAutomaticoCartas();
};
