import express, { Request, Response } from 'express';
import articles from './routes/articles';

const app = express();

app.use('/articles', articles);

app.get('/', (req: Request, res: Response) => {
  res.send('Server running');
});

app.listen(3000);
