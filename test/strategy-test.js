var vows = require('vows');
var assert = require('assert');
var util = require('util');
var KtTStrategy = require('passport-ktt/strategy');


vows.describe('KtTStrategy').addBatch({
  
  'strategy': {
    topic: function() {
      return new KtTStrategy({ returnURL: 'https://www.example.com/auth/ktt/return' },
        function() {}
      );
    },
    
    'should be named ktt': function (strategy) {
      assert.equal(strategy.name, 'ktt');
    },
    'should have correct provider URL': function (strategy) {
      assert.equal(strategy._providerURL, 'http://id.kreativitaet-trifft-technik.de/openidserver/op');
    },
  },
  
}).export(module);
