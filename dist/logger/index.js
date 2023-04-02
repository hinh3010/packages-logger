"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleLogger = void 0;
const pino_1 = __importDefault(require("pino"));
const pino_pretty_1 = __importDefault(require("pino-pretty"));
const dayjs_1 = __importDefault(require("dayjs"));
const stream = (0, pino_pretty_1.default)({
    colorize: true,
    levelFirst: true,
    translateTime: `'Time': ${(0, dayjs_1.default)().format()}`
});
exports.SimpleLogger = (0, pino_1.default)(stream);
