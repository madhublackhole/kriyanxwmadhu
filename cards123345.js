
let totalSum = 0; // Variable to store the cumulative sum

document.getElementById('numberForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  const inputNumber = document.getElementById('inputNumber').value;
  const number = parseFloat(inputNumber);
  
  if (!isNaN(number)) {
    totalSum += number; // Add the new number to the total sum
    document.getElementById('result').textContent = `Total sum is: ${totalSum}`;
    document.getElementById('inputNumber').value = ''; // Clear the input field after processing
  } else {
    document.getElementById('result').textContent = 'Please enter a valid number!';
  }
});
