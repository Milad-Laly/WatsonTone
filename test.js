
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const toneAnalyzer = new ToneAnalyzerV3({
  version: '2020-09-29',
  authenticator: new IamAuthenticator({
    apikey: 'ENTER API KEY HERE',
  }),
  serviceUrl: 'https://api.eu-gb.tone-analyzer.watson.cloud.ibm.com',
});
const text = "Good morning everyone. I see that profits are lower than expected. I know we have had a tough year and moral is down. However, we will make sure we bounce back next year.";

toneAnalyzer
  .tone({
    toneInput: text,
    contentType: 'text/plain',
  })
  .then(response => {
    console.log(JSON.stringify(response.result, null, 2));
  })
  .catch(error => console.error(error));

