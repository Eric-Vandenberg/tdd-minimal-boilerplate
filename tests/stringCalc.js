var assert = require('chai').assert,
	StringCalc = require('../libs/string-calc');

suite('Test String Calculator', function() {
	setup(function() {
		this.stringCalc = new StringCalc();
	});

	test('Empty string === 0', function() {
		this.stringCalc.intAdd('');
		assert.strictEqual(this.stringCalc.defaultProp, 0);
	});

	test('String with only white space === 0', function() {
		this.stringCalc.intAdd('  ');
		assert.strictEqual(this.stringCalc.defaultProp, 0);
	});

	test('\'1\' === 1', function() {
		this.stringCalc.intAdd('1');
		assert.strictEqual(this.stringCalc.defaultProp, 1);
	});

	test('\'1,2,3\' === 6', function() {
		this.stringCalc.intAdd('1,2,3');
		assert.strictEqual(this.stringCalc.defaultProp, 6);
	});

	test('\'1\\n2,3\' === 6', function() {
		this.stringCalc.intAdd('1\n2,3');
		assert.strictEqual(this.stringCalc.defaultProp, 6);
	});

	teardown(function() {
	});
});
