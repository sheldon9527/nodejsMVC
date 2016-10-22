module.exports = function(req, res, next) {
  var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
  if (token) {
  try {
    var decoded = jwt.decode(token, app.get('sheldon'));
    
    return decoded;

  } catch (err) {
    return next();
  }
} else {
  next();
}
};
