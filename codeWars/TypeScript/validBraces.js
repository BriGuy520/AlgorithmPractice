"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validBraces = void 0;
function validBraces(braces) {
    var _a, _b;
    const open = /{*/g;
    const closed = /}*/g;
    return ((_a = braces.match(open)) === null || _a === void 0 ? void 0 : _a.toString().length) === ((_b = braces.match(closed)) === null || _b === void 0 ? void 0 : _b.toString().length);
}
exports.validBraces = validBraces;
