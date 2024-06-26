import { Express, Request, Response } from 'express';
import { addCard, GetAllCards } from './script';
import ICard from './types/Card';

const express = require('express');
const app: Express = express();
const port = 8000;
const cors = require('cors');

var router = express.Router();

// create application/x-www-form-urlencoded parser
// parse application/json
app.use(express.json());

app.use('/', router);
app.use(cors());

app.post('/card', async (req: Request, res: Response) => {
  const body = req.body as ICard;
  await addCard(body);
  return res.json(body);
});

app.get('/cards', async (req: Request, res: Response) => {
  const cards = await GetAllCards();
  res.json(cards);
});

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
