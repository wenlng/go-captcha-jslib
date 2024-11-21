declare module "reactivity/constants" {
    export enum ReactiveFlags {
        IS_REACTIVE = "__v_isReactive"
    }
    export enum DirtyLevels {
        Dirty = 4,
        NoDirty = 0
    }
}
declare module "reactivity/effect" {
    import { DirtyLevels } from "reactivity/constants";
    export function effect(fn: any, options?: any): any;
    export let activeEffect: any;
    export class ReactiveEffect {
        fn: any;
        scheduler: any;
        _trackId: number;
        _depsLength: number;
        _running: number;
        _dirtyLevel: DirtyLevels;
        deps: never[];
        active: boolean;
        constructor(fn: any, scheduler: any);
        get dirty(): boolean;
        set dirty(v: boolean);
        run(): any;
        stop(): void;
    }
    export function trackEffect(effect: any, dep: any): void;
    export function triggerEffects(dep: any): void;
}
declare module "shared/shapeFlags" {
    export enum ShapeFlags {
        ELEMENT = 1,
        FUNCTIONAL_COMPONENT = 2,
        STATEFUL_COMPONENT = 4,
        TEXT_CHILDREN = 8,
        ARRAY_CHILDREN = 16,
        SLOTS_CHILDREN = 32,
        TELEPORT = 64,
        COMPONENT_SHOULD_KEEP_ALIVE = 128,
        COMPONENT_KEPT_ALIVE = 256,
        COMPONENT = 6
    }
}
declare module "shared/patchFlags" {
    export enum PatchFlags {
        TEXT = 1,
        CLASS = 2,
        STYLE = 4
    }
}
declare module "shared/index" {
    export function isObject(value: any): boolean;
    export function isFunction(value: any): boolean;
    export function isString(value: any): boolean;
    export * from "shared/shapeFlags";
    export const hasOwn: (value: any, key: any) => boolean;
    export * from "shared/patchFlags";
}
declare module "reactivity/reactiveEffect" {
    export const createDep: (cleanup: any, key: any) => any;
    export function track(target: any, key: any): void;
    export function trigger(target: any, key: any, newValue: any, oldValue: any): void;
}
declare module "reactivity/baseHandler" {
    export const mutableHandlers: ProxyHandler<any>;
}
declare module "reactivity/reactive" {
    export function reactive(target: any): any;
    export function toReactive(value: any): any;
    export function isReactive(value: any): boolean;
}
declare module "reactivity/ref" {
    export function ref(value: any): RefImpl;
    class RefImpl {
        rawValue: any;
        __v_isRef: boolean;
        _value: any;
        dep: any;
        constructor(rawValue: any);
        get value(): any;
        set value(newValue: any);
    }
    export function trackRefValue(ref: any): void;
    export function triggerRefValue(ref: any): void;
    class ObjectRefImpl {
        _object: any;
        _key: any;
        __v_isRef: boolean;
        constructor(_object: any, _key: any);
        get value(): any;
        set value(newValue: any);
    }
    export function toRef(object: any, key: any): ObjectRefImpl;
    export function toRefs(object: any): any;
    export function unref(ref: any): any;
    export function proxyRefs(objectWithRef: any): any;
    export function isRef(value: any): any;
}
declare module "reactivity/computed" {
    class ComputedRefImpl {
        setter: any;
        _value: any;
        effect: any;
        dep: any;
        constructor(getter: any, setter: any);
        get value(): any;
        set value(v: any);
    }
    export function computed(getterOrOptions: any): ComputedRefImpl;
}
declare module "reactivity/apiWatch" {
    export function watch(source: any, cb: any, options?: any): () => void;
    export function watchEffect(source: any, options?: {}): () => void;
}
declare module "reactivity/index" {
    export * from "reactivity/effect";
    export * from "reactivity/reactive";
    export * from "reactivity/ref";
    export * from "reactivity/computed";
    export * from "reactivity/apiWatch";
}
declare module "runtime-core/components/Teleport" {
    export const Teleport: {
        __isTeleport: boolean;
        remove(vnode: any, unmountChildren: any): void;
        process(n1: any, n2: any, container: any, anchor: any, parentComponent: any, internals: any): void;
    };
    export const isTeleport: (value: any) => any;
}
declare module "runtime-core/createVnode" {
    import { ShapeFlags } from "shared/index";
    export const Text: unique symbol;
    export const Fragment: unique symbol;
    export function isVnode(value: any): any;
    export function isSameVnode(n1: any, n2: any): boolean;
    export function createVnode(type: any, props: any, children?: any, patchFlag?: any): {
        __v_isVnode: boolean;
        type: any;
        props: any;
        children: any;
        key: any;
        el: null;
        shapeFlag: number | ShapeFlags;
        ref: any;
        patchFlag: any;
    };
    export function openBlock(): void;
    export function closeBlock(): void;
    export function setupBlock(vnode: any): any;
    export function createElementBlock(type: any, props: any, children: any, patchFlag?: any): any;
    export function toDisplayString(value: any): any;
    export { createVnode as createElementVNode };
}
declare module "runtime-core/h" {
    export function h(type: any, propsOrChildren?: any, children?: any): {
        __v_isVnode: boolean;
        type: any;
        props: any;
        children: any;
        key: any;
        el: null;
        shapeFlag: number | import("shared").ShapeFlags;
        ref: any;
        patchFlag: any;
    };
}
declare module "runtime-core/seq" {
    export default function getSequence(arr: any): number[];
}
declare module "runtime-core/scheduler" {
    export function queueJob(job: any): void;
}
declare module "runtime-core/component" {
    export function createComponentInstance(vnode: any, parent: any): {
        data: null;
        vnode: any;
        subTree: null;
        isMounted: boolean;
        update: null;
        props: {};
        attrs: {};
        slots: {};
        propsOptions: any;
        component: null;
        proxy: null;
        setupState: {};
        exposed: null;
        parent: any;
        ctx: any;
        provides: any;
    };
    export function initSlots(instance: any, children: any): void;
    export function setupComponent(instance: any): void;
    export let currentInstance: any;
    export const getCurrentInstance: () => any;
    export const setCurrentInstance: (instance: any) => void;
    export const unsetCurrentInstance: () => void;
}
declare module "runtime-core/apiLifecycle" {
    export const enum LifeCycles {
        BEFORE_MOUNT = "bm",
        MOUNTED = "m",
        BEFORE_UPDATE = "bu",
        UPDATED = "u"
    }
    export const onBeforeMount: (hook: any, target?: any) => void;
    export const onMounted: (hook: any, target?: any) => void;
    export const onBeforeUpdate: (hook: any, target?: any) => void;
    export const onUpdated: (hook: any, target?: any) => void;
    export function invokeArray(fns: any): void;
}
declare module "runtime-core/components/KeepAlive" {
    export const KeepAlive: {
        __isKeepAlive: boolean;
        props: {
            max: NumberConstructor;
        };
        setup(props: any, { slots }: any): () => any;
    };
    export const isKeepAlive: (value: any) => any;
}
declare module "shared/propsFlags" {
    export enum PropsFlags {
        REF = "ref"
    }
}
declare module "runtime-core/renderer" {
    export function createRenderer(renderOptions: any): {
        render: (vnode: any, container: any) => void;
    };
}
declare module "runtime-core/apiProvide" {
    export function provide(key: any, value: any): void;
    export function inject(key: any, defaultValue: any): any;
}
declare module "runtime-core/components/Transition" {
    export function resolveTransitionProps(props: any): {
        onBeforeEnter(el: any): void;
        onEnter(el: any, done: any): void;
        onLeave(el: any, done: any): void;
    };
    export function Transition(props: any, { slots }: any): {
        __v_isVnode: boolean;
        type: any;
        props: any;
        children: any;
        key: any;
        el: null;
        shapeFlag: number | import("shared").ShapeFlags;
        ref: any;
        patchFlag: any;
    };
}
declare module "runtime-core/index" {
    export * from "runtime-core/h";
    export * from "runtime-core/createVnode";
    export * from "runtime-core/renderer";
    export * from "reactivity/index";
    export * from "runtime-core/apiLifecycle";
    export * from "runtime-core/component";
    export * from "runtime-core/apiProvide";
    export * from "runtime-core/components/Teleport";
    export * from "runtime-core/components/Transition";
    export * from "runtime-core/components/KeepAlive";
}
declare module "runtime-dom/nodeOps" {
    export const nodeOps: {
        insert: (el: any, parent: any, anchor: any) => any;
        remove(el: any): void;
        createElement: (type: any) => any;
        createText: (text: any) => Text;
        setText: (node: any, text: any) => any;
        setElementText: (el: any, text: any) => any;
        parentNode: (node: any) => any;
        nextSibling: (node: any) => any;
    };
}
declare module "runtime-dom/patch" {
    export function patchAttr(el: any, key: any, value: any): void;
    export function patchClass(el: any, value: any): void;
    export function patchEvent(el: any, name: any, nextValue: any): any;
    export function patchStyle(el: any, prevValue: any, nextValue: any): void;
}
declare module "runtime-dom/patchProp" {
    export default function patchProp(el: any, key: any, prevValue: any, nextValue: any): any;
}
declare module "runtime-dom/index" {
    export const render: (vnode: any, container: any) => void;
    export * from "runtime-core/index";
}
declare module "index" {
    export * from "reactivity/index";
    export * from "runtime-core/index";
    export * from "runtime-dom/index";
}
