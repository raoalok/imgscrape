var Scraper = require ('images-scraper')
, google = new Scraper.Google();
const Jimp = require("jimp");

var mongoskin = require('mongoskin');
var url = 'mongodb://localhost:27017/test';
var db = mongoskin.db(url);

var s3BrowserDirectUpload = require('s3-browser-direct-upload');

var fs = require('fs');



/**
 * GET /
 */
exports.homeGet = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};


/**
 * Post /
 */
exports.homePost = function(req, res) {

  var searchkeyword = {word: req.body.search};
  db.collection('keywordlist').update(searchkeyword, searchkeyword, {upsert:true}, function(err,result){
    if (err) throw err;
    
  });


  google.list({
    keyword: req.body.search,
    num: 15,
    detail: true
    // nightmare: {
    //     show: true
    // }
  })
  .then(function (res) {
    for(let url in res){

      Jimp.read(res[url].url).then(function (lenna) {
        lenna.resize(500, 500)            // resize
             .quality(90)                 // set JPEG quality
             .greyscale()                 // set greyscale
             .write("public/images/"+req.body.search+[url]+".jpg"); // save
    }).catch(function (err) {
        console.error(err);
    });

  }
    
  }).catch(function(err) {
    console.log('err', err);
  });
  

  // res.redirect('/keyword');
};
