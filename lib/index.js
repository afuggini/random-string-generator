"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var generate_1 = __importDefault(require("nanoid/generate"));
exports.alphanumeric = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
exports.default = (function (numberOfChars, allowedCharacters) {
    if (allowedCharacters === void 0) { allowedCharacters = exports.alphanumeric; }
    return generate_1.default(allowedCharacters, numberOfChars);
});
