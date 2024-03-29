"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tarea_1 = require("../controllers/tarea");
const router = (0, express_1.Router)();
router.get('/', tarea_1.getTareas);
router.get('/:id', tarea_1.getTarea);
router.delete('/:id', tarea_1.deleteTarea);
router.post('/', tarea_1.postTarea);
router.put('/:id', tarea_1.updateTarea);
exports.default = router;
