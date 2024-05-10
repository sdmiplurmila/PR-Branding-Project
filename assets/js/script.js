// Range Counting
var rangeInput = document.getElementById('rangeInput');
// Get current value display element
var currentValue = document.getElementById('current-value');

// Add event listener for input change
rangeInput.addEventListener('input', function() {
  // Update current value display
  currentValue.innerText = this.value + '%';
});