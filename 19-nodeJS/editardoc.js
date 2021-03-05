const fs=require('fs');

let nuevaData = "El txt fue actualizado"

fs.appendFile('archivo1.txt', nuevaData, (err) => {
    if (err) throw err;
    console.log('Archivo Creado Satisfactoriamente');
  });

console.log('última línea del programa');