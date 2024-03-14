import { DataTypes } from 'sequelize';
import db from '../db/connection';


const Creador = db.define('creador', {
    id:{
        primaryKey: true,
        type: DataTypes.NUMBER
    },
    name:{
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
})
// kk

export default Creador;