var _ = require('lodash'),
		StringCalc = function() {
			this.defaultProp = 0;
		};

/**
 * StringCalc intAdd method.
 *
 */
StringCalc.prototype.intAdd = function(str) {
	if (!_.isEmpty(str)) {
		this.defaultProp = 5;
	}
};

module.exports = StringCalc;
