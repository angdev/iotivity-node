const iotivity = require('./csdk');

function stackOKOrThrow( result, message ) {
	var theError;

	if ( result !== iotivity.OCStackResult.OC_STACK_OK ) {
		theError = new Error( message );
		theError.result = result;
		throw theError;
	}
}

module.exports = {
  stackOKOrThrow
};
