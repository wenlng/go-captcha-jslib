export declare const enum LifeCycles {
    BEFORE_MOUNT = "bm",
    MOUNTED = "m",
    BEFORE_UPDATE = "bu",
    UPDATED = "u",
    UNMOUNTED = "um"
}
export declare const onBeforeMount: (hook: any, target?: any) => void;
export declare const onMounted: (hook: any, target?: any) => void;
export declare const onBeforeUpdate: (hook: any, target?: any) => void;
export declare const onUpdated: (hook: any, target?: any) => void;
export declare const onUnmounted: (hook: any, target?: any) => void;
export declare function invokeArray(fns: any): void;
