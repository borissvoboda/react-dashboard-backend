import express, { Request, Response } from 'express';
import { readFileSync } from 'fs';
import articlesJson from '../dummyData/articles.json';

const router = express();

// endpoint /articles?page=2&limit=3
router.get('/', (req: Request, res: Response) => {
  const DEFAULT_PAGE = 1;
  const DEFAULT_PAGE_SIZE = 10;
  const page = parseInt(req.query.page as string) || DEFAULT_PAGE;
  const pageSize = parseInt(req.query.limit as string) || DEFAULT_PAGE_SIZE;

  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;

  // GET ARTICLES
  const paginatedArticles = articlesJson.slice(startIndex, endIndex);
  const totalArticles = articlesJson.length;
  const totalPages = Math.ceil(totalArticles / pageSize);

  res.json({
    page,
    pageSize,
    totalPages,
    totalArticles,
    data: paginatedArticles,
  });
});

router.get('/:id', (req: Request, res: Response) => {
  const selArt = articlesJson.filter(
    (article) => article.id === parseInt(req.params.id)
  )[0];
  res.json(selArt);
});

export default router;
