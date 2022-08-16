"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const book_router_1 = require("./src/router/book.router");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const PORT = 3000;
const app = (0, express_1.default)();
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use((0, express_fileupload_1.default)());
app.use(express_1.default.static('public'));
const DB_URL = 'mongodb+srv://yoongee:anh18494@atlascluster.cfzvuip.mongodb.net/demo';
mongoose_1.default.connect(DB_URL).then(() => {
    console.log('Connect Success');
})
    .catch(error => {
    console.log('DB connection error', error.message);
});
app.use('', book_router_1.bookRouters);
app.listen(PORT, () => {
    console.log(`app is rungning port ${PORT}`);
});
