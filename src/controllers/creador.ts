import { Request, Response } from "express";
import Creador from "../models/creador";


export const getCreadores = async (req: Request, res: Response) => {
    const listCreadores = await Creador.findAll()

    res.json({
        listCreadores
    })
}

export const getCreador = async (req: Request, res: Response) => {
    const {id}= req.params;
    const creador = await Creador.findByPk(id);

    if(creador){
        res.json(creador)
    } else{
        res.status(404).json({
            msg: `No existe un creador con el id: ${id}`
        })
    }
}

export const deleteCreador = async (req: Request, res: Response) => {
    const {id}= req.params;
    const creador = await Creador.findByPk(id);


    if(!creador){
        res.status(404).json({
            msg: `No existe un creador con el id: ${id}`
        })
    }else{
        await creador.destroy();
        res.json({
            msg:'El creador fue eliminado con exito'
        })
    }
}


export const postCreador = async (req: Request, res: Response) => {

    const{body} = req;

    try{
        await Creador.create(body)
            res.json({
            msg: 'El Creador fue agregado con exito.'
        })

    }catch(error){
        console.log(error);
        res.json({
            msg: 'Ups ocurrio un error, comuniquese con soporte'
        })
    }
}


export const updateCreador = async (req: Request, res: Response) => {
    const{body} = req;
    const{id} = req.params;

    try {
        const creador = await Creador.findByPk(id);
        if (creador){
            await creador.update(body);
            res.json({
                msg: 'El creador fue actualizado con exito'
            })
        }else{
            res.status(404).json({
                msg:`No existe un creador con el id ${id}`
            })
        }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ups ocurrionun error, comuniquese con soporte'
        })
    }

}