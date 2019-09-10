const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.run = async (event, context, callback) => {
  const params = {
    TableName: 'contents',
    Key: {
      id: event.pathParameters.id
    }
  };

  const result = await dynamoDb.get(params).promise();
  if (result.Item) {
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      statusCode: 200,
      body: JSON.stringify(result.Item)
    };
  } else {
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      statusCode: 404,
      body: JSON.stringify({ message: "Couldn't find the todo item." })
    };
  }
};
