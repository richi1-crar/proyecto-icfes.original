// Crear el objeto de audio
const audio = new Audio('sonidos/sonido.mp3');
audio.loop = true; // Repite el audio en bucle

// Referencia al botón
const boton = document.getElementById('botonAudio');

// Función para encender o apagar el audio
function toggleAudio() {
  if (audio.paused) {
    audio.play()
      .then(() => {
        boton.textContent = '🔇 Apagar Audio';
        boton.classList.remove('apagado');
      })
      .catch(err => {
        console.warn('El navegador bloqueó la reproducción automática:', err);
      });
  } else {
    audio.pause();
    boton.textContent = '🔊 Encender Audio';
    boton.classList.add('apagado');
  }
}

// Intentar reproducir automáticamente al cargar la página
window.addEventListener('load', () => {
  audio.play()
    .then(() => {
      boton.textContent = '🔇 Apagar Audio';
      boton.classList.remove('apagado');
    })
    .catch(err => {
      console.warn('El navegador bloqueó la reproducción automática. Se activará con clic:', err);
      boton.textContent = '🔊 Encender Audio';
      boton.classList.add('apagado');
    });
});

// Evento de clic para encender/apagar
boton.addEventListener('click', toggleAudio);
