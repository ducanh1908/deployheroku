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
Object.defineProperty(exports, "__esModule", { value: true });
const book_model_1 = require("../schemas/book.model");
class BookController {
    constructor() {
        this.showListBook = (req, res) => __awaiter(this, void 0, void 0, function* () {
            // let query = req.query.page
            // let limit =  4;
            // let offset = 0;
            // let page = 1;
            // if(query) {
            //     page = +query;
            // }
            //     offset = (page -1) * limit;
            // let books = await Book.find().limit(limit).skip(offset);
            // let totalBook = await  Book.countDocuments({})
            // let totalPage = Math.ceil(totalBook/limit)
            let books = yield book_model_1.Book.find();
            res.render('book/list', {
                books: books,
                // totalPage : totalPage,
                // currentPage: page
            });
        });
        this.showFormCreate = (req, res) => {
            res.render('book/create');
        };
        this.createBook = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let bookNew = new book_model_1.Book(req.body);
            let bookList = yield bookNew.save();
            res.redirect(301, '/book/list');
        });
        this.deleteBook = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let idBook = req.params.id;
            let book = yield book_model_1.Book.findById({ _id: idBook });
            if (book) {
                yield book.remove();
                res.status(204).json();
            }
            else {
                res.status(404).json({
                    message: 'Not found'
                });
            }
        });
        this.showFromEdit = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let idBook = req.params.id;
            let book = yield book_model_1.Book.findOne({ _id: idBook });
            res.render('book/update', { book: book });
        });
        this.editBook = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let idBook = req.params.id;
            // let book = await Book.findOne({_id : idBook});
            let book = req.body;
            book.id = req.body.idBook;
            yield book_model_1.Book.updateOne(book);
            res.redirect(301, '/book/list');
        });
    }
}
exports.default = new BookController();
