import { SlideConfig, SlideData, SlideEvent } from "./types";
import { handlerType } from "./handler";
export declare class Logic {
    name: string;
    private logicProps;
    localData: any;
    localEvent: any;
    localConfig: any;
    hasDisplayImageState: any;
    hasDisplayWrapperState: any;
    wrapperStyles: any;
    thumbStyles: any;
    bodyStyles: any;
    imageStyles: any;
    iconStyles: any;
    handler: handlerType;
    rootRef: {
        rawValue: any;
        __v_isRef: boolean;
        _value: any;
        dep: any;
        value: any;
    };
    dragBarRef: {
        rawValue: any;
        __v_isRef: boolean;
        _value: any;
        dep: any;
        value: any;
    };
    containerRef: {
        rawValue: any;
        __v_isRef: boolean;
        _value: any;
        dep: any;
        value: any;
    };
    dragBlockRef: {
        rawValue: any;
        __v_isRef: boolean;
        _value: any;
        dep: any;
        value: any;
    };
    tileRef: {
        rawValue: any;
        __v_isRef: boolean;
        _value: any;
        dep: any;
        value: any;
    };
    private unmountFn;
    constructor();
    clear: () => void;
    reset: () => void;
    refresh: () => void;
    close: () => void;
    clearData: () => void;
    setPropsData: (data: SlideData) => void;
    setPropsEvent: (event: SlideEvent) => void;
    setPropsConfig: (config: SlideConfig) => void;
    setup: () => {
        rootRef: {
            rawValue: any;
            __v_isRef: boolean;
            _value: any;
            dep: any;
            value: any;
        };
        containerRef: {
            rawValue: any;
            __v_isRef: boolean;
            _value: any;
            dep: any;
            value: any;
        };
        tileRef: {
            rawValue: any;
            __v_isRef: boolean;
            _value: any;
            dep: any;
            value: any;
        };
        dragBlockRef: {
            rawValue: any;
            __v_isRef: boolean;
            _value: any;
            dep: any;
            value: any;
        };
        dragBarRef: {
            rawValue: any;
            __v_isRef: boolean;
            _value: any;
            dep: any;
            value: any;
        };
    };
    render: (props: {}) => {
        __v_isVnode: boolean;
        type: any;
        props: any;
        children: any;
        key: any;
        el: any;
        shapeFlag: number | import("../../libs/render/shared").ShapeFlags;
        ref: any;
        patchFlag: any;
    };
    mount: (el: Element) => void;
    unmount: () => void;
}
