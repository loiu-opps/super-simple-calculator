const display = document.getElementById("display"); 


function appendToDisplay(input) {
  display.value += input; 
}

function clearDisplay() {
  display.value = ""; 
}

function calculate() {

  if (display.value === '6x9' || display.value === '6*9') {
    display.value = "tangina mo"; 
  } else {
    try {

      display.value = eval(display.value.replace(/x/g, '*').replace(/÷/g, '/'));
    } catch (error) {
      display.value = 'Error'; 
    }
  }
}


function removeLastCharacter() {
  display.value = display.value.slice(0, -1); 
}
