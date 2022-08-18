
const ProductosDAO = require ('./productos-dao-mongo');
const PersonaDaoMem = require( './productos-dao-mem');

const opcion = process.argv[ 2 ] || 'Mongo';

let dao;

switch (opcion) {
    case 'Mem':
            dao = new PersonaDaoMem()
            await dao.init()
        break
    default:
        dao = new ProductosDAO()
}

 class ProductosDaoFactory {
    static getDao() {
        return dao
    }
}

module.exports = ProductosDaoFactory