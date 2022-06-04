export interface IUtils {
    type: CheckDataType
}

type T = any

export interface CheckDataType {
    isString: (o: T) => Boolean
    isNumber: (o: T) => Boolean
    isBoolean: (o: T) => Boolean
    isFunction: (o: T) => Boolean
    isNull: (o: T) => Boolean
    isUndefined: (o: T) => Boolean
    isObject: (o: T) => Boolean
    isArray: (o: T) => Boolean
    isDate: (o: T) => Boolean
    isRegExp: (o: T) => Boolean
    isPromise: (o: T) => Boolean
    isElement: (o: T) => Boolean
}