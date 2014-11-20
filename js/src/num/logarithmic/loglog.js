
var loglog = function ( a, b ) {
	return Math.log( Math.log( b ) / Math.log( a ) ) / Math.log( a );
};

exports.loglog = loglog;
