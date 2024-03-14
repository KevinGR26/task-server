import { Router } from "express";
// import { deleteTarea, getTarea, getTareas, postTarea, updateTarea } from "../controllers/tarea";
import { deleteCreador, getCreador, getCreadores, postCreador, updateCreador } from "../controllers/creador";

const router = Router();

router.get('/', getCreadores)
router.get('/:id', getCreador)
router.delete('/:id', deleteCreador)
router.post('/', postCreador)
router.put('/:id', updateCreador)


export default router;