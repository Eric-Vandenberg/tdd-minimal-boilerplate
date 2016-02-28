var assert = require('chai').assert,
    StringCalc = require('../libs/string-calc');

suite('test string calculator', function() {
    setup(function() {
        this.stringCalc = new StringCalc();
    });

    test('String of 1 equals string of 1', function() {
        this.stringCalc.intAdd('1');
        assert.strictEqual(this.stringCalc.defautProp, '1');
    });

    teardown(function() {
    });
});
