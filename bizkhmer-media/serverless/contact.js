const AWS = require("aws-sdk");
const config = require("./config");
AWS.config.update({
  accessKeyId: config.aws.key,
  secretAccessKey: config.aws.secret,
  region: config.aws.ses.region
});

const ses = new AWS.SES();

function generateResponse(code, payload) {
  return {
    statusCode: code,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(payload)
  };
}

function generateError(code, err) {
  return {
    statusCode: code,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(err.message)
  };
}

function generateEmailParams(body) {
  const {email, name, message, phone} = JSON.parse(body);
  if (!(email && name && message && phone)) {
    throw new Error(
      "Missing parameters! Make sure to add parameters 'email', 'name', 'message', 'phone'."
    );
  }

  return {
    Source: "bunhouth99@gmail.com",
    Destination: {ToAddresses: ["md@bizkhmer.com"]},
    ReplyToAddresses: [email],
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: `Message sent from email ${email} by ${name} \nPhone: ${phone} \nMessage: ${message}`
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: `You received a message from ${name}!`
      }
    }
  };
}
module.exports.send = async event => {
  try {
    const emailParams = generateEmailParams(event.body);
    const data = await ses.sendEmail(emailParams).promise();
    return generateResponse(200, data);
  } catch (err) {
    return generateError(500, err);
  }
};
