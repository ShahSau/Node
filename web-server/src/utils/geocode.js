const request = require("request");
const geocode = (location, callback) => {
  let loc = encodeURIComponent(location);
  const urlM = `https://api.mapbox.com/geocoding/v5/mapbox.places/${loc}.json?access_token=${process.env.geocode}`;

  request({ url: urlM, json: true }, (error, {body}) => {
    if (error) {
      callback("unable to connect", undefined);
    } else if (body.features.length === 0) {
      callback("please eneter a valid city name", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[0],
        longitude: body.features[0].center[1],
        location: body.features[0].text,
      });
    }
  });
};

module.exports = geocode;
