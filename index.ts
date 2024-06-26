import { Express, Request, Response } from 'express';
import { addCard, GetAllCards } from './script';
import ICard from './types/Card';
const path = require('path');

const express = require('express');
const app: Express = express();
const port = 8000;
const cors = require('cors');

var router = express.Router();

app.use('/images', express.static('images'));
// create application/x-www-form-urlencoded parser
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

app.use('/', router);
app.use(cors());

app.post('/card', (req: Request, res: Response) => {
  const body = req.body as ICard;
  console.log(req.body);
  addCard(body);
});

app.get('/cards', async (req: Request, res: Response) => {
  const cards = await GetAllCards();
  res.json(cards);
  return cards;
});

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
