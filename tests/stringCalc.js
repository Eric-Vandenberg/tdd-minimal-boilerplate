var assert = require('chai').assert,
	StringCalc = require('../libs/string-calc');

suite('test string calculator', function() {
	setup(function() {
		this.stringCalc = new StringCalc();
	});

	test('Empty string or white space only equals string of 0', function() {
		this.stringCalc.intAdd('');
		assert.strictEqual(this.stringCalc.defaultProp, 0);
	});

	test('String of 1 equals string of 1', function() {
		this.stringCalc.intAdd('1');
		assert.strictEqual(this.stringCalc.defaultProp, '1');
	});

	teardown(function() {
	});
});
