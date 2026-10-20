// n! = 1 x 2 x 3 x ... x n   (ejemplo: 4! = 1 x 2 x 3 x 4 = 24)

const MAX_NUMBER = 1000;      
const MAX_DIGITS_SHOWN = 30;   
const EDGE_DIGITS = 10;       

function factorial(n) {
  let result = 1n;

  for (let i = 1n; i <= BigInt(n); i++) {
    result *= i;
  }

  return result;
}

function formatResult(value) {
  const text = value.toString();

  if (text.length <= MAX_DIGITS_SHOWN) {
    return text;
  }

  const start = text.slice(0, EDGE_DIGITS);
  const end = text.slice(-EDGE_DIGITS);

  return `${start}...${end} (${text.length} digits)`;
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
    resultText.textContent = "Numero invalido).";
    return;
  }

  if (number > MAX_NUMBER) {
    resultText.classList.add("error");
    resultText.textContent = `Numero muy largo introduce un numero con maximo ${MAX_NUMBER}.`;
    return;
  }

  resultText.textContent = `${number}! = ${formatResult(factorial(number))}`;
}

// Calculate when clicking the button
calculateBtn.addEventListener("click", calculate);

// Also calculate when pressing Enter inside the input
numberInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    calculate();
  }
});