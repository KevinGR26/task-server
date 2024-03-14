import { Request, Response } from "express";
import Tarea from '../models/tarea';

export const getTareas = async (req: Request, res: Response) => {
    const listTreas = await Tarea.findAll()

    res.json(
        listTreas)
}

export const getTarea = async (req: Request, res: Response) => {
    const {id}= req.params;
    const tarea = await Tarea.findByPk(id);

    if(tarea){
        res.json(tarea)
    } else{
        res.status(404).json({
            msg: `No existe un tarea con el id: ${id}`
        })
    }
}

export const deleteTarea = async (req: Request, res: Response) => {
    const {id}= req.params;
    const tarea = await Tarea.findByPk(id);


    if(!tarea){
        res.status(404).json({
            msg: `No existe un tarea con el id: ${id}`
        })
    }else{
        await tarea.destroy();
        res.json({
            msg:'El producto fue eliminado con exito'
        })
    }
}


export const postTarea = async (req: Request, res: Response) => {

    const{body} = req;

    try{
        await Tarea.create(body)
            res.json({
            msg: 'El Tarea fue agregado con exito.'
        })

    }catch(error){
        console.log(error);
        res.json({
            msg: 'Ups ocurrionun error, comuniquese con soporte'
        })
    }
}


export const updateTarea = async (req: Request, res: Response) => {
    const{body} = req;
    const{id} = req.params;

    try {
        const tarea = await Tarea.findByPk(id);
        if (tarea){
            await tarea.update(body);
            res.json({
                msg: 'El tarea fue actualizado con exito'
            })
        }else{
            res.status(404).json({
                msg:`No existe un tarea con el id ${id}`
            })
        }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ups ocurrionun error, comuniquese con soporte'
        })
    }

}