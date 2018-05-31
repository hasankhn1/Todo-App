const requireAuthentication = (req, res, next) => {
  console.log('prvate route hited');
  next();
}

const logging = (req, res, next) => {
  console.log(`${req.method} ${new Date().toString()} ${req.originalUrl}`);
  next();
}

module.exports = {
  requireAuthentication,
  logging
}