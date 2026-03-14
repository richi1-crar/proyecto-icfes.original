document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('startScreen').classList.add('hidden');
  document.getElementById('level1').classList.remove('hidden');
});

const options = document.querySelectorAll('.option');
const feedback = document.getElementById('feedback');
const soundCorrect = document.getElementById('soundCorrect');
const soundWrong = document.getElementById('soundWrong');
const nextBtn = document.getElementById('nextBtn');

options.forEach(opt => {
  opt.addEventListener('click', () => {
    const answer = opt.getAttribute('data-answer');
    if (answer === 'B') {
      feedback.textContent = '✅ ¡Muy bien! Esa es una metáfora.';
      soundCorrect.play();
      // deshabilitar otras opciones
      options.forEach(o => o.disabled = true);
      nextBtn.classList.remove('hidden');
    } else {
      feedback.textContent = '❌ No es correcto. Intenta de nuevo.';
      soundWrong.play();
      opt.disabled = true;
    }
  });
});

nextBtn.addEventListener('click', () => {
  // Aquí puedes poner el código para pasar al Nivel 2
  feedback.textContent = '';
  options.forEach(o => { 
    o.disabled = false; 
  });
  nextBtn.classList.add('hidden');
  // Cambiar pregunta o nivel...
  // Para ejemplo, volver al inicio:
  document.getElementById('level1').classList.add('hidden');
  document.getElementById('startScreen').classList.remove('hidden');
});
