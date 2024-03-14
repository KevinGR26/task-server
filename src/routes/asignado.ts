import { Router } from "express";
// import { deleteTarea, getTarea, getTareas, postTarea, updateTarea } from "../controllers/tarea";
// import { deleteCreador, getCreador, getCreadores, postCreador, updateCreador } from "../controllers/creador";
import { deleteAsignado, getAsignado, getAsignados, postAsignado, updateAsignado } from "../controllers/asignado";

const router = Router();

router.get('/', getAsignados)
router.get('/:id', getAsignado)
router.delete('/:id', deleteAsignado)
router.post('/', postAsignado)
router.put('/:id', updateAsignado)


export default router;