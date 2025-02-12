import { SlideRegionData, SlideRegionEvent, SlideRegionConfig } from "./types";
export interface handlerType {
    state: {} | any;
    updateData: (d: SlideRegionData) => void;
    dragEvent: (e: Event) => void;
    closeEvent: (e: Event) => void;
    refreshEvent: (e: Event) => void;
    resetData: () => void;
    clearData: () => void;
    refresh: () => void;
    close: () => void;
}
export declare function useHandler(data: SlideRegionData, event: SlideRegionEvent, config: SlideRegionConfig, rootRef: any, containerRef: any, tileRef: any, clearCbs: () => any): handlerType;
