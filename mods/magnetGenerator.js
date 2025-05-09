function generateMagnetLink(infoHash, name, trackers = []) {
  const params = new URLSearchParams();
  params.append('xt', `urn:btih:${infoHash}`);
  params.append('dn', name);
  
  trackers.forEach(tracker => {
    params.append('tr', tracker);
  });

  return `magnet:?${params.toString()}`;
}

const trackers = [
  'udp://tracker.openbittorrent.com:6969/announce',
  'udp://open.stealth.si:80/announce',
  'udp://tracker.torrent.eu.org:451/announce',
  'udp://tracker.bittor.pw:1337/announce',
  'udp://public.popcorn-tracker.org:6969/announce',
  'udp://tracker.dler.org:6969/announce',
  'udp://exodus.desync.com:6969',
  'udp://open.demonii.com:1337/announce',
  'udp://tracker2.dler.com/announce',
  'udp://tracker3.dler.com:2710/announce',
];

/*
const magnetLink = generateMagnetLink(infoHash, name, magnetGenerator.trackers);
console.log(magnetLink);
*/

module.exports = { generateMagnetLink, trackers };