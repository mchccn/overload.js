"use strict";
exports.__esModule = true;
/**
 * Returns a wrapper function for easy overloading in JavaScript.
 * @param {{ [overload: string]: (...args: unknown[]) => unknown; }} overloads Overloads to use.
 */
function OverloadJS(overloads) {
    var lexicons = Object.entries(overloads).map(function (_a) {
        var signature = _a[0], callback = _a[1];
        return ({
            lexicon: signature.split(/\s+/).map(function (arg) {
                var pure = arg.endsWith("?") ? arg.slice(0, arg.length - 1) : arg;
                if (!["string", "number", "boolean", "object"].includes(pure))
                    throw new Error("Unsupported type '" + pure + "'.");
                return {
                    type: pure,
                    nullable: arg.endsWith("?")
                };
            }),
            callback: callback
        });
    });
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _loop_1 = function (lexicon, callback) {
            if (args.every(function (arg, i) {
                return typeof arg === lexicon[i].type || (typeof arg !== "boolean" && (arg !== null && arg !== void 0 ? arg : true) && lexicon[i].nullable);
            }))
                return { value: callback.apply(void 0, args) };
        };
        for (var _a = 0, lexicons_1 = lexicons; _a < lexicons_1.length; _a++) {
            var _b = lexicons_1[_a], lexicon = _b.lexicon, callback = _b.callback;
            var state_1 = _loop_1(lexicon, callback);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        throw new Error("No overload matched this call.");
    };
}
exports["default"] = OverloadJS;
module.exports = OverloadJS;
exports = OverloadJS;
