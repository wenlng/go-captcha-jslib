import { SlideRegionConfig, SlideRegionData, SlideRegionEvent } from "./types";
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
    containerRef: any;
    tileRef: any;
    private unmountFn;
    constructor();
    clear: () => void;
    reset: () => void;
    refresh: () => void;
    close: () => void;
    clearData: () => void;
    setPropsData: (data: SlideRegionData) => void;
    setPropsEvent: (event: SlideRegionEvent) => void;
    setPropsConfig: (config: SlideRegionConfig) => void;
    setup: () => {
        rootRef: any;
        containerRef: any;
        tileRef: any;
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
