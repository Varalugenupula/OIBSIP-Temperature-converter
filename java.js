function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var unit = document.getElementById("unitSelect").value;
    var resultElement = document.getElementById("result");
    var convertedTemperature;
  
    // Validate input as a number
    if (isNaN(temperatureInput)) {
      resultElement.innerText = "Please enter a valid number.";
      return;
    }
  
    // Convert temperature based on selected unit
    if (unit === "celsius") {
      convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
      resultElement.innerText = convertedTemperature.toFixed(2) + " °F";
    } else if (unit === "fahrenheit") {
      convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
      resultElement.innerText = convertedTemperature.toFixed(2) + " °C";
    } else if (unit === "kelvin") {
      convertedTemperature = parseFloat(temperatureInput) - 273.15;
      resultElement.innerText = convertedTemperature.toFixed(2) + " °C";
    }
  }