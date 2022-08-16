import { Router } from "express";
import multer from "multer";
import BookController from "../controller/book.controller";
const upload = multer();

export const bookRouters = Router();

bookRouters.get('/book/list',BookController.showListBook);
bookRouters.get('/book/create', BookController.showFormCreate);
bookRouters.post('/book/create', BookController.createBook);
bookRouters.delete('/books/:id', BookController.deleteBook);
bookRouters.get('/book/edit/:id',BookController.showFromEdit)
bookRouters.post('/book/edit/:id',BookController.editBook)
