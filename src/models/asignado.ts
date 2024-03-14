import { DataTypes } from 'sequelize';
import db from '../db/connection';


const Asignado = db.define('asignado', {
    id:{
        primaryKey: true,
        type: DataTypes.NUMBER
    },
    name:{
        type: DataTypes.STRING
    },
    area:{
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
})

export default Asignado;