const express = require('express');
const app = express();

app.get('/:num', (req, res) => {
  const num = Number(req.params.num);
  const func = req.query;

  let operation = Object.keys(func);
  let integer = Number(Object.values(func));
  let result = 0;

  switch (operation[0]) {
    case 'add':
      result = num + integer;
      break;
    case 'sub':
      result = num - integer;
      break;
    case 'mul':
      result = num * integer;
      break;
    case 'div':
      result = num / integer;
      break;
    default:
      result = 'unknown operator';
      return res.status(400).send(new Error('yes'));
  }
  console.log('result', result);
  res.send([req.params, req.query, result]);
});

app.listen(3000);
