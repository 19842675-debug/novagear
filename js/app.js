function toggleMenu(){
  const nav = document.getElementById("nav");
  if(nav) nav.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.querySelector("#boton");
  const mensaje = document.querySelector("#mensaje");
  if (boton && mensaje) {
    boton.addEventListener("click", () => {
      mensaje.textContent = "¡JavaScript está funcionando correctamente!";
    });
  }

  const toggleJQ = document.querySelector("#toggleJQ");
  if (toggleJQ && window.jQuery) {
    $("#toggleJQ").on("click", function(){
      $("#cajaJQ").slideToggle(350);
    });
  }

  const quiz = document.querySelector("#quizForm");
  const resultado = document.querySelector("#resultado");
  if (quiz && resultado) {
    quiz.addEventListener("submit", function(e){
      e.preventDefault();
      const respuestas = {
        q1:"b", q2:"a", q3:"b", q4:"a", q5:"a",
        q6:"b", q7:"b", q8:"a", q9:"a", q10:"a"
      };
      let puntos = 0;
      let contestadas = 0;
      Object.keys(respuestas).forEach(q => {
        const seleccion = quiz.querySelector(`input[name="${q}"]:checked`);
        if(seleccion){
          contestadas++;
          if(seleccion.value === respuestas[q]) puntos++;
        }
      });
      const porcentaje = Math.round((puntos / 10) * 100);
      let mensaje = porcentaje >= 80 ? "¡Excelente trabajo!" :
                    porcentaje >= 60 ? "Buen trabajo, pero puedes repasar un poco más." :
                    "Te recomendamos volver a leer las páginas informativas.";
      resultado.innerHTML = `<strong>${puntos}/10</strong><p>${porcentaje}% de respuestas correctas.</p><p>${mensaje}</p><small>Contestaste ${contestadas} de 10 preguntas.</small>`;
      resultado.classList.add("show");
      resultado.scrollIntoView({behavior:"smooth", block:"center"});
    });
  }
});