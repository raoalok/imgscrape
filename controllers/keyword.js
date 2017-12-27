var mongoskin = require('mongoskin');
var url = 'mongodb://localhost:27017/test';
var db = mongoskin.db(url);






/**
 * GET /
 */
exports.keywordGet = function(req, res) {
    db.bind('keywordlist', {});
    
        db.keywordlist.find({}, { _id: 0 }).toArray(function(err, results){
            if (err) throw err;
                res.render('keyword', {
                    title: 'Keyword',
                    results:results
                  });
          })
  
};



