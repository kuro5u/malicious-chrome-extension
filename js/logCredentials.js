// Find the elements
const inputElement1 = document.getElementById('email');
const inputElement2 = document.querySelector('#pass');
const button = document.querySelector('#loginbutton');

// Create input event listeners
inputElement1.addEventListener('input', () => {
  const enteredText1 = event.target.value;
  //console.log(enteredText1);
});

inputElement2.addEventListener('input', () => {
  const enteredText2 = event.target.value;
  //console.log(enteredText2);
});

// Create click event listener
button.addEventListener('click', () => {
  // Get values
  const email = inputElement1.value;
  const password = inputElement2.value;
  // Log values
  console.log(email+":"+password);
});
