var path = require('path');

module.exports = {
  name: 'conditional-imports',

  isDevelopingAddon: function() {
    return true;
  },
  
  included: function es5_shim_included(app) {
    this._super.included.apply(this, arguments);
    if(this.app.env === 'test') {
      this.app.import(path.join(app.bowerDirectory, 'es5-shim', 'es5-shim.js'));
    }
  }
};
