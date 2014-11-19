
var idivmod = function ( a, b ) {

	var q;

	q = a / b | 0;

	return [ q , a %= b ];

};

exports.idivmod = idivmod;
