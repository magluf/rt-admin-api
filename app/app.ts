// lib/app.ts
import express = require('express');
import { User } from './model/user.model';

const app: express.Application = express();
const user = new User(1, 'Milena');

app.get('/', function (req, res) {
  res.send(`Hello ${user.name}`);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
