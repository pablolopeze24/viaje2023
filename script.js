function updateTime() {
  const clock = document.querySelector('.clock');
  const clockH = document.querySelector('.clockH');
  const clockA = document.querySelector('.clockA');
  const clockV = document.querySelector('.clockV');

  let currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let date = currentTime.getDate()


  if (hours < 10) {
    hours = '0' + hours;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  if (date < 5) {
    var element = document.querySelector(".arg");
    element.classList.add("lugarVisitado");
  } 
  else if (date > 5 && date <= 13) {
    var element = document.querySelector(".haw");
    element.classList.add("lugarVisitado");
  }
  else if (date >= 14 && date <= 17) {
    var element = document.querySelector(".loa");
    element.classList.add("lugarVisitado");
  }
  else if (date > 17 && date <= 25) {
    var element = document.querySelector(".las");
    element.classList.add("lugarVisitado");
  }
  else {
    var element = document.querySelector(".arg");
    element.classList.add("lugarVisitado");
  };


  // Horario Argentina
  clock.querySelector('.hours').innerHTML = hours;
  clock.querySelector('.minutes').innerHTML = minutes;
  clock.querySelector('.seconds').innerHTML = seconds;

  // Horario Hawaii
  clockH.querySelector('.hoursH').innerHTML = hours -7;
  clockH.querySelector('.minutesH').innerHTML = minutes;
  clockH.querySelector('.secondsH').innerHTML = seconds;

  // Horario Los Angeles
  clockA.querySelector('.hoursA').innerHTML = hours -5;
  clockA.querySelector('.minutesA').innerHTML = minutes;
  clockA.querySelector('.secondsA').innerHTML = seconds;

  // Horario Las Vegas
  clockV.querySelector('.hoursV').innerHTML = hours -5;
  clockV.querySelector('.minutesV').innerHTML = minutes;
  clockV.querySelector('.secondsV').innerHTML = seconds;

}

setInterval(updateTime, 1000);

// myElemento.classList.add('nombreclase');


// Cuenta Regresiva

// Set the date we're counting down to
var countDownDate = new Date("March 26, 2023 6:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get the current time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Calculate days, hours, minutes and seconds left
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  // Resultado para Argentina
    let daysArg = days - 21;
    if (daysArg > 0) {
      document.getElementById("countdown").innerHTML = daysArg + " días ";
    } else {
      document.getElementById("countdown").innerHTML = "";
    }
  
    // Resultado para Hawaii
    let daysHaw = days - 20;
    if (daysHaw > 0) {
      document.getElementById("countdownH").innerHTML = daysHaw + " días ";
    } else {
      document.getElementById("countdownH").innerHTML = "";
    }
    //document.getElementById("countdownH").innerHTML = (days - 20) + " días ";

      // Resultado pala Los Angeles
    let daysLos = days - 12;
    if (daysLos > 0) {
      document.getElementById("countdownA").innerHTML = daysLos + " días ";
    } else {
      document.getElementById("countdownA").innerHTML = "";
    }
  //document.getElementById("countdownA").innerHTML = (days - 12) + " días";

    // Resultado para Las Vegas
    let daysLas = days - 9;
    if (daysLas > 0) {
      document.getElementById("countdownV").innerHTML = daysLas + " días ";
    } else {
      document.getElementById("countdownV").innerHTML = "";
    }
     //document.getElementById("countdownV").innerHTML = (days - 9) + " días";
  

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "";
  }
}, 1000);




