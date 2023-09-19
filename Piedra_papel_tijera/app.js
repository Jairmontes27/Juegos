const choices = document.querySelectorAll(".choice");
const resultDiv = document.getElementById("result");

choices.forEach(choice => {
  choice.addEventListener("click", function () {
    const playerChoice = choice.id;
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    resultDiv.textContent = `Tú elegiste ${playerChoice}. La computadora eligió ${computerChoice}. ${result}`;
  });
});

function getComputerChoice() {
  const choices = ["piedra", "papel", "tijera"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "¡Es un empate!";
  } else if (
    (playerChoice === "piedra" && computerChoice === "tijera") ||
    (playerChoice === "papel" && computerChoice === "piedra") ||
    (playerChoice === "tijera" && computerChoice === "papel")
  ) {
    return "¡Ganaste!";
  } else {
    return "¡Perdiste! Intenta de nuevo.";
  }
}