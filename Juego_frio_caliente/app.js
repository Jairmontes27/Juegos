const targetNumber = Math.floor(Math.random() * 100) + 1;
let remainingAttempts = 7;

document.getElementById("checkButton").addEventListener("click", function() {
  const guess = parseInt(document.getElementById("guess").value);
  const feedbackElement = document.getElementById("feedback");
  const remainingAttemptsElement = document.getElementById("remainingAttempts");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    feedbackElement.textContent = "Adivina el numero ganador del 1 al 100.";
    return;
  }

  remainingAttempts--;

  if (guess === targetNumber) {
    feedbackElement.textContent = "¡Felicidades! ¡Has adivinado el número ganador.";
    feedbackElement.style.color = "green";
    document.getElementById("checkButton").disabled = true;
  } else if (remainingAttempts === 0) {
    feedbackElement.textContent = `¡Perdiste! El número ganador era ${targetNumber}.`;
    feedbackElement.style.color = "red";
    document.getElementById("checkButton").disabled = true;
  } else {
    const difference = Math.abs(targetNumber - guess);
    let feedback = "";

    if (difference <= 10) {
      feedback = "Caliente";
    } else if (difference <= 20) {
      feedback = "Tibio";
    } else {
      feedback = "Frío";
    }

    feedbackElement.textContent = feedback;
    remainingAttemptsElement.textContent = remainingAttempts;
  }
});
