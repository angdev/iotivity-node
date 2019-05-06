const iotivity = require("./csdk");
const Util = require("./Util");

const = stackOKOrThrow = Util.stackOKOrThrow;

const startDefaultProcessLoop = (interval) => {
  interval = interval || 100;

  setInterval( function() {
    var result;

    // This catches errors thrown from native callbacks - for example, if the JS callback return
    // value fails validation
    try {
      result = iotivity.OCProcess();
    } catch ( theError ) {
      throw theError;
    }
    stackOKOrThrow( result, "OCProcess() failed" );
  }, interval );
};

module.exports = {
  startDefaultProcessLoop
}
