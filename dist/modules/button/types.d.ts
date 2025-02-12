export interface ButtonConfig {
    width?: number;
    height?: number;
    verticalPadding?: number;
    horizontalPadding?: number;
}
export interface ButtonState {
    type?: ButtonType;
    disabled?: boolean;
    title?: string;
    clickEvent?: () => void;
}
export declare const defaultConfig: () => ButtonConfig;
export declare const defaultState: () => ButtonState;
export type ButtonType = "default" | "warn" | "error" | "success";
