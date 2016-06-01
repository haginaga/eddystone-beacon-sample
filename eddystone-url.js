// @run node eddystone-url.js

var eddystoneBeacon = require('eddystone-beacon');
var googl = require('goo.gl');

var url = 'https://github.com/haginaga/eddystone-beacon-sample';

// @see https://console.developers.google.com
googl.setKey('secret');
googl.shorten(url)
  .then(function(shortUrl) {
    // url max 18 bytes.
    eddystoneBeacon.advertiseUrl(shortUrl);
  })
  .catch(function(err) {
    console.error(err.message);
    process.exit();
  });
