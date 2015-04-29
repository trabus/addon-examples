var fs = require('fs');

module.exports = {
  name: 'content-for',

  isDevelopingAddon: function() {
    return true;
  },
  contentFor: function(type, config) {
    if (type === 'head'){
      return fs.readFileSync('./lib/content-for/content/content.txt');
    }
  }
};
