const argv = require('./config/yargs').argv;
         
const {
    crearArchivo,
    listarTabla
} = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;
    case 'crear':
            crearArchivo(base)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(err => err)
        break;
    default:
        console.log('Comando no reconocido')

}

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];


