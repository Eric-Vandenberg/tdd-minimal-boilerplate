/**
 * String Calculator.
 *
 * @constructor
 */
var StringCalc = function() {
	this.defaultProp = 0;
};

/**
 * Check if this string calculator meets all requirements.
 *
 */
StringCalc.prototype.intAdd = function(str) {
	var numberPattern = /\d+/g,
		arr;
	if (str.trim().length === 0) {
		return;
	}
	arr = str.match(numberPattern);
	this.defaultProp = this.sum(arr);
};

StringCalc.prototype.sum = function(arr) {
	var total = 0;
	for (var i = arr.length; i--;) {
		total += parseInt(arr[i], 10);
	}
	return total;
};

module.exports = StringCalc;
