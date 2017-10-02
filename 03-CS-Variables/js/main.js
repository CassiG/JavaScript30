// Note: This querySelectorAll only creates a node list, not an array.
// If you want the ability to be able to work with the data like an array
// there are ways to convert it after you collect the data.

const inputs = document.querySelectorAll('.controls input');

// This is whatever you're running it against - so in this case this = the inputs we're iterating over
// dataset is a javascript function that checks for anything with a data-

function handleUpdate() {
  const dataSize = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + dataSize)
}

// Iterate over all the inputs on the page (the sliders and the color changer)
// When you are on a node, listen for a change (when the slider is moved or new color is picked)
// Also listen for a mouse move so you can track the sliding motion of the slider
// Execute the handleUpdate function (first test with a console log)

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
