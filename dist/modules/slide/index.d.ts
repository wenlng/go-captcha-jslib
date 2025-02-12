import { SlideConfig, SlideData, SlideEvent } from "./types";
export declare class SlideCore {
    private _logic;
    private _el;
    constructor(config?: SlideConfig);
    setConfig: (config?: SlideConfig) => this;
    setData: (data?: SlideData) => this;
    setEvents: (events?: SlideEvent) => this;
    mount: (el: HTMLElement) => this;
    destroy: () => this;
    clear: () => void;
    reset: () => void;
    refresh: () => void;
    close: () => void;
}
export declare function Slide(config?: SlideConfig): {
    setConfig: (config?: SlideConfig) => SlideCore;
    setData: (data?: SlideData) => SlideCore;
    setEvents: (events?: SlideEvent) => SlideCore;
    mount: (el: HTMLElement) => SlideCore;
    destroy: () => SlideCore;
    clear: () => void;
    reset: () => void;
    refresh: () => void;
    close: () => void;
};
