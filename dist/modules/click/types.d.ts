/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/
export interface ClickConfig {
    width?: number;
    height?: number;
    thumbWidth?: number;
    thumbHeight?: number;
    verticalPadding?: number;
    horizontalPadding?: number;
    showTheme?: boolean;
    title?: string;
    buttonText?: string;
    iconSize?: number;
    dotSize?: number;
}
export declare const defaultConfig: () => ClickConfig;
export interface ClickData {
    image: string;
    thumb: string;
}
export interface ClickDot {
    key: number;
    index: number;
    x: number;
    y: number;
}
export declare const defaultClickData: () => {
    image: string;
    thumb: string;
};
export interface ClickEvent {
    click?: (x: number, y: number) => void;
    callback?: () => void;
    refresh?: () => void;
    close?: () => void;
    confirm?: (dots: Array<ClickDot>, reset: () => void) => void;
}
