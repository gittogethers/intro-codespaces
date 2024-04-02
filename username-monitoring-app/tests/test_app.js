// Unit tests for the Username Monitoring Application

const assert = require('assert');
const fs = require('fs');
const { fetchAndExtractUsernames, selectRandomUsername } = require('../app');

describe('Username Monitoring Application Tests', function() {
  describe('fetchAndExtractUsernames()', function() {
    it('should fetch comments and extract usernames', async function() {
      await fetchAndExtractUsernames();
      assert.ok(fs.existsSync('./usernames.json'));
      const usernames = JSON.parse(fs.readFileSync('./usernames.json'));
      assert.ok(usernames.length > 0);
    });
  });

  describe('selectRandomUsername()', function() {
    it('should select a random username from the list', function() {
      const usernames = JSON.parse(fs.readFileSync('./usernames.json'));
      if (usernames.length > 0) {
        const selectedUsername = selectRandomUsername();
        assert.ok(usernames.includes(selectedUsername));
      } else {
        assert.strictEqual(selectRandomUsername(), undefined);
      }
    });
  });
});
