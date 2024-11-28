var display = document.getElementById("display");

function displayNumber(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = `${error}`;
    display.style.fontSize = "12px";
  }
}

// function backspace() {
//   display.value = display.value.slice(0, -1);
// }
