function getPin() {
  let random = Math.random() * 10000;
  let pin = (random + "").split(".")[0];
  if (pin.length === 4) {
    return pin;
  } else {
    console.log("3 digit", pin);
    return getPin();
  }
}

function generatePin() {
  let getPinNumber = getPin();
  let getId = document.getElementById("pin");
  getId.value = getPinNumber;
}

// handle calculator button events
let buttonContainer = document.getElementById("digits-container");
buttonContainer.addEventListener("click", function (event) {
  let digit = event.target.innerText;
  if (isNaN(digit)) {
    if (digit === "C") {
      let typedInput = document.getElementById("typed-pin");
      typedInput.value = ''
    }
  } else {
    let typedInput = document.getElementById("typed-pin");
    typedInput.value = typedInput.value + digit;
  }
});

//verify pin
function verifyPin() {
  let pin = document.getElementById("pin").value;
  let typedPin = document.getElementById("typed-pin").value;

  if (pin === typedPin) {
    let correct = document.getElementById("correct-pin");
    correct.style.display = "block";
    let incorrect = document.getElementById("incorrect-pin");
    incorrect.style.display = "none";
  } else {
    let incorrect = document.getElementById("incorrect-pin");
    incorrect.style.display = "block";
    let correct = document.getElementById("correct-pin");
    correct.style.display = "none";
  }
}
