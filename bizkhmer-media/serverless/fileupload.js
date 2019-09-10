var AWS = require("aws-sdk");
const config = require("./config");
var credentials = {
  accessKeyId: "AKIAXPPNYE5L6TU7HOPO",
  secretAccessKey: "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"
};

AWS.config.update({credentials: credentials, region: "ap-southeast-1"});
module.exports.requestUploadURL = (event, context, callback) => {
  var s3 = new AWS.S3();

  var params = JSON.parse(event.body);

  var presignedPUTURL = {
    Bucket: "bizkhmer-media-image",
    Key: params.name,
    ContentType: params.type,
    Expires: 60
  };

  var uploadURL = s3.getSignedUrl("putObject", presignedPUTURL);

  callback(null, {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify({uploadURL: uploadURL, params})
  });
};
