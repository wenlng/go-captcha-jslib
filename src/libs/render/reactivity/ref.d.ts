export declare function ref(value: any): RefImpl;
declare class RefImpl {
    rawValue: any;
    __v_isRef: boolean;
    _value: any;
    dep: any;
    constructor(rawValue: any);
    get value(): any;
    set value(newValue: any);
}
export declare function trackRefValue(ref: any): void;
export declare function triggerRefValue(ref: any): void;
declare class ObjectRefImpl {
    _object: any;
    _key: any;
    __v_isRef: boolean;
    constructor(_object: any, _key: any);
    get value(): any;
    set value(newValue: any);
}
export declare function toRef(object: any, key: any): ObjectRefImpl;
export declare function toRefs(object: any): any;
export declare function unref(ref: any): any;
export declare function proxyRefs(objectWithRef: any): any;
export declare function isRef(value: any): any;
export {};
