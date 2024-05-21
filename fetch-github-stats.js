const https = require('https');
const fs = require('fs');

run(
  'https://github-readme-stats.vercel.app/api?username=miarez&hide=prs,issues,contribs&show_icons=true&theme=dark&rank_icon=percentile',
  'general_stats.svg'
)

run(
  'https://github-readme-stats.vercel.app/api/top-langs/?username=miarez&theme=dark&layout=donut-vertical&langs_count=10',
  'language_stats.svg'
)



function run(
  url,
  output
){
  https.get(url, (response) => {
    let data = '';

    // A chunk of data has been received.
    response.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received.
    response.on('end', () => {
      fs.writeFile(output, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    });
  }).on('error', (err) => {
    console.error('Error fetching the URL:', err.message);
  });
}


