"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Asignado = connection_1.default.define('asignado', {
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.NUMBER
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    area: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Asignado;
