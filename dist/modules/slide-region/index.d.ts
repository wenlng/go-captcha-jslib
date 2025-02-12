import { SlideRegionConfig, SlideRegionData, SlideRegionEvent } from "./types";
export declare class SlideRegionCore {
    private _logic;
    private _el;
    constructor(config?: SlideRegionConfig);
    setConfig: (config?: SlideRegionConfig) => this;
    setData: (data?: SlideRegionData) => this;
    setEvents: (events?: SlideRegionEvent) => this;
    mount: (el: HTMLElement) => this;
    destroy: () => this;
    clear: () => void;
    reset: () => void;
    refresh: () => void;
    close: () => void;
}
export declare function SlideRegion(config?: SlideRegionConfig): {
    setConfig: (config?: SlideRegionConfig) => SlideRegionCore;
    setData: (data?: SlideRegionData) => SlideRegionCore;
    setEvents: (events?: SlideRegionEvent) => SlideRegionCore;
    mount: (el: HTMLElement) => SlideRegionCore;
    destroy: () => SlideRegionCore;
    clear: () => void;
    reset: () => void;
    refresh: () => void;
    close: () => void;
};
