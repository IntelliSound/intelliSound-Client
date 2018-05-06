var config = require('../../nightwatch.conf');

module.exports = {
  'intelliSound basic check': function (browser) {
    browser
      .url('http://www.intellisoundai.com/')
      .waitForElementVisible('body')
      .assert.title('intelliSound')
      .end();
  },
};