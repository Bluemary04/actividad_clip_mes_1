(function () {
  'use strict';
  window.addEventListener('load', function () {
    var forms = document.getElementsByClassName('needs-validation')

    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    });
  }, false)
})()

let intentos = 4
document.getElementById('game_btn').addEventListener('click', () => {
  let userAnswer = document.getElementById('answer').value.toLowerCase().trim()
  let answer = 'el viaje de chihiro'
  let acerto = false
  console.log(answer)

  intentos--
  console.log(userAnswer)
  if (userAnswer == answer) {
    const winAlert = document.querySelector('.win_alert')
    document.querySelector('.clue_1').style.display = 'none'
    document.querySelector('.clue_2').style.display = 'none'
    winAlert.classList.add('alert')
    winAlert.classList.add('alert-success')
    winAlert.innerHTML = ' <strong>¡Acertaste!</strong> Hacé click <a href="movies.html" class="alert-link">Acá</a> para ver nuestro top 10.'
    document.getElementById('game_btn').disabled = true;
    acerto = true
  } else if (intentos == 3 && userAnswer !== answer) {
    document.querySelector('.intentos').innerHTML = `Tenés: ${intentos} intentos`
  } else if (intentos == 2 && userAnswer !== answer) {
    document.querySelector('.clue_1').style.display = 'flex'
    document.querySelector('.intentos').innerHTML = `Tenés: ${intentos} intentos`
  } else if (intentos == 1 && userAnswer !== answer) {
    document.querySelector('.clue_1').style.display = 'none'
    document.querySelector('.clue_2').style.display = 'flex'
    document.querySelector('.intentos').innerHTML = `Tenés: ${intentos} intentos`
  } else if (intentos == 0 && userAnswer !== answer) {
    document.querySelector('.intentos').innerHTML = `Tenés: ${intentos} intentos`
    document.querySelector('.clue_2').style.display = 'none'
    const loseAlert = document.querySelector('.lose_alert')
    loseAlert.classList.add('alert')
    loseAlert.classList.add('alert-warning')
    loseAlert.innerHTML = ' <strong>Ups, no acertaste...</strong> Nuestra peli favorita es: El viaje de Chihiro.</br> Hacé click <a href="movies.html" class="alert-link">Acá</a> para ver nuestro top 10.'
    document.getElementById('game_btn').disabled = true;
  }

})

