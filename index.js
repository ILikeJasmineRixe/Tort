const querystring = require('querystring');

function generateMagnetLink(infoHash, name, trackers = []) {
  const params = {
    xt: `urn:btih:${infoHash}`,
    dn: name,
    tr: trackers
  };

  return 'magnet:?' + querystring.stringify(params);
}

// Example usage:
const infoHash = 'abcdef1234567890abcdef1234567890abcdef12';
const name = 'MyCoolFile';
const trackers = [
  'udp://tracker.openbittorrent.com:80/announce',
  'udp://tracker.opentrackr.org:1337/announce'
];

const magnetLink = generateMagnetLink(infoHash, name, trackers);
console.log(magnetLink);
