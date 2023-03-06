// Find the elements
const inputElement1 = document.querySelector('input[name*="email"], input[type*="email"], input[name*="userid"]');
const inputElement2 = document.querySelector('input[name*="pass"], input[type*="pass"]');
const button = document.querySelector('button, input[id*="btnLogin"]');

// For debugging
console.log(button);

// Create input event listeners
inputElement1.addEventListener('input', () => {
  // For debugging
  const enteredText1 = event.target.value;
  console.log(enteredText1);
});

inputElement2.addEventListener('input', () => {
  // For debugging
  const enteredText2 = event.target.value;
  console.log(enteredText2);
});

// Create click event listener
button.addEventListener('click', () => {
  // Get values
  const email = inputElement1.value;
  const password = inputElement2.value;
  // Log values
  console.log(email+":"+password);
});
