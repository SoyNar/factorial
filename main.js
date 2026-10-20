// n! = 1 x 2 x 3 x ... x n   (ejemplo: 4! = 1 x 2 x 3 x 4 = 24)

function factorial(n) {
  let result = 1n;

  for (let i = 1n; i <= BigInt(n); i++) {
    result *= i;
  }

  return result; // 0! = 1 by definition
}

const numberInput = document.getElementById("numberInput");
const calculateBtn = document.getElementById("calculateBtn");
const resultText = document.getElementById("result");

function calculate() {
  const value = numberInput.value;
  const number = Number(value);

  resultText.classList.remove("error");

  if (value.trim() === "" || !Number.isInteger(number) || number < 0) {
    resultText.classList.add("error");
    resultText.textContent = "numero no valido).";
    return;
  }

  resultText.textContent = `${number}! = ${factorial(number)}`;
}

// Calculate when clicking the button
calculateBtn.addEventListener("click", calculate);

// Also calculate when pressing Enter inside the input
numberInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    calculate();
  }
});