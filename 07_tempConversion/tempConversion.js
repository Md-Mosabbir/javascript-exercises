const convertToCelsius = function(f) {
  let Celsius = (f -32) * 5/9;

  return Math.round(Celsius * 10) / 10
};

const convertToFahrenheit = function(c) {

  let Fahrenheit = (c * 9/5 +32);
  return Math.round(Fahrenheit * 10) / 10

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
