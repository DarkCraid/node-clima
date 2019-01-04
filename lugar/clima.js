const axios = require('axios');

const getClima = async (lat,lng) => {
  let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=b2f7a9843f88b343c2e22f95af240cdc`);

  //console.log(resp);
  return resp.data.main.temp;
}

module.exports = {
  getClima
}
