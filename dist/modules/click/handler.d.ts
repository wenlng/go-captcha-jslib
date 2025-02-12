/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/
import { ClickData, ClickEvent } from "./types";
export interface handlerType {
    dots: {
        value: [];
    };
    clickEvent: (e: Event) => void;
    confirmEvent: (e: Event) => void;
    closeEvent: (e: Event) => void;
    refreshEvent: (e: Event) => void;
    resetData: () => void;
    clearData: () => void;
    refresh: () => void;
    close: () => void;
}
export declare const useHandler: (_: ClickData, event: ClickEvent, clearCbs: () => void) => handlerType;
