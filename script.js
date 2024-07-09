function convert() {
    // Get the input value and selected unit from the HTML elements
    const inputValue = parseFloat(document.getElementById("userInput").value);
    const conversionType = document.getElementById("unit").value;
    let result = 0;
  
    // Validate input: check if inputValue is a valid number
    if (isNaN(inputValue)) {
      alert("Please enter a valid number.");
      return; // Exit the function early if input is not valid
    }
  
    // Perform the conversion based on the selected unit
    if (conversionType === "milesToKm")  {
      result = inputValue * 1.60934; // Convert miles to kilometers
    } else {
      result = inputValue / 1.60934; // Convert kilometers to miles
    }
  
    // Round the result to two decimal places
    result = result.toFixed(2);
  
    // Update the result element with the calculated value
    document.getElementById("resultElement").innerHTML = result;
  }

function toggleDarkMode() {
  // Turns on/off Dark Mode
  document.body.classList.toggle('dark-mode');
}
