"use strict";

(function () {

	"use strict";

	var definition = function definition(exports, undefined) {

		/* js/src/arithmetic */
		/* js/src/arithmetic/add.js */

		var add = function add(a, b) {
			return a + b;
		};

		exports.add = add;

		/* js/src/arithmetic/addone.js */

		var addone = function addone(n) {
			return n + 1;
		};

		exports.addone = addone;

		/* js/src/arithmetic/div.js */

		var div = function div(a, b) {
			return a / b;
		};

		exports.div = div;

		/* js/src/arithmetic/div2.js */

		var div2 = function div2(n) {
			return n / 2;
		};

		exports.div2 = div2;

		/* js/src/arithmetic/divmod.js */

		var divmod = function divmod(a, b) {
			return [a / b | 0, a % b];
		};

		exports.divmod = divmod;

		/* js/src/arithmetic/iadd.js */

		var iadd = function iadd(a, b) {
			return a += b;
		};

		exports.iadd = iadd;

		/* js/src/arithmetic/iaddone.js */

		var iaddone = function iaddone(n) {
			return n += 1;
		};

		exports.iaddone = iaddone;

		/* js/src/arithmetic/idiv.js */

		var idiv = function idiv(a, b) {
			return a /= b;
		};

		exports.idiv = idiv;

		/* js/src/arithmetic/idiv2.js */

		var idiv2 = function idiv2(n) {
			return n /= 2;
		};

		exports.idiv2 = idiv2;

		/* js/src/arithmetic/idivmod.js */

		var idivmod = function idivmod(a, b) {

			var q;

			q = a / b | 0;

			return [q, a %= b];
		};

		exports.idivmod = idivmod;

		/* js/src/arithmetic/imod.js */

		var imod = function imod(a, b) {
			return a %= b;
		};

		exports.imod = imod;

		/* js/src/arithmetic/imul.js */

		var imul = function imul(a, b) {
			return a *= b;
		};

		exports.imul = imul;

		/* js/src/arithmetic/imul2.js */

		var imul2 = function imul2(a) {
			return a *= 2;
		};

		exports.imul2 = imul2;

		/* js/src/arithmetic/imul5.js */

		var imul5 = function imul5(a) {
			return a *= 5;
		};

		exports.imul5 = imul5;

		/* js/src/arithmetic/ipow2.js */

		var ipow2 = function ipow2(a) {
			return a *= a;
		};

		exports.ipow2 = ipow2;

		/* js/src/arithmetic/ishl.js */

		var ishl = function ishl(a, n) {
			return a <<= n;
		};

		exports.ishl = ishl;

		/* js/src/arithmetic/ishr.js */

		var ishr = function ishr(a, n) {
			return a >>= n;
		};

		exports.ishr = ishr;

		/* js/src/arithmetic/ishu.js */

		var ishu = function ishu(a, n) {
			return a >>>= n;
		};

		exports.ishu = ishu;

		/* js/src/arithmetic/isub.js */

		var isub = function isub(a, b) {
			return a -= b;
		};

		exports.isub = isub;

		/* js/src/arithmetic/isubone.js */

		var isubone = function isubone(n) {
			return n -= 1;
		};

		exports.isubone = isubone;

		/* js/src/arithmetic/mod.js */

		var mod = function mod(a, b) {
			return a % b;
		};

		exports.mod = mod;

		/* js/src/arithmetic/mul.js */

		var mul = function mul(a, b) {
			return a * b;
		};

		exports.mul = mul;

		/* js/src/arithmetic/mul2.js */

		var mul2 = function mul2(a) {
			return a * 2;
		};

		exports.mul2 = mul2;

		/* js/src/arithmetic/mul5.js */

		var mul5 = function mul5(a) {
			return a * 5;
		};

		exports.mul5 = mul5;

		/* js/src/arithmetic/pow.js */

		exports.pow = Math.pow;

		/* js/src/arithmetic/pow2.js */

		var pow2 = function pow2(a) {
			return a * a;
		};

		exports.pow2 = pow2;

		/* js/src/arithmetic/shl.js */

		var shl = function shl(a, n) {
			return a << n;
		};

		exports.shl = shl;

		/* js/src/arithmetic/shr.js */

		var shr = function shr(a, n) {
			return a >> n;
		};

		exports.shr = shr;

		/* js/src/arithmetic/shu.js */

		var shu = function shu(a, n) {
			return a >>> n;
		};

		exports.shu = shu;

		/* js/src/arithmetic/sqrt.js */

		exports.sqrt = Math.sqrt;

		/* js/src/arithmetic/sub.js */

		var sub = function sub(a, b) {
			return a - b;
		};

		exports.sub = sub;

		/* js/src/arithmetic/subone.js */

		var subone = function subone(n) {
			return n - 1;
		};

		exports.subone = subone;

		/* js/src/compare */
		/* js/src/compare/decreasing.js */

		var decreasing = function decreasing(a, b) {

			return a > b ? -1 : a === b ? 0 : 1;
		};

		exports.decreasing = decreasing;

		/* js/src/compare/eq.js */

		var eq = function eq(a, b) {
			return a === b;
		};

		exports.eq = eq;

		/* js/src/compare/ge.js */

		var ge = function ge(a, b) {
			return a >= b;
		};

		exports.ge = ge;

		/* js/src/compare/geone.js */

		var geone = function geone(n) {
			return n >= 1;
		};

		exports.geone = geone;

		/* js/src/compare/gt.js */

		var gt = function gt(a, b) {
			return a > b;
		};

		exports.gt = gt;

		/* js/src/compare/gtone.js */

		var gtone = function gtone(n) {
			return n > 1;
		};

		exports.gtone = gtone;

		/* js/src/compare/increasing.js */

		var increasing = function increasing(a, b) {

			return a < b ? -1 : a === b ? 0 : 1;
		};

		exports.increasing = increasing;

		/* js/src/compare/isnegativeone.js */

		var isnegativeone = function isnegativeone(n) {

			return n === -1;
		};

		exports.isnegativeone = isnegativeone;

		/* js/src/compare/isone.js */

		var isone = function isone(n) {

			return n === 1;
		};

		exports.isone = isone;

		/* js/src/compare/iszero.js */

		var iszero = function iszero(n) {

			return n === 0;
		};

		exports.iszero = iszero;

		/* js/src/compare/le.js */

		var le = function le(a, b) {
			return a <= b;
		};

		exports.le = le;

		/* js/src/compare/leone.js */

		var leone = function leone(n) {
			return n <= 1;
		};

		exports.leone = leone;

		/* js/src/compare/lt.js */

		var lt = function lt(a, b) {
			return a < b;
		};

		exports.lt = lt;

		/* js/src/compare/ltone.js */

		var ltone = function ltone(n) {
			return n < 1;
		};

		exports.ltone = ltone;

		/* js/src/compare/ne.js */

		var ne = function ne(a, b) {
			return a !== b;
		};

		exports.ne = ne;

		/* js/src/constants */
		/* js/src/constants/five.js */

		var five = function five() {
			return 5;
		};

		exports.five = five;

		/* js/src/constants/negativeone.js */

		var negativeone = function negativeone() {
			return -1;
		};

		exports.negativeone = negativeone;

		/* js/src/constants/one.js */

		var one = function one() {
			return 1;
		};

		exports.one = one;

		/* js/src/constants/two.js */

		var two = function two() {
			return 2;
		};

		exports.two = two;

		/* js/src/constants/zero.js */

		var zero = function zero() {
			return 0;
		};

		exports.zero = zero;

		/* js/src/logarithmic */
		/* js/src/logarithmic/log.js */

		var log = function log(a, b) {
			return Math.log(b) / Math.log(a);
		};

		exports.log = log;

		/* js/src/logarithmic/log2.js */

		var log2 = function log2(n) {
			return Math.log(n) / Math.log(2);
		};

		exports.log2 = log2;

		/* js/src/logarithmic/loge.js */

		var loge = function loge(n) {
			return Math.log(n);
		};

		exports.loge = loge;

		/* js/src/logarithmic/loglog.js */

		var loglog = function loglog(a, b) {
			return Math.log(Math.log(b) / Math.log(a)) / Math.log(a);
		};

		exports.loglog = loglog;

		/* js/src/logarithmic/loglog2.js */

		var loglog2 = function loglog2(n) {
			return Math.log(Math.log(n) / Math.log(2)) / Math.log(2);
		};

		exports.loglog2 = loglog2;

		/* js/src/logarithmic/logloge.js */

		var logloge = function logloge(n) {
			return Math.log(Math.log(n));
		};

		exports.logloge = logloge;

		/* js/src/memory */
		/* js/src/memory/copy.js */

		var copy = function copy(a) {
			return a;
		};

		exports.copy = copy;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-number", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["number"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-number");
})();