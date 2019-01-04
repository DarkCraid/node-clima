const argv = require('yargs').options({
  direccion: {
    alias:'d',
    desc:'Lugar de donde se quiera el clima',
    demand:true
  }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./lugar/clima');

let getInfo = async (direccion) => {
  try{
    let location = await lugar.getLocation(direccion);
    let temp = await clima.getClima(location.lat,location.lng);

    return `El clima en ${location.location} es: ${temp}`;
  }catch(e){
    return `No hay resultados para la ubicación ${direccion}`;
  }
}

getInfo(argv.direccion)
  .then(resp => console.log(resp))
  .catch(e => console.log(e));

/*
lugar.getLocation(argv.direccion)
  .then(resp => console.log(resp))
  .catch(err => console.log(err));


clima.getClima(23.2494148,23.2494148).then(resp => console.log(resp)).catch(e => console.log(e));
*/
