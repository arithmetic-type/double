(function(exports, undefined){

	'use strict';


/* js/src/num */
/* js/src/num/arithmetic */
/* js/src/num/arithmetic/add.js */

var add = function ( a, b ) {
	return a + b;
};

exports.add = add;

/* js/src/num/arithmetic/addone.js */

var addone = function ( n ) {
	return n + 1;
};

exports.addone = addone;

/* js/src/num/arithmetic/div.js */

var div = function ( a, b ) {
	return a / b;
};

exports.div = div;

/* js/src/num/arithmetic/div2.js */

var div2 = function ( n ) {
	return n / 2;
};

exports.div2 = div2;

/* js/src/num/arithmetic/divmod.js */

var divmod = function ( a, b ) {
	return [ a / b | 0, a % b ];
};

exports.divmod = divmod;

/* js/src/num/arithmetic/iadd.js */

var iadd = function ( a, b ) {
	return a += b;
};

exports.iadd = iadd;

/* js/src/num/arithmetic/iaddone.js */

var iaddone = function ( n ) {
	return n += 1;
};

exports.iaddone = iaddone;

/* js/src/num/arithmetic/idiv.js */

var idiv = function ( a, b ) {
	return a /= b;
};

exports.idiv = idiv;

/* js/src/num/arithmetic/idiv2.js */

var idiv2 = function ( n ) {
	return n /= 2;
};

exports.idiv2 = idiv2;

/* js/src/num/arithmetic/idivmod.js */

var idivmod = function ( a, b ) {

	var q;

	q = a / b | 0;

	return [ q , a %= b ];

};

exports.idivmod = idivmod;

/* js/src/num/arithmetic/imod.js */

var imod = function ( a, b ) {
	return a %= b;
};

exports.imod = imod;

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

/* js/src/num/arithmetic/isubone.js */

var isubone = function ( n ) {
	return n -= 1;
};

exports.isubone = isubone;

/* js/src/num/arithmetic/mod.js */

var mod = function ( a, b ) {
	return a % b;
};

exports.mod = mod;

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

/* js/src/num/arithmetic/subone.js */

var subone = function ( n ) {
	return n - 1;
};

exports.subone = subone;

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

/* js/src/num/compare/geone.js */

var geone = function ( n ) {
	return n >= 1;
};

exports.geone = geone;

/* js/src/num/compare/gt.js */

var gt = function ( a, b ) {
	return a > b;
};

exports.gt = gt;

/* js/src/num/compare/gtone.js */

var gtone = function ( n ) {
	return n > 1;
};

exports.gtone = gtone;

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

/* js/src/num/compare/leone.js */

var leone = function ( n ) {
	return n <= 1;
};

exports.leone = leone;

/* js/src/num/compare/lt.js */

var lt = function ( a, b ) {
	return a < b;
};

exports.lt = lt;

/* js/src/num/compare/ltone.js */

var ltone = function ( n ) {
	return n < 1;
};

exports.ltone = ltone;

/* js/src/num/compare/ne.js */

var ne = function ( a, b ) {
	return a !== b;
};

exports.ne = ne;

/* js/src/num/constants */
/* js/src/num/constants/negativeone.js */

var negativeone = function ( ) {
	return -1;
};

exports.negativeone = negativeone;

/* js/src/num/constants/one.js */

var one = function ( ) {
	return 1;
};

exports.one = one;

/* js/src/num/constants/two.js */

var two = function ( ) {
	return 2;
};

exports.two = two;

/* js/src/num/constants/zero.js */

var zero = function ( ) {
	return 0;
};

exports.zero = zero;

/* js/src/num/logarithmic */
/* js/src/num/logarithmic/log.js */

var log = function ( a, b ) {
	return Math.log( b ) / Math.log( a );
};

exports.log = log;

/* js/src/num/logarithmic/log2.js */

var log2 = function ( n ) {
	return Math.log( n ) / Math.log( 2 );
};

exports.log2 = log2;

/* js/src/num/logarithmic/loge.js */

var loge = function ( n ) {
	return Math.log( n );
};

exports.loge = loge;

/* js/src/num/logarithmic/loglog.js */

var loglog = function ( a, b ) {
	return Math.log( Math.log( b ) / Math.log( a ) ) / Math.log( a );
};

exports.loglog = loglog;

/* js/src/num/logarithmic/loglog2.js */

var loglog2 = function ( n ) {
	return Math.log( Math.log( n ) / Math.log( 2 ) ) / Math.log( 2 );
};

exports.loglog2 = loglog2;

/* js/src/num/logarithmic/logloge.js */

var logloge = function ( n ) {
	return Math.log( Math.log( n ) );
};

exports.logloge = logloge;

})(typeof exports === 'undefined' ? this['number'] = {} : exports);
