const express = require('express'),
  middlewares = require('./middlewares'),
  app = express();

app.use(express.static(`${__dirname}/public`));
app.use(middlewares.application.logging);

app.get('/about', middlewares.application.requireAuthentication, (req, res, next) => {
  res.send('About Us');
})

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log(`Listening on port : ${app.get('port')}`)
})
