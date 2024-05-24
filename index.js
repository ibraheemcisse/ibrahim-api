const { CloudFunctionsFramework } = require('@google-cloud/functions-framework');

CloudFunctionsFramework.http('helloWorld', (req, res) => {
  res.send('Hello, World!');
});
