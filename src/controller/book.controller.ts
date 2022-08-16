import { Request,Response } from "express";
import { Book } from "../schemas/book.model";

class BookController {
    showListBook = async(req:Request, res :Response)=> {
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
        let books = await Book.find();

        res.render('book/list', {
            books : books,
            // totalPage : totalPage,
            // currentPage: page
        })

    }
    showFormCreate = (req:Request, res: Response)=>{
        res.render('book/create');
    }
    createBook = async (req: Request, res: Response)=>{
        let bookNew  = new Book(req.body);
        let bookList = await bookNew.save()
        res.redirect(301,'/book/list');
    }
    deleteBook = async (req:Request, res: Response)=>{
        let idBook = req.params.id
        let book = await Book.findById({_id : idBook})
        if(book) {
            await book.remove();
            res.status(204).json();
        }
        else {
            res.status(404).json({
                message : 'Not found'
            })
        }
    }
    showFromEdit = async(req:Request, res :Response)=> {
        let idBook = req.params.id
        let book = await Book.findOne({_id : idBook});
        res.render('book/update', {book : book})
    }
    editBook = async(req:Request, res :Response)=> {
        let idBook = req.params.id
        // let book = await Book.findOne({_id : idBook});
        let book = req.body
        book.id = req.body.idBook
        await Book.updateOne(book)
        res.redirect(301,'/book/list');

    }
    
}
export default new BookController();