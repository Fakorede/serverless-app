const moment = require('moment')

exports.logger = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Serverless CI/CD demo!",
      version: "v2.0",
      timestamp: moment().unix()
    })
  };
};
