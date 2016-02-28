/**
 * String Calculator.
 *
 * @constructor
 */
var StringCalc = function() {
	this.defaultProp = '';
};

/**
 * Check if this string calculator meets all requirements.
 *
 */
StringCalc.prototype.intAdd = function(str) {
	this.defaultProp = str;
};

module.exports = StringCalc;
