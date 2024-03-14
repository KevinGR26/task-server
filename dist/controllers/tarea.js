"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTarea = exports.postTarea = exports.deleteTarea = exports.getTarea = exports.getTareas = void 0;
const tarea_1 = __importDefault(require("../models/tarea"));
const getTareas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listTreas = yield tarea_1.default.findAll();
    res.json(listTreas);
});
exports.getTareas = getTareas;
const getTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tarea = yield tarea_1.default.findByPk(id);
    if (tarea) {
        res.json(tarea);
    }
    else {
        res.status(404).json({
            msg: `No existe un tarea con el id: ${id}`
        });
    }
});
exports.getTarea = getTarea;
const deleteTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tarea = yield tarea_1.default.findByPk(id);
    if (!tarea) {
        res.status(404).json({
            msg: `No existe un tarea con el id: ${id}`
        });
    }
    else {
        yield tarea.destroy();
        res.json({
            msg: 'El producto fue eliminado con exito'
        });
    }
});
exports.deleteTarea = deleteTarea;
const postTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield tarea_1.default.create(body);
        res.json({
            msg: 'El Tarea fue agregado con exito.'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ups ocurrionun error, comuniquese con soporte'
        });
    }
});
exports.postTarea = postTarea;
const updateTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const tarea = yield tarea_1.default.findByPk(id);
        if (tarea) {
            yield tarea.update(body);
            res.json({
                msg: 'El tarea fue actualizado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un tarea con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ups ocurrionun error, comuniquese con soporte'
        });
    }
});
exports.updateTarea = updateTarea;
