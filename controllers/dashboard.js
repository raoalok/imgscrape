
var fs = require('fs');

var s3 = require('s3');

var client = s3.createClient({
 maxAsyncS3: 20,     // this is the default 
 s3RetryCount: 3,    // this is the default 
 s3RetryDelay: 1000, // this is the default 
 multipartUploadThreshold: 20971520, // this is the default (20 MB) 
 multipartUploadSize: 15728640, // this is the default (15 MB) 
 s3Options: {
   accessKeyId: "AKIAI7DV2OB46ZRAVLOQ",
   secretAccessKey: "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",
   // any other options are passed to new AWS.S3() 
   // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property 
 },
});

/**
 * GET /
 */
exports.dashboardGet = function(req, res) {
            res.render('dashboard', {word: req.params.keyword});



            console.log('s3 start');
            
            for (var i = 0; i < 15; i++){

                var params = {
                    localFile: "public/images/"+req.params.keyword+[i]+".jpg",
                   
                    s3Params: {
                      Bucket: "imagescrape",
                      Key: req.params.keyword+[i]+".jpg",
                      // other options supported by putObject, except Body and ContentLength. 
                      // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property 
                    },
                  };
                  var uploader = client.uploadFile(params);
                  uploader.on('error', function(err) {
                    console.error("unable to upload:", err.stack);
                  });
                  uploader.on('progress', function() {
                    console.log("progress", uploader.progressMd5Amount,
                              uploader.progressAmount, uploader.progressTotal);
                  });
                  uploader.on('end', function() {
                    console.log("done uploading");
                    });
            
                  
            
                  
            

                }

                console.log('s3 end');
              
        };
  