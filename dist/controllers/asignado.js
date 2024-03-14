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
exports.updateAsignado = exports.postAsignado = exports.deleteAsignado = exports.getAsignado = exports.getAsignados = void 0;
const asignado_1 = __importDefault(require("../models/asignado"));
const getAsignados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listAsignados = yield asignado_1.default.findAll();
    res.json({
        listAsignados
    });
});
exports.getAsignados = getAsignados;
const getAsignado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const asignado = yield asignado_1.default.findByPk(id);
    if (asignado) {
        res.json(asignado);
    }
    else {
        res.status(404).json({
            msg: `No existe un asignado con el id: ${id}`
        });
    }
});
exports.getAsignado = getAsignado;
const deleteAsignado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const asignado = yield asignado_1.default.findByPk(id);
    if (!asignado) {
        res.status(404).json({
            msg: `No existe un asignado con el id: ${id}`
        });
    }
    else {
        yield asignado.destroy();
        res.json({
            msg: 'El asignado fue eliminado con exito'
        });
    }
});
exports.deleteAsignado = deleteAsignado;
const postAsignado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield asignado_1.default.create(body);
        res.json({
            msg: 'El Asignado fue agregado con exito.'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ups ocurrio un error, comuniquese con soporte'
        });
    }
});
exports.postAsignado = postAsignado;
const updateAsignado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const asignado = yield asignado_1.default.findByPk(id);
        if (asignado) {
            yield asignado.update(body);
            res.json({
                msg: 'El asignado fue actualizado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un asignado con el id ${id}`
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
exports.updateAsignado = updateAsignado;
