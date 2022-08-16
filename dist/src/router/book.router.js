"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouters = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const book_controller_1 = __importDefault(require("../controller/book.controller"));
const upload = (0, multer_1.default)();
exports.bookRouters = (0, express_1.Router)();
exports.bookRouters.get('/book/list', book_controller_1.default.showListBook);
exports.bookRouters.get('/book/create', book_controller_1.default.showFormCreate);
exports.bookRouters.post('/book/create', book_controller_1.default.createBook);
exports.bookRouters.delete('/books/:id', book_controller_1.default.deleteBook);
exports.bookRouters.get('/book/edit/:id', book_controller_1.default.showFromEdit);
exports.bookRouters.post('/book/edit/:id', book_controller_1.default.editBook);
