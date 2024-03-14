import { Sequelize } from "sequelize";


const sequelize = new Sequelize('tareas_app', 'root', 'CR7thebestSI26', {
    host: 'localhost',
    dialect: 'mysql'
}) 


export default sequelize;