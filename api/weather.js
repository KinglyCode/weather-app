const axios = require('axios')

require('dotenv').config({path: "./env"})

const apiUrl = "https://api.openweathermap.org/data/2.5/weather"

class Weather {
    getWeatherData = async (zipCode, tempMetric) => {
        let url = `${apiUrl}?zip=${zipCode}, us&appid=${process.env.WEATHER_KEY}&units=${tempMetric}`
        return (await axios(url)).data
    }
}

module.exports = Weather