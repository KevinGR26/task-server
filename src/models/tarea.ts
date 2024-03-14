import { DataTypes } from 'sequelize';
import db from '../db/connection';


const Tarea = db.define('Tarea', {
    name:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    done:{
        type: DataTypes.STRING
    },
    creador_id:{
        type: DataTypes.NUMBER
    },
    asignado_id:{
        type: DataTypes.NUMBER
    }
}, {
    createdAt: false,
    updatedAt: false
})

export default Tarea;