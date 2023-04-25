// Temperature degrees conversions of Fahrenheit, Celsius, Kelvin

function celsiusToFahrenheit (temperature) {
  return   (temperature * 9/5) + 32;
}

function fahrenheitToCelcius (temperature) {
  return  (temperature - 32) * 5/9;
}

function kelvinToCelcius (temperature) {
  return  (temperature - 273.15);
}

function celsiusToKelvin (temperature) {
  return  (temperature + 273.15);
}

function kelvinToFahrenheit (temperature) {
  return  celsiusToFahrenheit (kelvinToCelcius (temperature));
}

function fahrenheitToKelvin (temperature) {
  return  celsiusToKelvin (fahrenheitToCelcius (temperature));
}

function convertToStandardUnit (temperature,sourceUnit) {

  switch (sourceUnit) {
    case "celsius" : return temperature;

    case "fahrenheit" : return fahrenheitToCelcius (temperature);

    case "kelvin" : return kelvinToCelcius (temperature);
  }
}

function convertStandardToTarget (temperature,targetUnit) {

  switch (targetUnit) {
    case "celsius" : return temperature;

    case "fahrenheit" : return celsiusToFahrenheit(temperature);

    case "kelvin" : return celsiusToKelvin(temperature);
  }
}

function temperatureConverter (temperature, sourceUnit, targetUnit) {
  let temperatureInCelsius = convertToStandardUnit(temperature, sourceUnit);

  return convertStandardToTarget(temperatureInCelsius, targetUnit);
}

test(" TEMPERATURE_CONVERTER ", temperatureConverter(100, "celsius", "fahrenheit"), 212);
test(" TEMPERATURE_CONVERTER ", temperatureConverter(32, "fahrenheit", "celsius"), 0);

test(" TEMPERATURE_CONVERTER ", 12, 23);




/*
-----------------------------------------Testing-------------------------------------------------
 */

function test (programName, programOutput, actualOutput, testDescription) {

  const  result = (actualOutput == programOutput) ? " ✅ " : " ❌ " ;

  console.log(result + " " + programName + "Actual : " + actualOutput + " Expected : " + programOutput + "....." + testDescription);
}
