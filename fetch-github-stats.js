const https = require('https');
const fs = require('fs');
const url = 'https://github-readme-stats.vercel.app/api?username=miarez';

https.get(url, (response) => {
  let data = '';

  // A chunk of data has been received.
  response.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received.
  response.on('end', () => {
    fs.writeFile('general_stats.svg', data, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  });
}).on('error', (err) => {
  console.error('Error fetching the URL:', err.message);
});
