declare class ComputedRefImpl {
    setter: any;
    _value: any;
    effect: any;
    dep: any;
    constructor(getter: any, setter: any);
    get value(): any;
    set value(v: any);
}
export declare function computed(getterOrOptions: any): ComputedRefImpl;
export {};
