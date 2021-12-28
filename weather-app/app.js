const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const city = process.argv[2]
if(!city){
    return console.log('please provide an address')
}
geocode(city, (error, {latitude, longitude, location}) => {
  if (error) {
    return console.log(error);
  }
  
  forecast(latitude, longitude, (error, forecastdata) => {
    if (error) {
      return console.log(error);
    }
    console.log(location)
    console.log(forecastdata)
  });
});
