const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());
const password = 'tylerrulessohard'

function checkpassword(req, res, next) {
  if (req.query.password !== password){
    res.status(403).send('no soup for you');
  } else{
    next();
  }
}

app.get('/data', checkpassword, (req, res) => {
  res.json({
    someData: 'pretend this is meaningful data, like URLs to pictures of the simpsons',
  });
});

app.get('/more-data', checkpassword, (req, res) => {
  res.json({
    moreData: 'I wish this data were protected!',
  });
});

const port = 3005;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
