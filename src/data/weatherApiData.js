import Clear from "../WeatherImage/Clear.jpg";
import Clouds from "../WeatherImage/Clouds.jpg";
import Rain from "../WeatherImage/Rain.jpg";
import Thunderstorm from "../WeatherImage/Thunderstorm.jpg";
import Snow from "../WeatherImage/Snow.jpg";
import Drizzle from "../WeatherImage/Drizzle.jpg";
import other from "../WeatherImage/other.jpg";

var data = {
  coord: {
    lon: 79.3333,
    lat: 11.5,
  },
  weather: [
    {
      id: 804,
      main: "other",
      description: "other",
      icon: "04d",
    },
  ],
  base: "stations",
  main: {
    temp: "Counting",
    feels_like: 35.65,
    temp_min: 32.96,
    temp_max: 32.96,
    pressure: 1010,
    humidity: 48,
    sea_level: 1010,
    grnd_level: 1007,
  },
  visibility: 10000,
  wind: {
    speed: 1.98,
    deg: 110,
    gust: 1.89,
  },
  clouds: {
    all: 88,
  },
  dt: 1650690400,
  sys: {
    country: "IN",
    sunrise: 1650673626,
    sunset: 1650718478,
  },
  timezone: 19800,
  id: 1253080,
  name: "Your heart",
  cod: 200,
};

function getApiUrl(cityName) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=2dd9224546c4447f93349a3eeca9ea88`;
}

var weatherImg = {
  Thunderstorm: Thunderstorm,
  Drizzle: Drizzle,
  Rain: Rain,
  Snow: Snow,
  Clear: Clear,
  Clouds: Clouds,
  other: other,
};

export default data;
export { weatherImg, getApiUrl   };
