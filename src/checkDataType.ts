import { CheckDataType } from './interface'

export default {
    isString: function (o) {
        if (Object.prototype.toString.call(o).slice(8, -1) === "String") return true;
        return false;
    },
    isNumber: function (o) {
        if (Object.prototype.toString.call(o).slice(8, -1) === "Number") return true;
        return false;
    },
    isBoolean: function (o) {
        if (Object.prototype.toString.call(o).slice(8, -1) === "Boolean") return true;
        return false;
    },
    isFunction: function (o) {
        if (Object.prototype.toString.call(o).slice(8, -1) === "Function") return true;
        return false;
    },
    isNull: function (o) {
        if (Object.prototype.toString.call(o).slice(8, -1) === "Null") return true;
        return false;
    },
    isUndefined: function (o) {
        if (Object.prototype.toString.call(o).slice(8, -1) === "Undefined") return true;
        return false;
    },
    isObject: function (o) {
        if (Object.prototype.toString.call(o).slice(8, -1) === "Object") return true;
        return false;
    },
    isArray: function (o) {
        if (Object.prototype.toString.call(o).slice(8, -1) === "Array") return true;
        return false;
    },
    isDate: function (o) {
        if (Object.prototype.toString.call(o).slice(8, -1) === "Date") return true;
        return false;
    },
    isRegExp: function (o) {
        if (Object.prototype.toString.call(o).slice(8, -1) === "RegExp") return true;
        return false;
    },
    isPromise: function (o) {
        if (Object.prototype.toString.call(o).slice(8, -1) === "Promise") return true;
        return false;
    },
    isElement: function (o) {
        return typeof o === 'object' && o instanceof window.Node;
    },
} as CheckDataType
