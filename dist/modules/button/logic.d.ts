import { ButtonConfig, ButtonState } from "./types";
export declare class Logic {
    name: string;
    private logicProps;
    localConfig: any;
    localState: any;
    btnClass: any;
    btnStyles: any;
    private unmountFn;
    constructor();
    setPropsConfig: (config: ButtonConfig) => void;
    setPropsState: (state: ButtonState) => void;
    setup: () => {};
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
