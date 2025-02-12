import { ClickConfig, ClickData, ClickEvent } from "./types";
export declare class ClickCore {
    private _logic;
    private _el;
    constructor(config?: ClickConfig);
    setConfig: (config?: ClickConfig) => this;
    setData: (data?: ClickData) => this;
    setEvents: (events?: ClickEvent) => this;
    mount: (el: HTMLElement) => this;
    destroy: () => this;
    clear: () => void;
    reset: () => void;
    refresh: () => void;
    close: () => void;
}
export declare function Click(config?: ClickConfig): {
    setConfig: (config?: ClickConfig) => ClickCore;
    setData: (data?: ClickData) => ClickCore;
    setEvents: (events?: ClickEvent) => ClickCore;
    mount: (el: HTMLElement) => ClickCore;
    destroy: () => ClickCore;
    clear: () => void;
    reset: () => void;
    refresh: () => void;
    close: () => void;
};
