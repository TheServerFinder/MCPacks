// Defining variables 
var icons = getColumn("Daily Weather", "Icon");
var cities = getColumn("Daily Weather", "City");
var weather = getColumn("Daily Weather", "Condition Description");
var highTemp = getColumn("Daily Weather", "High Temperature");
var lowTemp = getColumn("Daily Weather", "Low Temperature");
var forecastNumber = getColumn("Daily Weather", "Forecast Number");
//---------------------
var filteredCities = [];
var filteredWeather = [];
var filteredLowTemp = [];
var filteredHighTemp = [];
var filteredIcon = [];
var randomIndex = randomNumber(0, filteredCities.length - 1);
// ForecastButton event handeler
onEvent("forecastButton", "click", function( ) {
  updateScreen(); // Calls update screen function
});
// Loops all the cities, weather, icons and high & low temps and filters ones with a forescastNumber of 2
for (var i = 0; i < cities.length; i++) {
  if (forecastNumber[i] == 2) {
    appendItem(filteredCities, cities[i]);
    appendItem(filteredWeather, weather[i]);
    appendItem(filteredLowTemp, lowTemp[i]);
    appendItem(filteredHighTemp, highTemp[i]);
    appendItem(filteredIcon, icons[i]);
  }
}
// Updates the text on the screen with the filtered cities, weather, icons and high & low temps
updateScreen();
function updateScreen() {
  randomIndex = randomNumber(0, filteredCities.length - 1);
  setProperty("cityOutput", "text", filteredCities[randomIndex]);
  setProperty("highTempOutput", "text", filteredHighTemp[randomIndex]);
  setProperty("lowTempOutput", "text", filteredLowTemp[randomIndex]);
  setProperty("conditionOutput", "text", filteredWeather[randomIndex]);
  setProperty("iconOutput", "image", filteredIcon[randomIndex]);
}
