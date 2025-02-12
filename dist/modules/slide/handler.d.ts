import { SlideData, SlideEvent, SlideConfig } from "./types";
export interface handlerType {
    state: {} | any;
    updateData: (d: SlideData) => void;
    dragEvent: (e: Event) => void;
    closeEvent: (e: Event) => void;
    refreshEvent: (e: Event) => void;
    resetData: () => void;
    clearData: () => void;
    refresh: () => void;
    close: () => void;
}
export declare function useHandler(data: SlideData, event: SlideEvent, config: SlideConfig, rootRef: any, containerRef: any, tileRef: any, dragBlockRef: any, dragBarRef: any, clearCbs: () => void): handlerType;
