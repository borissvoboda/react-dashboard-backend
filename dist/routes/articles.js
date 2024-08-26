"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const articles_json_1 = __importDefault(require("../dummyData/articles.json"));
const router = (0, express_1.default)();
// endpoint /articles?page=2&limit=3
router.get('/', (req, res) => {
    const DEFAULT_PAGE = 1;
    const DEFAULT_PAGE_SIZE = 10;
    const page = parseInt(req.query.page) || DEFAULT_PAGE;
    const pageSize = parseInt(req.query.limit) || DEFAULT_PAGE_SIZE;
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    // GET ARTICLES
    const paginatedArticles = articles_json_1.default.slice(startIndex, endIndex);
    const totalArticles = articles_json_1.default.length;
    const totalPages = Math.ceil(totalArticles / pageSize);
    res.json({
        page,
        pageSize,
        totalPages,
        totalArticles,
        data: paginatedArticles,
    });
});
router.get('/:id', (req, res) => {
    const selArt = articles_json_1.default.filter((article) => article.id === parseInt(req.params.id))[0];
    res.json(selArt);
});
exports.default = router;
