
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('news', { title: 'Express' });
};
