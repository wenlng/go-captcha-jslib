import { ButtonConfig, ButtonState } from "./types";
export declare class ButtonCore {
    private _logic;
    private _el;
    constructor(config?: ButtonConfig);
    setConfig: (config?: ButtonConfig) => this;
    setState: (state?: ButtonState) => this;
    mount: (el: HTMLElement) => this;
    destroy: () => this;
}
export declare function Button(config?: ButtonConfig): {
    setConfig: (config?: ButtonConfig) => ButtonCore;
    setState: (state?: ButtonState) => ButtonCore;
    mount: (el: HTMLElement) => ButtonCore;
    destroy: () => ButtonCore;
};
