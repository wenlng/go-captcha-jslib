/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/
export interface SlideConfig {
    width?: number;
    height?: number;
    thumbWidth?: number;
    thumbHeight?: number;
    verticalPadding?: number;
    horizontalPadding?: number;
    showTheme?: boolean;
    title?: string;
    iconSize?: number;
    scope?: boolean;
}
export declare const defaultConfig: () => SlideConfig;
export interface SlideData {
    thumbX: number;
    thumbY: number;
    thumbWidth: number;
    thumbHeight: number;
    image: string;
    thumb: string;
}
export declare const defaultSlideData: () => SlideData;
export interface SlidePoint {
    x: number;
    y: number;
}
export interface SlideEvent {
    move?: (x: number, y: number) => void;
    refresh?: () => void;
    close?: () => void;
    confirm?: (point: SlidePoint, reset: () => void) => void;
}
