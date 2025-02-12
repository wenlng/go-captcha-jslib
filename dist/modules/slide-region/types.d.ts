/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/
export interface SlideRegionConfig {
    width?: number;
    height?: number;
    verticalPadding?: number;
    horizontalPadding?: number;
    showTheme?: boolean;
    title?: string;
    iconSize?: number;
    scope?: boolean;
}
export declare const defaultConfig: () => SlideRegionConfig;
export interface SlideRegionData {
    thumbX: number;
    thumbY: number;
    thumbWidth: number;
    thumbHeight: number;
    image: string;
    thumb: string;
}
export declare const defaultSlideRegionData: () => SlideRegionData;
export interface SlideRegionPoint {
    x: number;
    y: number;
}
export interface SlideRegionEvent {
    move?: (x: number, y: number) => void;
    refresh?: () => void;
    close?: () => void;
    confirm?: (point: SlideRegionPoint, reset: () => void) => void;
}
export interface SlideRegionExpose {
    reset: () => void;
    clear: () => void;
    refresh: () => void;
    close: () => void;
}
