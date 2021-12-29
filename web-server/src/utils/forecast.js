const request = require("request");

const forecast = (lat,long,callback)=>{
    const url =
   `http://api.weatherstack.com/current?access_key=${process.env.forecast}&query=${long},${lat}&units=m`; 
   const map = request({ url, json: true }, (error, {body}) => {
       if(error){
           callback("unable to connect", undefined)
       }else if(body.error){
           callback(body.error.info, undefined)
       }else{
           callback(undefined, `it is currently ${body.current.temperature} with real feel ${body.current.feelslike}. there is ${body.current.precip} % chance of rain`)
       }
   })
}






module.exports = forecast