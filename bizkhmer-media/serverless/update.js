const AWS = require("aws-sdk");

const client = new AWS.DynamoDB.DocumentClient();

module.exports.run = async (event, context, callback) => {
  const data = event.body;
  const keys = Object.keys(data);
  const values = Object.values(data);

  const params = {
    TableName: "contents",
    Key: {
      id: event.path.id
    },
    ExpressionAttributeValues: {
      ":value": values[0]
    },
    UpdateExpression: `SET ${keys[0]} = :value`,
    ReturnValues: "ALL_NEW"
  };

  const result = await client.update(params).promise();

  const response = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    statusCode: 200,
    body: JSON.stringify(result.Item)
  };
  callback(null, response);
};
