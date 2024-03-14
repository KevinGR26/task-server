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
exports.updateCreador = exports.postCreador = exports.deleteCreador = exports.getCreador = exports.getCreadores = void 0;
const creador_1 = __importDefault(require("../models/creador"));
const getCreadores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listCreadores = yield creador_1.default.findAll();
    res.json({
        listCreadores
    });
});
exports.getCreadores = getCreadores;
const getCreador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const creador = yield creador_1.default.findByPk(id);
    if (creador) {
        res.json(creador);
    }
    else {
        res.status(404).json({
            msg: `No existe un creador con el id: ${id}`
        });
    }
});
exports.getCreador = getCreador;
const deleteCreador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const creador = yield creador_1.default.findByPk(id);
    if (!creador) {
        res.status(404).json({
            msg: `No existe un creador con el id: ${id}`
        });
    }
    else {
        yield creador.destroy();
        res.json({
            msg: 'El creador fue eliminado con exito'
        });
    }
});
exports.deleteCreador = deleteCreador;
const postCreador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield creador_1.default.create(body);
        res.json({
            msg: 'El Creador fue agregado con exito.'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ups ocurrio un error, comuniquese con soporte'
        });
    }
});
exports.postCreador = postCreador;
const updateCreador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const creador = yield creador_1.default.findByPk(id);
        if (creador) {
            yield creador.update(body);
            res.json({
                msg: 'El creador fue actualizado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un creador con el id ${id}`
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
exports.updateCreador = updateCreador;
