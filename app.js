const express = require('express'),
  favicon = require('serve-favicon'),
  middlewares = require('./middlewares'),
  path = require('path'),
  app = express();

app.use(middlewares.application.logging);
app.use(express.static(`${__dirname}/public`));
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')))

app.get('/about', middlewares.application.requireAuthentication, (req, res, next) => {
  res.send('About Us');
})

var port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening on port : ${port}`)
})
