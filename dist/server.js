"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const articles_1 = __importDefault(require("./routes/articles"));
const app = (0, express_1.default)();
app.use('/articles', articles_1.default);
app.get('/', (req, res) => {
    res.send('Server running');
});
app.listen(3000);
