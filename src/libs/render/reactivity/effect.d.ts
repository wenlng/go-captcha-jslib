import { DirtyLevels } from "./constants";
export declare function effect(fn: any, options?: any): any;
export declare let activeEffect: any;
export declare let shouldTrack: boolean;
export declare function isTracking(): boolean;
export declare class ReactiveEffect {
    fn: any;
    scheduler: any;
    _trackId: number;
    _depsLength: number;
    _running: number;
    _dirtyLevel: DirtyLevels;
    deps: any[];
    active: boolean;
    constructor(fn: any, scheduler: any);
    get dirty(): boolean;
    set dirty(v: boolean);
    run(): any;
    stop(): void;
}
export declare function trackEffect(effect: any, dep: any): void;
export declare function triggerEffects2(dep: any): void;
export declare function triggerEffects(dep: any): void;
