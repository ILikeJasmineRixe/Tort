const axios = require('axios');
const fs = require('fs');
const magnetGenerator = require('../modules/magnetGenerator.js');

axios.get('https://apibay.org/q.php?q=Africa%20Screams&cat=0')
    .then(({ data }) => {
        stringRes = JSON.stringify(data, null, 2)
        fs.writeFileSync('res.json', stringRes, 'utf-8');
        const jsonResponse = JSON.parse(stringRes);

        jsonResponse.forEach((item, index) => {

            const { name, info_hash, leechers, seeders, num_files, size } = item;


            console.log(`item ${index + 1}:`);
            console.log(`| Name: ${name}`);
            console.log(`| Info Hash: ${info_hash}`);
            console.log(`| Leechers: ${leechers}`);
            console.log(`| Seeders: ${seeders}`);
            console.log(`| Number of Files: ${num_files}`);
            console.log(`| Size: ${size}`);
            console.log(`Magnet: ${magnetGenerator.generateMagnetLink(info_hash, name, magnetGenerator.trackers)}`);
            console.log(`\n`);
        })
    })
    .catch(error => {
        console.error(`Data Fetch Error: ${error.message}`);
    });

    /* Uncopyrighted movie example
const infoHash = 'D92F51DA9803E747B710499714167BC194E3992E';
const name = "abbott and costello - africa screams (1949).mp4";

const magnetLink = magnetGenerator.generateMagnetLink(infoHash, name, magnetGenerator.trackers);

console.log(`\nMagnet Link: ${magnetLink}\n`);
*/
