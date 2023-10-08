function convertTemperature() {
  var temperature = parseFloat(document.getElementById("temperature").value);
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;

  if (from === "celsius" && to === "fahrenheit") {
    temperature = (temperature * 9/5) + 32;
  } else if (from === "celsius" && to === "kelvin") {
    temperature = temperature + 273.15;
  } else if (from === "fahrenheit" && to === "celsius") {
    temperature = (temperature - 32) * 5/9;
  } else if (from === "fahrenheit" && to === "kelvin") {
    temperature = (temperature - 32) * 5/9 + 273.15;
  } else if (from === "kelvin" && to === "celsius") {
    temperature = temperature - 273.15;
  } else if (from === "kelvin" && to === "fahrenheit") {
    temperature = (temperature - 273.15) * 9/5 + 32;
  }

  document.getElementById("convertedTemperature").innerHTML = "Converted Temperature: " + temperature.toFixed(2) + " " + to;
}