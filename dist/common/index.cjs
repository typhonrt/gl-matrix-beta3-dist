// gl-matrix - v4.0.0-beta.3 - A high performance matrix and vector library.
// @author Brandon Jones
// @author Colin MacKenzie IV
// @license MIT (https://github.com/toji/gl-matrix/blob/master/LICENSE.md)
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/common/index.ts
var common_exports = {};
__export(common_exports, {
  GLM_EPSILON: () => GLM_EPSILON
});
module.exports = __toCommonJS(common_exports);
var GLM_EPSILON = 1e-6;
//# sourceMappingURL=index.cjs.map
