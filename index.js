const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

var router = express.Router();

// create application/x-www-form-urlencoded parser
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

app.use('/', router);
app.use(cors());

app.post('/', (res, req) => {
  console.log(res.body);
  req.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
