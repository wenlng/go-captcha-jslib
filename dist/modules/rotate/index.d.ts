import { RotateConfig, RotateData, RotateEvent } from "./types";
export declare class RotateCore {
    private _logic;
    private _el;
    constructor(config?: RotateConfig);
    setConfig: (config?: RotateConfig) => this;
    setData: (data?: RotateData) => this;
    setEvents: (events?: RotateEvent) => this;
    mount: (el: HTMLElement) => this;
    destroy: () => this;
    clear: () => void;
    reset: () => void;
    refresh: () => void;
    close: () => void;
}
export declare function Rotate(config?: RotateConfig): {
    setConfig: (config?: RotateConfig) => RotateCore;
    setData: (data?: RotateData) => RotateCore;
    setEvents: (events?: RotateEvent) => RotateCore;
    mount: (el: HTMLElement) => RotateCore;
    destroy: () => RotateCore;
    clear: () => void;
    reset: () => void;
    refresh: () => void;
    close: () => void;
};
