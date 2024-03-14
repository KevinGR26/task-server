import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import routesTarea from '../routes/tarea';
import routesCreador from '../routes/creador';
import routesAsignado from '../routes/asignado'
import db from '../db/connection'

class Server {
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middleware();
         this.routes();
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`)
        })
    }

    routes(){
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API Working'
            })
        })
        this.app.use('/api/tareas', routesTarea)
        this.app.use('/api/creadores', routesCreador)
        this.app.use('/api/asignados', routesAsignado)
    }

    middleware(){
        //Parseamos el Body
        this.app.use(express.json());

        // //Cors
        this.app.use(cors());
    }

    async dbConnect(){
// s
        try{
            await db.authenticate();
            console.log('base de datos conectada');

        }catch(error){

            console.log(error);
            console.log('Error al conectarse a la base de datos.')
        }

    }

}
export default Server;


