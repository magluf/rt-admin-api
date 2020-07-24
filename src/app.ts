import express = require('express');
import path = require('path');
import { User } from './model/user.model';

const PORT = process.env.PORT || 5000;
const app: express.Application = express();
const user = new User(1, 'Milena');

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.send(`Hello ${user.name}`))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
