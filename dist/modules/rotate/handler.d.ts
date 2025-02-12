import { RotateData, RotateEvent, RotateConfig } from "./types";
export interface handlerType {
    state: {} | any;
    updateData: (d: RotateData) => void;
    dragEvent: (e: Event) => void;
    closeEvent: (e: Event) => void;
    refreshEvent: (e: Event) => void;
    resetData: () => void;
    clearData: () => void;
    refresh: () => void;
    close: () => void;
}
export declare function useHandler(data: RotateData, event: RotateEvent, config: RotateConfig, rootRef: any, dragBlockRef: any, dragBarRef: any, clearCbs: () => void): handlerType;
