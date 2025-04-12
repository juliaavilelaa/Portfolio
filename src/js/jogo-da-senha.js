let secretCode = generateCode();
const attemptsList = document.getElementById("attempts-list");

function generateCode() {
  const digits = [];
  while (digits.length < 4) {
    const r = Math.floor(Math.random() * 10);
    if (!digits.includes(r)) digits.push(r);
  }
  return digits.join("");
}

function makeGuess() {
  const input = document.getElementById("guess-input");
  const guess = input.value.trim();

  if (!/^\d{4}$/.test(guess) || new Set(guess).size !== 4) {
    alert("Digite uma senha de 4 dígitos diferentes.");
    return;
  }

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (guess[i] === secretCode[i]) {
      bulls++;
    } else if (secretCode.includes(guess[i])) {
      cows++;
    }
  }

  const li = document.createElement("li");
  li.textContent = `${guess} — ${bulls} bulls, ${cows} cows`;
  attemptsList.prepend(li);

  input.value = "";
  input.focus();

  if (bulls === 4) {
    alert("Parabéns! Você descobriu a senha!");
  }
}

function revealCode() {
  alert(`A senha é: ${secretCode}`);
}
