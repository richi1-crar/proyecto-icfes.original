// --- SONIDO DE FONDO ---
const musica = new Audio("musica.mp3");
musica.loop = true;
musica.volume = 0.1;

// Solo iniciará después de un clic (por seguridad del navegador)
document.addEventListener("click", () => {
  if (musica.paused) musica.play();
}, { once: true });
// --- SONIDO DE BOTONES ---
const sonidoClick = new Audio("musica.boton.mp3");

function sonarClick() {
  sonidoClick.currentTime = 0; // reinicia el sonido
  sonidoClick.play();
}

// --- ACTIVAR SONIDO EN TODOS LOS BOTONES ---
document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll("button, .btn, .boton");
  botones.forEach(b => b.addEventListener("click", sonarClick));
});
