import { RotateConfig, RotateData, RotateEvent } from "./types";
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
    rootRef: any;
    dragBarRef: any;
    dragBlockRef: any;
    private unmountFn;
    constructor();
    clear: () => void;
    reset: () => void;
    refresh: () => void;
    close: () => void;
    clearData: () => void;
    setPropsData: (data: RotateData) => void;
    setPropsEvent: (event: RotateEvent) => void;
    setPropsConfig: (config: RotateConfig) => void;
    setup: () => {
        rootRef: any;
        dragBlockRef: any;
        dragBarRef: any;
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
