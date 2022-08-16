import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { bookRouters } from "./src/router/book.router";
import fileUpload from "express-fileupload"
const PORT = 3000;
const app = express();

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.json());
app.use(fileUpload())

app.use(express.static('public'))
const DB_URL = 'mongodb+srv://yoongee:anh18494@atlascluster.cfzvuip.mongodb.net/demo';
mongoose.connect(DB_URL).then(()=>{
    console.log('Connect Success');
})
.catch(error=>{
console.log('DB connection error', error.message);
})

app.use('',bookRouters);
app.listen(PORT, ()=>{
    console.log(`app is rungning port ${PORT}`);
});
