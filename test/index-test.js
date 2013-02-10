var vows = require('vows');
var assert = require('assert');
var util = require('util');
var ktt = require('passport-ktt');


vows.describe('passport-ktt').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(ktt.version);
    },
  },
  
}).export(module);
