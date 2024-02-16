"use strict";

class Weather {
  constructor(temperature, precipitation, description) {
    this.temperature = temperature;
    this.precipitation = precipitation;
    this.description = description;
  }

  displayWeather() {
    console.log(`Temperature: ${this.temperature}°C`);
    console.log(`Precipitation: ${this.precipitation}`);
    console.log(`Description: ${this.description}`);
  }
}

class DayWeather extends Weather {
  constructor(temperature, precipitation, description, dayOfWeek, alerts) {
    super(temperature, precipitation, description);
    this.dayOfWeek = dayOfWeek;
    this.alerts = alerts;
  }

  displayWeather() {
    super.displayWeather(); // Call the displayWeather method from the parent class
    console.log(`Day of the Week: ${this.dayOfWeek}`);
    console.log(`Alerts: ${this.alerts}`);
  }
}

// Example usage:

// Creating an instance of the Weather class
const generalWeather = new Weather(25, "No rain", "Sunny");

// Creating an instance of the DayWeather class
const specificDayWeather = new DayWeather(
  20,
  "Light rain",
  "Cloudy",
  "Monday",
  "No alerts"
);

// Displaying the weather information for both instances
console.log("General Weather Information:");
generalWeather.displayWeather();

console.log("\nSpecific Day Weather Information:");
specificDayWeather.displayWeather();
