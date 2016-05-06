
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.lista = function(req, res){
  res.render('layout', { title: 'Express' });
};
