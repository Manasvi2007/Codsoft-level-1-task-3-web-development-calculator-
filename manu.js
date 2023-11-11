let displayValue = "";
let history = [];

function appendValue(value) {
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = "";
  history = [];
  updateDisplay();
  updateHistory();
}

function clearEntry() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function cut() {
  history.push(displayValue);
  displayValue = "";
  updateDisplay();
  updateHistory();
}

function calculate() {
  try {
    history.push(displayValue + "=" + eval(displayValue));
    displayValue = eval(displayValue).toString();
    updateDisplay();
    updateHistory();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById("display").value = displayValue;
}

function updateHistory() {
  const historyElement = document.getElementById("history");
  historyElement.innerHTML = "History:<br>" + history.join("<br>");
}
