'use strict';

/**
 * Test whether a value is a collection: an Array, TypedArray or Matrix
 * @param {*} x
 * @returns {boolean} isCollection
 */
module.exports = function isCollection (x) {
  return (Array.isArray(x) || ArrayBuffer.isView(x) || (x && x.isMatrix === true));
};
