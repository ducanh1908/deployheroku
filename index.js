"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const PORT = 3000;
const app = (0, express_1.default)();
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(body_parser_1.default.json());
const DB_URL = 'mongodb://@127.0.0.1:27017/dbtest';
mongoose_1.default.connect(DB_URL).then(() => {
    console.log('Connect Success');
})
    .catch(error => {
    console.log('DB connection error', error.message);
});
app.listen(PORT, () => {
    console.log(`app is rungning port ${PORT}`);
});
