const axios = require('axios');

const getLocation = async direccion => {
  let encoudeUrl = encodeURI(direccion);
  let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encoudeUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);

  if(resp.data.status == "ZERO_RESULTS")
    throw new Error(`No hay resultados para la ubicación ${direccion}`);

  let location = resp.data.results[0];
  let coors = location.geometry.location;

  return {
    location: location.formatted_address,
    lat: coors.lat,
    lng: coors.lat
  }
}



/*  ANTES SE REALIZABA ASÍ, CON ECMACSCRIPT 7 SE RESUME A LA FUNCION GetLocation

let encoudeUrl = encodeURI(argv.direccion);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encoudeUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
  .then(result => {
    //console.log(JSON.stringify(result.data,undefined,2));
    //permite mostrar en la consola todo el contenido de los objetos y arreglos,
    //donde el segundo parametro es para emplazar cosas y el tercero el espaciado (sangria).
    let location = result.data.results[0];
    console.log(`direccion: ${location.formatted_address}`);
    let coors = location.geometry.location;
    console.log(`latitud: ${coors.lat}`);
    console.log(`longitud: ${coors.lng}`);
  })
  .catch(err => console.log('error: ',err));

  */

  module.exports = {
    getLocation
  }
