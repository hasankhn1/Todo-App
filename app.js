const express = require('express'),
  favicon = require('serve-favicon'),
  middlewares = require('./middlewares'),
  path = require('path'),
  app = express();

app.use(middlewares.application.logging);
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')))

app.get('/', (req,res,next)=>{
  res.send('HeLLO');
})

app.get('/about', middlewares.application.requireAuthentication, (req, res, next) => {
  res.send('About Us');
})
app.use(express.static(`${__dirname}/public`));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log(`Listening on port : ${app.get('port')}`)
})
