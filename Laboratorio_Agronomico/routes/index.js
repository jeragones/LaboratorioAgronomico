
/*
 * GET home page.
 */

exports.index = function(req, res){
	//var dynamicContent = dynamicRender();
	res.render('index'/*, { title: 'Express'/*, dynamic : dynamicContent }*/);
};