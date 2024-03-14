import { Request, Response } from "express";
import Asignado from "../models/asignado";


export const getAsignados = async (req: Request, res: Response) => {
    const listAsignados = await Asignado.findAll()

    res.json({
        listAsignados
    })
}

export const getAsignado = async (req: Request, res: Response) => {
    const {id}= req.params;
    const asignado = await Asignado.findByPk(id);

    if(asignado){
        res.json(asignado)
    } else{
        res.status(404).json({
            msg: `No existe un asignado con el id: ${id}`
        })
    }
}

export const deleteAsignado = async (req: Request, res: Response) => {
    const {id}= req.params;
    const asignado = await Asignado.findByPk(id);


    if(!asignado){
        res.status(404).json({
            msg: `No existe un asignado con el id: ${id}`
        })
    }else{
        await asignado.destroy();
        res.json({
            msg:'El asignado fue eliminado con exito'
        })
    }
}


export const postAsignado = async (req: Request, res: Response) => {

    const{body} = req;

    try{
        await Asignado.create(body)
            res.json({
            msg: 'El Asignado fue agregado con exito.'
        })

    }catch(error){
        console.log(error);
        res.json({
            msg: 'Ups ocurrio un error, comuniquese con soporte'
        })
    }
}


export const updateAsignado = async (req: Request, res: Response) => {
    const{body} = req;
    const{id} = req.params;

    try {
        const asignado = await Asignado.findByPk(id);
        if (asignado){
            await asignado.update(body);
            res.json({
                msg: 'El asignado fue actualizado con exito'
            })
        }else{
            res.status(404).json({
                msg:`No existe un asignado con el id ${id}`
            })
        }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ups ocurrionun error, comuniquese con soporte'
        })
    }

}