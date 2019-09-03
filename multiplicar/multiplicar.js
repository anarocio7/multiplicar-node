const fs = require('fs');

let listarTabla = (base, limite) => {
    for(let i = 0; i < limite; i++){
        console.log(`${base} * ${i} =`, base*i)
    }
}
console.log(listarTabla(2, 10))

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let data = ''

            for(let i = 0; i <= 10; i++) {
                data = (`${base} * ${i} =`, base*i);
            }
            fs.writeFile('tabla-2.txt', data, (err) => {
                if (err) 
                    reject (err);
                else
                    resolve(`tabla-${base}.txt`)
              });
        });
    }

module.exports = {
    crearArchivo,
    listarTabla
}