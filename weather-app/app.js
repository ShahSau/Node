const request = require("request");

let lat;
let long;
//mapbox
const urlM =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/helsinki.json?access_token=pk.eyJ1Ijoic2hhaHNhdSIsImEiOiJja3hxOHpsY2YwMmxnMnhwYzY5c3Q3NWYxIn0.LISt63xVy5VHbUrfyOzbmQ";
request({ url: urlM, json: true }, (error, response) => {
    try{
        let data = response.body.features[0].center;
  lat = data[1]
  long = data[0]
  console.log(lat,long)
    }catch(err){
        if(response.body.features.length === 0){
            console.log('please check the city name')
        }else{
            console.log(err.message)
        }
    }
});


//weather api
// const url =
//   "http://api.weatherstack.com/current?access_key=77fff55eadc6e9409f192a0eeb50258f&query=34.0544,-118.2439&units=m"; // 
// request({ url, json: true }, (error, response) => {
//   try {
//     //console.log(response.body);
//     console.log(
//       `this is currenty ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out`
//     );
//   } catch (error) {
//     if (response.body.error) {
//       console.log(response.body.error.info);
//     } else {
//       console.log(error.message);
//     }
//   }
// });
