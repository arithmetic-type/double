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

		/* js/src/arithmetic/constants */
		/* js/src/arithmetic/constants/add1.js */

		var add1 = function add1(n) {
			return n + 1;
		};

		exports.add1 = add1;

		/* js/src/arithmetic/constants/div2.js */

		var div2 = function div2(n) {
			return n / 2;
		};

		exports.div2 = div2;

		/* js/src/arithmetic/constants/iadd1.js */

		var iadd1 = function iadd1(n) {
			return n += 1;
		};

		exports.iadd1 = iadd1;

		/* js/src/arithmetic/constants/idiv2.js */

		var idiv2 = function idiv2(n) {
			return n /= 2;
		};

		exports.idiv2 = idiv2;

		/* js/src/arithmetic/constants/imul2.js */

		var imul2 = function imul2(a) {
			return a *= 2;
		};

		exports.imul2 = imul2;

		/* js/src/arithmetic/constants/imul5.js */

		var imul5 = function imul5(a) {
			return a *= 5;
		};

		exports.imul5 = imul5;

		/* js/src/arithmetic/constants/isub1.js */

		var isub1 = function isub1(n) {
			return n -= 1;
		};

		exports.isub1 = isub1;

		/* js/src/arithmetic/constants/mul2.js */

		var mul2 = function mul2(a) {
			return a * 2;
		};

		exports.mul2 = mul2;

		/* js/src/arithmetic/constants/mul5.js */

		var mul5 = function mul5(a) {
			return a * 5;
		};

		exports.mul5 = mul5;

		/* js/src/arithmetic/constants/sub1.js */

		var sub1 = function sub1(n) {
			return n - 1;
		};

		exports.sub1 = sub1;

		/* js/src/arithmetic/div.js */

		var div = function div(a, b) {
			return a / b;
		};

		exports.div = div;

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

		/* js/src/arithmetic/idiv.js */

		var idiv = function idiv(a, b) {
			return a /= b;
		};

		exports.idiv = idiv;

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

		/* js/src/arithmetic/neg.js */

		var neg = function neg(n) {
			return -n;
		};

		exports.neg = neg;

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

		/* js/src/arithmetic/sub.js */

		var sub = function sub(a, b) {
			return a - b;
		};

		exports.sub = sub;

		/* js/src/compare */
		/* js/src/compare/decreasing.js */

		var decreasing = function decreasing(a, b) {

			return a > b ? -1 : a === b ? 0 : 1;
		};

		exports.decreasing = decreasing;

		/* js/src/compare/increasing.js */

		var increasing = function increasing(a, b) {

			return a < b ? -1 : a === b ? 0 : 1;
		};

		exports.increasing = increasing;

		/* js/src/constants */
		/* js/src/constants/$0.js */

		var $0 = function $0() {
			return 0;
		};

		exports.$0 = $0;

		/* js/src/constants/$1.js */

		var $1 = function $1() {
			return 1;
		};

		exports.$1 = $1;

		/* js/src/constants/$2.js */

		var $2 = function $2() {
			return 2;
		};

		exports.$2 = $2;

		/* js/src/constants/$5.js */

		var $5 = function $5() {
			return 5;
		};

		exports.$5 = $5;

		/* js/src/constants/$_1.js */

		var $_1 = function $_1() {
			return -1;
		};

		exports.$_1 = $_1;

		/* js/src/exponential */
		/* js/src/exponential/constants */
		/* js/src/exponential/constants/ipow2.js */

		var ipow2 = function ipow2(a) {
			return a *= a;
		};

		exports.ipow2 = ipow2;

		/* js/src/exponential/constants/pow2.js */

		var pow2 = function pow2(a) {
			return a * a;
		};

		exports.pow2 = pow2;

		/* js/src/exponential/pow.js */

		exports.pow = Math.pow;

		/* js/src/exponential/sqrt.js */

		exports.sqrt = Math.sqrt;

		/* js/src/io */
		/* js/src/io/parse.js */

		var parse = function parse(n) {
			return +n;
		};

		exports.parse = parse;

		/* js/src/io/stringify.js */

		var stringify = function stringify(n) {
			return n.toString();
		};

		exports.stringify = stringify;

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

		/* js/src/predicate */
		/* js/src/predicate/constants */
		/* js/src/predicate/constants/eq0.js */

		var eq0 = function eq0(n) {
			return n === 0;
		};

		exports.eq0 = eq0;

		/* js/src/predicate/constants/eq1.js */

		var eq1 = function eq1(n) {
			return n === 1;
		};

		exports.eq1 = eq1;

		/* js/src/predicate/constants/eq_1.js */

		var eq_1 = function eq_1(n) {
			return n === -1;
		};

		exports.eq_1 = eq_1;

		/* js/src/predicate/constants/ge1.js */

		var ge1 = function ge1(n) {
			return n >= 1;
		};

		exports.ge1 = ge1;

		/* js/src/predicate/constants/gt0.js */

		var gt0 = function gt0(n) {
			return n > 0;
		};

		exports.gt0 = gt0;

		/* js/src/predicate/constants/gt1.js */

		var gt1 = function gt1(n) {
			return n > 1;
		};

		exports.gt1 = gt1;

		/* js/src/predicate/constants/le1.js */

		var le1 = function le1(n) {
			return n <= 1;
		};

		exports.le1 = le1;

		/* js/src/predicate/constants/lt1.js */

		var lt1 = function lt1(n) {
			return n < 1;
		};

		exports.lt1 = lt1;

		/* js/src/predicate/eq.js */

		var eq = function eq(a, b) {
			return a === b;
		};

		exports.eq = eq;

		/* js/src/predicate/ge.js */

		var ge = function ge(a, b) {
			return a >= b;
		};

		exports.ge = ge;

		/* js/src/predicate/gt.js */

		var gt = function gt(a, b) {
			return a > b;
		};

		exports.gt = gt;

		/* js/src/predicate/le.js */

		var le = function le(a, b) {
			return a <= b;
		};

		exports.le = le;

		/* js/src/predicate/lt.js */

		var lt = function lt(a, b) {
			return a < b;
		};

		exports.lt = lt;

		/* js/src/predicate/ne.js */

		var ne = function ne(a, b) {
			return a !== b;
		};

		exports.ne = ne;

		/* js/src/trigonometry */
		/* js/src/trigonometry/atan2.js */

		var atan2 = Math.atan2;

		exports.atan2 = atan2;

		/* js/src/trigonometry/cos.js */

		var cos = Math.cos;

		exports.cos = cos;

		/* js/src/trigonometry/sin.js */

		var sin = Math.sin;

		exports.sin = sin;

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