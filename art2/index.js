const express = require('express');
const PORT = process.env.PORT || 4567;

const app = express();


app.get('/:num', (req, res) => {
  const num = req.params.num;
  const mul = req.query.m;

  res.json(num * mul);
});

app.listen(PORT, () => console.log(`Listening on port https://localhost${PORT}`));