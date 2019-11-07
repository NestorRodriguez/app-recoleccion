/**
 * www.trapsporte.com
 * @author  Jaime Castrillón Velásquez jaimecastrillon@grupogenesys.com
 *
 * Utilidad para obtener la traza de la linea donde ocurre el error
 */
Object.defineProperty(global, '__stack', {
    get: function() {
        const orig = Error.prepareStackTrace;
        Error.prepareStackTrace = function(_, stack) {
            return stack;
        };
        const err = new Error;
        Error.captureStackTrace(err, arguments.callee);
        const stack = err.stack;
        Error.prepareStackTrace = orig;
        return stack;
    }
});

Object.defineProperty(global, '__line', {
    get: function() {
        return __stack[1].getLineNumber();
    }
});