(function(exports, undefined){

	'use strict';


/* js/src/num */
/* js/src/num/arithmetic */
/* js/src/num/arithmetic/add.js */

var add = function ( a, b ) {
	return a + b;
};

exports.add = add;

/* js/src/num/arithmetic/div.js */

var div = function ( a, b ) {
	return a / b;
};

exports.div = div;

/* js/src/num/arithmetic/iadd.js */

var iadd = function ( a, b ) {
	return a += b;
};

exports.iadd = iadd;

/* js/src/num/arithmetic/idiv.js */

var idiv = function ( a, b ) {
	return a /= b;
};

exports.idiv = idiv;

/* js/src/num/arithmetic/imul.js */

var imul = function ( a, b ) {
	return a *= b;
};

exports.imul = imul;

/* js/src/num/arithmetic/isub.js */

var isub = function ( a, b ) {
	return a -= b;
};

exports.isub = isub;

/* js/src/num/arithmetic/mul.js */

var mul = function ( a, b ) {
	return a * b;
};

exports.mul = mul;

/* js/src/num/arithmetic/sub.js */

var sub = function ( a, b ) {
	return a - b;
};

exports.sub = sub;

/* js/src/num/compare */
/* js/src/num/compare/decreasing.js */


var decreasing = function ( a, b ) {

	return ( a > b ) ? -1 : ( ( a === b ) ? 0 : 1 );

};

exports.decreasing = decreasing;

/* js/src/num/compare/eq.js */

var eq = function ( a, b ) {
	return a === b;
};

exports.eq = eq;

/* js/src/num/compare/ge.js */

var ge = function ( a, b ) {
	return a >= b;
};

exports.ge = ge;

/* js/src/num/compare/gt.js */

var gt = function ( a, b ) {
	return a > b;
};

exports.gt = gt;

/* js/src/num/compare/increasing.js */


var increasing = function ( a, b ) {

	return ( a < b ) ? -1 : ( ( a === b ) ? 0 : 1 );

};

exports.increasing = increasing;

/* js/src/num/compare/isnegativeone.js */


var isnegativeone = function ( n ) {

	return n === -1;

};

exports.isnegativeone = isnegativeone;

/* js/src/num/compare/isone.js */


var isone = function ( n ) {

	return n === 1;

};

exports.isone = isone;

/* js/src/num/compare/iszero.js */


var iszero = function ( n ) {

	return n === 0;

};

exports.iszero = iszero;

/* js/src/num/compare/le.js */

var le = function ( a, b ) {
	return a <= b;
};

exports.le = le;

/* js/src/num/compare/lt.js */

var lt = function ( a, b ) {
	return a < b;
};

exports.lt = lt;

/* js/src/num/compare/ne.js */

var ne = function ( a, b ) {
	return a !== b;
};

exports.ne = ne;

/* js/src/num/constants */
/* js/src/num/constants/negativeone.js */

var negativeone = function () {
	return -1;
};

exports.negativeone = negativeone;

/* js/src/num/constants/one.js */

var one = function () {
	return 1;
};

exports.one = one;

/* js/src/num/constants/zero.js */

var zero = function () {
	return 0;
};

exports.zero = zero;

})(typeof exports === 'undefined' ? this['number'] = {} : exports);
