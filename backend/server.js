import fs from 'node:fs/promises';

import express from 'express';
import cors from 'cors';

// import config from './config.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const port = 3000; // config.app.port;

app.get('/', (req, res) => {
  res.status(200).json({ response: 'Hello World!' });
});

app.get('/monsters', async (req, res) => {
  // monster data from the creative commons srd v5.1
  // https://www.dndbeyond.com/resources/1781-systems-reference-document-srd
  const monsters = await fs.readFile('./data/monsters.json', 'utf8');
  res.json(JSON.parse(monsters));
});

app.get('/races', async (req, res) => {
  // race data from the creative commons srd v5.1
  // https://www.dndbeyond.com/resources/1781-systems-reference-document-srd
  const races = await fs.readFile('./data/races.json', 'utf8');
  res.json(JSON.parse(races));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
